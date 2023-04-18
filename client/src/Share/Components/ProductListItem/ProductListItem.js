import { useDispatch } from 'react-redux'
import { actions } from '../../../reducers/app'
import ProductDetail from '../ProductDetail/ProductDetail'
import './productListItem.css'

export default function ProductListItem({ data }) {
  const dispatch = useDispatch()
  // console.log("xxxx",data)
  // const { image, id, name } = data

  const cost = (100 - data.discount * 100) / 100 * data.price;

  const handleOpenModal = () => {
    if (data)
      dispatch(actions.setPreviewProduct(data))
  }

  console.log(data.discount)

  return (
    <>
      {data.map((product, index) => (
        <div className="col-2-4 product-lists-item" key={index}>
          <div className="thumb-item"
          // style={{ background: 'url(' + image + ')' }}
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
              {product.discount > 0 && (
                <>
                  <div className="sale-tag-square">
                    <span> Sale </span>
                    <span>
                      {`${product.discount * 100}%`} </span>
                  </div>
                  <div className="sale-tag-polygon">
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="thumb-item-name">
            {product.name}
          </div>
          <div className="thumb-item-price-like row">
            <div>
            <span>
              {product.discount > 0 && (
                <div className="thumb-item-price">
                  {`${(100 - product.discount * 100) / 100 * product.price} đ`}
                </div>
              )}
            </span>
            <span className="thumb-item-origin-price">
              {`${product.price} đ`}
            </span>
            </div>
            <span className="thumb-item-like">
              <i className="fa fa-heart center-box"></i>
              {/* 245 */}
            </span>
          </div>
        </div>
      ))}
    </>
  )
}
