import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './PreviewProduct.css'
import ClickOutSide from '../../hooks/ClickOutSide'
// import { getProductColorsByBaseProductId } from '../../lib'
import { actions } from '../../reducers/app'

export default function PreviewProductModal() {
  const dispatch = useDispatch()
  const [productSize, setProductSize] = useState()
  const [productSelected, setProductSelected] = useState(null)

  const previewProduct = useSelector(state => state.app.previewProduct)
  console.log(previewProduct)

  const handleCloseModal = () => {
    dispatch(actions.clearPreviewProduct())
  }

  const cost = (100 - previewProduct.discount * 100) / 100 * previewProduct.price
  // useEffect(() => {
  //   if (previewProduct._id) {
  //     const sendRequest = async () => {
  //       // const response = await getProductColorsByBaseProductId(previewProduct._id)
  //       if (response) {
  //         // setProductColors(response)
  //         // setColorSelected(response[0])
  //         return response
  //       }
  //       return null
  //     }
  //     sendRequest()
  //   }
  // }, [previewProduct])

  useEffect(() => {
    setProductSelected(null)
  }, [])

  const handleAddToCart = () => {
      const productParams = {
        _id: previewProduct._id,
        image: previewProduct.image,
        name: previewProduct.name,
        color: previewProduct.color,
        price: cost,
        quantity: 1
      }
      dispatch(actions.addToCart(productParams))
      handleCloseModal()
  }

  return (
    <>
      <div className={`product-detail-modal ${(Object.keys(previewProduct).length > 0) ? 'show' : ''}`}>
        <div className={`container ${(Object.keys(previewProduct).length > 0) ? 'animation' : ''}`}>
          <ClickOutSide onClickOutSide={handleCloseModal}>
            <div className="product-detail">
              <div className="close-wrap">
                <label className="btn-close" htmlFor="product-detail-check-1" onClick={handleCloseModal}>
                  <i className="fa fa-close"></i>
                </label>
              </div>
              <div className="product-detail-wrap">
                <div className="product-image-frame col-6">
                  <div className="product-image" style={{ background: 'url(' +  previewProduct.image + ')' }}>
                  </div>
                </div>
                <div className="product-content col-4">
                  <h2 className="product-title mt-12px">
                    Tên sản phẩm : {previewProduct?.name}
                  </h2>
                  <p className="product-code">
                    Mã sản phẩm : {previewProduct.code}
                  </p>

                  <div className="product-price mt-12px">
                    <span className="product-update-price">
                    {cost} đ
                    </span>
                    {previewProduct.discount > 0 && (
                      <span className="product-origin-price">
                        {previewProduct.price} đ
                      </span>
                    )}
                  </div>
                  <hr className="product-content-line" />
                  <div className="product-color-name away">
                    Giới tính: <span> {previewProduct.gender} </span>
                  </div>
                  <div className="product-color-name away">
                    Màu sắc: <span> {previewProduct.color} </span>
                  </div>
                  <div className="product-size-name away">
                    Kích cỡ: <span>
                      <select></select>
                    {previewProduct.size}
                    </span>
                  </div>
                  <div className="product-sizes">
                    <div className="row">
                      {previewProduct.size?.map((product, index) => (
                        <div
                          key={index}
                          className={`product-size ${product.id === previewProduct?.id ? 'active' : ''}`}
                          onClick={() => setProductSize(product)}
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="product-content-line" />
                  <div className="away">
                    Trạng thái : {previewProduct.status}
                  </div>
                  <div className="product-description">
                    Mô tả: {previewProduct.describe}
                  </div>
                  <div className="product-detail-actions">
                    <div className="row">
                      <div className="product-detail-action btn-like">
                        Yêu thích
                      </div>
                      <div
                        className="product-detail-action btn-add-to-cart"
                        onClick={handleAddToCart}
                      >
                        Thêm vào giỏ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ClickOutSide>
        </div>
      </div >
    </>
  )
}
