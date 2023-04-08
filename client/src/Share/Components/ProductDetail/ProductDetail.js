import './productDetail.css'

export default function ProductDetail({ data }) {
  const { thumbnail } = data
  return (
    <div className='product-detail-frame'>
      <div className='container'>
        <div className='product-detail'>
          <div className='close-wrap'>
            <label className='btn-close' htmlFor='product-detail-check'>
              <i className='fa fa-close'></i>
            </label>
          </div>
          <div className='product-detail-wrap'>
            <div className='product-image-frame col-6'>
              <div className='product-image' style={{ background: 'url(' + thumbnail + ')' }}>

              </div>
            </div>
            <div className='product-content col-4'>
              <h2 className='product-title mt-12px'>
                Áo đẹp ơi là đẹp
              </h2>
              <span className='product-code'>
                Mã sản phẩm: 122345678
              </span>
              <div className="star-rating mt-12px" title="70%">
                <div className="back-stars">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <div className="front-stars" style={{ width: '70%' }}>
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className='product-price mt-12px'>
                <span className='product-update-price'>
                  300.000 đ
                </span>
                <span className='product-origin-price'>
                  400.000 đ
                </span>
              </div>
              <hr className='product-content-line' />
              <div className='product-color-name'>
                Màu sắc: <span> Đen</span>
              </div>
              <div className='product-colors'>
                <div className='row'>
                  <div className='product-color' style={{ backgroundColor: 'red' }}>
                  </div>
                  <div className='product-color' style={{ backgroundColor: 'yellow' }}>
                  </div>
                  <div className='product-color' style={{ backgroundColor: 'gray' }}>
                  </div>
                  <div className='product-color' style={{ backgroundColor: 'green' }}>
                  </div>
                </div>
              </div>
              <div className='product-size-name'>
                Kích cỡ: <span> L</span>
              </div>
              <div className='product-sizes'>
                <div className='row'>
                  <div className='product-size'>
                    S
                  </div>
                  <div className='product-size'>
                    M
                  </div>
                  <div className='product-size' >
                    L
                  </div>
                  <div className='product-size'>
                    XL
                  </div>
                </div>
              </div>
              <div className='product-stock mt-12px'>
                Hiện có: <span>290</span>
              </div>
              <hr className='product-content-line' />
              <div className='product-description'>
                <span>Mô tả:</span> Mùa đông lạnh bạn vẫn có thể diện những chiếc váy 2 dây, váy hoa điệu đà được mà không lo giá. Mùa đông lạnh bạn vẫn có thể diện những chiếc..
              </div>
              <div className='product-material mt-12px'>
                <span>Chất liệu:</span> Vải nhung
              </div>
              <div className='product-detail-actions'>
                <div className='row'>
                  <div className='product-detail-action btn-like'>
                    Yêu thích
                  </div>
                  <div className='product-detail-action btn-add-to-cart'>
                    Thêm vào giỏ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
