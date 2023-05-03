import { useDispatch } from 'react-redux'
import { actions } from '../../../reducers/app'
import './purchaseProduct.css'

export default function PurchaseProduct({ data }) {
  const dispatch = useDispatch()

  const handleChangeQuantity = (value) => {
    if (data && value) {
      const product = { ...data, quantity: Number(value) }
      dispatch(actions.setProductToCart(product))
    }
  }

  const handleRemoveFromCart = (product) => {
    if (product)
      dispatch(actions.removeFromCart(product))
  }

  return (
    <tr className="alert" role="alert">
      <td>
        <div className="img" style={{ background: '#eee', textAlign: 'center' }} >
          <img src={data.image} alt={data.name} style={{ height: '100%' }} />
        </div>
      </td>
      <td>
        <div className="email">
          <span>
            {data.name}
          </span>
          <div className="d-flex color-size" >
            <div
              className="item-color"

            />
            <div className="item-size">
              {data.size}
            </div>
          </div>
        </div>
      </td>
      <td>
        {data.price}
      </td>
      <td className="quantity">
        <div className="input-group item-price d-flex">
          {/* <div type="submit" style={{ borderRadius: '40px', border: 'solid 1px #ddd', width: '15px', height: '15px', fontSize: '9px', }}
          className="quantity-btn"
          // onClick={handleDecreaseQuantity}
          >
            <i className="fa fa-minus"></i>
          </div>
          {quantity}
          <div type="submit" style={{ borderRadius: '40px', border: 'solid 1px #ddd', width: '15px', height: '15px', fontSize: '9px', }}
          className="quantity-btn"
          // onClick={handleIncreaseQuantity}
          >
            <i className="fa fa-plus"></i>
          </div> */}
          <input type="number" name="quantity" className="quantity form-control input-number" min={1} max={100} onKeyDown="return false"
            value={data.quantity}
            onChange={(e) => handleChangeQuantity(e.target.value)}
          />
        </div>
        {/* {quantity} */}
      </td>
      <td>
        {data.quantity * data.price}
      </td>
      <td>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
          onClick={() => handleRemoveFromCart(data)}
        >
          <span aria-hidden="true"><i className="fa fa-close" /></span>
        </button>
      </td>
    </tr>
  )
}
