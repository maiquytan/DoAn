import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
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
  console.log(previewProduct)

  const handleCloseModal = () => {
    dispatch(actions.clearPreviewProduct())
  }

  useEffect(() => {
    if (previewProduct._id) {
      const sendRequest = async () => {
        const response = await getProductColorsByBaseProductId(previewProduct._id)
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

  // const handleAddToCart = () => {
  //   if (productSelected) {
  //     const productParams = {
  //       id: productSelected.id,
  //       name: previewProduct.name,
  //       colorProduct: colorSelected,
  //       size: PRODUCT_CONSTANT.size[productSelected.size],
  //       price: previewProduct.price,
  //       quantity: 1
  //     }
  //     dispatch(actions.addToCart(productParams))
  //     handleCloseModal()
  //   }
  // }
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
                  <span className="product-code">
                    Mã sản phẩm: {previewProduct.code}
                  </span>

                  <div className="product-price mt-12px">
                    <span className="product-update-price">
                      {(100 - previewProduct.discount * 100) / 100 * previewProduct.price} đ
                    </span>
                    {previewProduct.discount > 0 && (
                      <span className="product-origin-price">
                        {previewProduct.price} đ
                      </span>
                    )}
                  </div>
                  <hr className="product-content-line" />
                  <div className="product-color-name">
                    Màu sắc: <span> {previewProduct.color} </span>
                  </div>
                  <div className="product-size-name">
                    Kích cỡ: <span> {previewProduct.size}</span>
                  </div>

                  <hr className="product-content-line" />
                  <div className="product-description">
                    <span>Mô tả:</span> {previewProduct.describe}
                  </div>
                  <div className="product-detail-actions">
                    <div className="row">
                      <div className={`product-detail-action btn-like ${'disable'}`}>
                        Hủy
                      </div>
                      <div
                        className="product-detail-action btn-add-to-cart"
                      // onClick={handleAddToCart}
                      >
                        Sửa
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
          .product-detail-action.disable {
            pointer-events: none;
          }
          .product-detail-action {
            user-select: none;
          }
        `}
      </style>
    </>
  )
}
