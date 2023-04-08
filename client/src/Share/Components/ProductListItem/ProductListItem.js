import { useDispatch } from 'react-redux'
import { actions } from '../../../reducers/app'
import ProductDetail from '../ProductDetail/ProductDetail'
import './productListItem.css'

export default function ProductListItem({ data }) {
  const dispatch = useDispatch()

  const { image, id, name } = data
  const listedPrice = data.price
  const sale = data.discount.discount
  const displaySale = sale > 100 ? 10 : sale
  const price = (100 - displaySale)/100 * listedPrice

  const handleOpenModal = () => {
    if (data)
      dispatch(actions.setPreviewProduct(data))
  }

  console.log(data)

  return (
    <div className="col-2-4 product-lists-item">
      <div className="thumb-item"
        style={{ background: 'url(' + image + ')' }}
      >
        <div className="thumb-item-mask center-box">
          <div className="thumb-item-actions">
            <div className="thumb-item-action">
              <i className="fa fa-heart center-box"></i>
            </div>
            <div className="thumb-item-action">
              <i className="fa fa-cart-plus center-box"></i>
            </div>
            <label className="thumb-item-action" htmlFor="product-detail-check" onClick={handleOpenModal}>
              <i className="fa fa-search center-box"></i>
            </label>
            <input type="checkbox" className="product-detail-check hidden-check" name="product-detail-checkbox" id="product-detail-check" autoComplete="off" />
            {/* <ProductDetail data={data} /> */}
          </div>
        </div>
        <div className="sale-tag">
          {sale > 0 && (
            <>
              <div className="sale-tag-square">
                <span> Sale </span>
                <span>
                  {`${displaySale}%`} </span>
              </div>
              <div className="sale-tag-polygon">
              </div>
            </>
          )}
        </div>
      </div>
      <div className="thumb-item-name">
        {name}
      </div>
      <div className="thumb-item-price-like row">
        <span className="thumb-item-price col-8">
          {`${price} đ`}
        </span>
        <span className="thumb-item-like col-4">
          <i className="fa fa-heart center-box"></i>
          {/* 245 */}
        </span>
      </div>
      {sale > 0 && (
        <div className="thumb-item-origin-price">
          {`${listedPrice} đ`}
        </div>
      )}
    </div>
  )
}
