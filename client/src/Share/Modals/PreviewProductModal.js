import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PRODUCT_CONSTANT } from '../../Constants'
import ClickOutSide from '../../hooks/ClickOutSide'
import { getProductColorsByBaseProductId } from '../../lib'
import { actions } from '../../reducers/app'

export default function PreviewProductModal() {
  const dispatch = useDispatch()
  const [productColors, setProductColors] = useState([])
  const [colorSelected, setColorSelected] = useState(null)
  const [productSelected, setProductSelected] = useState(null)

  const previewProduct = useSelector(state => state.app.previewProduct)

  const handleCloseModal = () => {
    dispatch(actions.clearPreviewProduct())
  }

  console.log(productSelected)

  useEffect(() => {
    if (previewProduct.id) {
      const sendRequest = async () => {
        const response = await getProductColorsByBaseProductId(previewProduct.id)
        if (response) {
          setProductColors(response)
          setColorSelected(response[0])
          return response
        }
        return null
      }
      sendRequest()
    }
  }, [previewProduct])

  useEffect(() => {
    setProductSelected(null)
  }, [colorSelected])

  const handleSetColor = (color) => {
    if (color !== colorSelected)
      setColorSelected(color)
  }

  const handleAddToCart = () => {
    if (productSelected) {
      const productParams = {
        id: productSelected.id,
        name: previewProduct.name,
        colorProduct: colorSelected,
        size: PRODUCT_CONSTANT.size[productSelected.size],
        price: previewProduct.price,
        quantity: 1
      }
      dispatch(actions.addToCart(productParams))
      handleCloseModal()
    }
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
                  <div className="product-image" style={{ background: 'url(' + (colorSelected?.image || previewProduct.image) + ')' }}>

                  </div>
                </div>
                <div className="product-content col-4">
                  <h2 className="product-title mt-12px">
                    {previewProduct?.name}
                  </h2>
                  <span className="product-code">
                    Mã sản phẩm: {previewProduct.code_name}
                  </span>
                  {previewProduct.rating ? (
                    <div className="star-rating mt-12px" title="70%">
                      <div className="back-stars">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <div className="front-stars" style={{ width: "70%" }}>
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="no-rating" style={{ marginTop: '12px', fontStyle: 'italic' }}>
                      (This product have no rating yet.)
                    </div>
                  )}

                  <div className="product-price mt-12px">
                    <span className="product-update-price">
                      {previewProduct.price} đ
                    </span>
                    {previewProduct.discount > 0 && (
                      <span className="product-origin-price">
                        {previewProduct.price * (previewProduct.discount / 100)} đ
                      </span>
                    )}
                  </div>
                  <hr className="product-content-line" />
                  <div className="product-color-name">
                    Màu sắc: <span> {colorSelected?.color.name} </span>
                  </div>
                  <div className="product-colors">
                    <div className="row">
                      {productColors.map((color, index) => (
                        <div
                          key={index}
                          className={`product-color ${color.id === colorSelected?.id ? 'active' : ''}`}
                          style={{ backgroundColor: color?.color?.color_code }}
                          onClick={() => handleSetColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="product-size-name">
                    Kích cỡ: <span>
                      {PRODUCT_CONSTANT.size[productSelected?.size] || ''}
                    </span>
                  </div>
                  <div className="product-sizes">
                    <div className="row">
                      {colorSelected?.product.map((product, index) => (
                        <div
                          key={index}
                          className={`product-size ${product.id === productSelected?.id ? 'active' : ''}`}
                          onClick={() => setProductSelected(product)}
                        >
                          {PRODUCT_CONSTANT.size[product.size]}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product-stock mt-12px">
                    {productSelected ? (
                      <>
                        Hiện có: <span>{productSelected?.quantity}</span>
                      </>
                    ) : (
                      <span style={{ color: 'orange' }}>
                        Quý khách vui lòng chọn 'Size'
                      </span>
                    )}

                  </div>
                  <hr className="product-content-line" />
                  <div className="product-description">
                    <span>Mô tả:</span> Mùa đông lạnh bạn vẫn có thể diện những chiếc váy 2 dây, váy hoa điệu đà được mà không lo giá. Mùa đông lạnh bạn vẫn có thể diện những chiếc..
                  </div>
                  <div className="product-material mt-12px">
                    <span>Chất liệu:</span> Vải nhung
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
      <style jsx="true">
        {`
          .product-detail-modal.show{
            visibility: visible;
          }
          .product-detail-modal .container {
            margin-top: 100vh;
            transition: 0.4s;
          }
          .product-detail-modal .animation {
            margin-top: 0;
          }
        `}
      </style>
    </>
  )
}
