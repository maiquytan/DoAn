import { useDispatch } from 'react-redux'
import { actions } from '../../../reducers/app'
import './cartItem.css'

export default function CartItem({ data }) {
  const dispatch = useDispatch()

  const {
    id,
    name,
    price,
    colorProduct,
    size,
    quantity,
  } = data

  const color = colorProduct.color

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
          <div className="cart-item-image">
            <img src={colorProduct.image} alt={name} />
          </div>
        </div>
        <div className="col-9 flex-column">
          <div className="cart-item-content flex-column h-100">
            <div className="cart-item-name space-between">
              <span>
                {name}
              </span>
              <i
                className="fa fa-close"
                onClick={() => handleRemoveFromCart(data)}
              ></i>
            </div>
            <div className="color-size row">
              <div
                className="item-color"
                style={{
                  backgroundColor: color.color_code,
                  borderColor: (color.color_code === 'white' || color.color_code === '#fffff' ? 'gray' : 'white'),
                  boxSizing: 'border-box',
                }}
              />
              <div className="item-size">
                {size}
              </div>
            </div>

            <div className="cart-item-price-quantity bottom space-between">
              <div className="item-price">
                {`${price} đ`}
              </div>
              <div className="item-price row">
                <button type="submit"
                  onClick={handleDecreaseQuantity}
                >
                  <i className="fa fa-minus"></i>
                </button>
                {quantity}
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
