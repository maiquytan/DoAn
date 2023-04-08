import { useDispatch } from 'react-redux'
import { actions } from '../../../reducers/app'
import './purchaseProduct.css'

export default function PurchaseProduct({ data }) {
  const dispatch = useDispatch()
  const {
    id,
    name,
    image,
    price,
    colorProduct,
    size,
    quantity,
  } = data

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
          <img src={colorProduct?.image} alt={name} style={{ height: '100%' }} />
        </div>
      </td>
      <td>
        <div className="email">
          <span>
            {name}
          </span>
          <div className="d-flex color-size" >
            <div
              className="item-color"
              style={{
                backgroundColor: colorProduct?.color.color_code,
                borderColor: (colorProduct?.color.color_code === 'white' || colorProduct?.color.color_code === '#fffff' ? 'gray' : 'white'),
                boxSizing: 'border-box',
              }}
            />
            <div className="item-size">
              {size}
            </div>
          </div>
        </div>
      </td>
      <td>
        {price}
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
          <input type="number" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} onKeyDown="return false"
            value={quantity}
            onChange={(e) => handleChangeQuantity(e.target.value)}
          />
        </div>
        {/* {quantity} */}
      </td>
      <td>
        {quantity * price}
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
