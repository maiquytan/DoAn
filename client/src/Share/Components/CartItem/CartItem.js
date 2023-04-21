import { useDispatch } from 'react-redux'
import { actions } from '../../../reducers/app'
import './cartItem.css'

export default function CartItem({ data }) {
  const dispatch = useDispatch()
  console.log(data)

  const handleRemoveFromCart = (product) => {
    dispatch(actions.removeFromCart(product))
  }

  const handleDecreaseQuantity = () => {
    if (data) {
      if (data.quantity <= 1) dispatch(actions.removeFromCart(data))
      dispatch(actions.decreaseFromCart(data))
    }
  }

  const handleIncreaseQuantity = () => {
    if (data) {
      dispatch(actions.addToCart(data))
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item-wrap row">
        <div className="col-3">
          <div className="cart-item-image" >
            <img src={data.image} alt={data.name} />
          </div>
        </div>
        <div className="col-9 flex-column">
          <div className="cart-item-content flex-column h-100">
            <div className="cart-item-name space-between">
              <p>
                {data.name}
              </p>
              <i
                className="fa fa-close"
                onClick={() => handleRemoveFromCart(data)}
              ></i>
            </div>
            <div className="color-size row">
              <div className="item-color">
                {data.color}
              </div>
              <div className="item-size">
                {data.size}
              </div>
            </div>

            <div className="cart-item-price-quantity bottom space-between">
              <div className="item-price">
                {`${data.price} đ`}
              </div>
              <div className="item-price row">
                <button type="submit"
                  onClick={handleDecreaseQuantity}
                >
                  <i className="fa fa-minus"></i>
                </button>
                {data.quantity}
                <button type="submit"
                  onClick={handleIncreaseQuantity}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
