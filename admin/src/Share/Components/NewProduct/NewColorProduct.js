import './newProduct.css'
import { useEffect, useState, useMemo } from 'react'
import { createBaseProduct, createColorProduct, getColors, getTypes } from '../../../lib'

export default function NewColorProduct({ baseProduct, addColorProductSuccess, turnOffDialog }) {

  console.log(baseProduct)

  const [types, setTypes] = useState([])
  const [colors, setColors] = useState([])
  const [image, setImage] = useState()
  const [type, setType] = useState()
  const [color, setColor] = useState()
  const [errors, setErrors] = useState({})

  const getImage = (image) => {
    if (typeof (image) === 'object' && image !== null) {
      return URL.createObjectURL(image)
    }
    return image
  }

  const displayImage = useMemo(() => getImage(image), [image])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getTypes()
      const colorResponse = await getColors()
      if (response) {
        setTypes(response.results)
        setType(Number(response.results[0].id))
      }
      if (colorResponse) {
        setColors(colorResponse.results)
        setColor(Number(colorResponse.results[0].id))
      }
    }
    sendRequest()
  }, [])

  const handleCreateColorProduct = (e) => {
    e.preventDefault()
    const newColorProduct = {
      image,
      color,
      base_product: baseProduct.id
    }

    const sendRequest = async () => {
      const response = await createColorProduct(newColorProduct)
      if (!response.error) {
        setErrors({})
        addColorProductSuccess()
        return
      }
      setErrors(response.error)
    }
    sendRequest()
  }

  return (
    <div className="new-color-product-frame">
      <div className="container">
        <div className="new-product">
          <div className="close-wrap">
            <label className="btn-close" htmlFor="new-product-check" onClick={turnOffDialog}>
              <i className="fa fa-close"></i>
            </label>
          </div>
          <div className="new-product-wrap">
            <div className="product-image-frame col-6">
              <label htmlFor="product-image-upload-2" className="product-image center-box"
                style={{ background: `url(${displayImage || '/assets/images/background-upload-clothes.jpg'})` }}
              >
                <form action="/action_page.php">
                  <input type="file" id="product-image-upload-2" name="filename" onChange={e => setImage(e.target.files[0])} />
                </form>
              </label>
            </div>
            <form className="product-content col-4" onSubmit={handleCreateColorProduct}>
              {Object.keys(errors).length > 0 && <p> Đã có lỗi </p>}
              <input
                className="product-title mt-12px"
                type="text" id="product-name"
                name="product-name"
                placeholder="Tên sản phẩm..."
                value={baseProduct?.name}
                disabled
              />
              <span className="product-code">
                Mã sản phẩm:
                <input
                  className="mt-12px ml-12px"
                  type="text" id="product-code"
                  name="product-code" placeholder=""
                  value={baseProduct?.code_name}
                  disabled
                />
              </span>
              <div className="mt-12px product-price">
                Giá bán (vnd):
                <input
                  className="price-field"
                  type="number"
                  id="product-price"
                  name="product-price"
                  placeholder=""
                  min={1}
                  value={baseProduct?.price}
                  disabled
                />
              </div>
              <hr className="product-content-line mt-12px hidden" />
              <div className="product-type">
                <span> Thể loại: </span>
                <select name="types" id="types" className="ml-12px" value={baseProduct?.type?.name || 2} >
                  {types.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>

              </div>
              <div className="product-color-name row">
                <span> Màu sắc: </span>

                <div
                  className="admin-color-td ml-12px"
                  style={{ background: colors?.find(x => x.id === Number(color))?.color_code || "#eee" }}
                />
                <select name="Size" id="colors-product" onChange={e => setColor(e.target.value)} defaultValue={colors ? colors[0]?.id : 1}>
                  <option disabled>
                    Chọn màu
                  </option>
                  {colors?.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <datalist id="admin-color">
                  <option value="Cam">
                    Cam
                  </option>
                  <option value="Xanh">
                    Xanh
                  </option>
                  <option value="#000000">
                    Đen
                  </option>
                </datalist>
              </div>
              <hr className="product-content-line mt-12px" />
              <div className="product-description">
                <span>Mô tả:</span>
                <textarea className="mt-12px"
                  id="product-des" name="product-des" rows={6} cols={50} placeholder="Điền mô tả sản phẩm tại đây ..."
                  value={baseProduct?.description}
                  readOnly
                  disabled
                />
              </div>
              {/* <div className="product-material mt-12px">
                <span>Chất liệu:</span> <input type="text" name="product-material" id="product-material" />
              </div> */}
              <div className="new-product-actions">
                <div className="row">
                  <div className="new-product-action btn-cancel" onClick={turnOffDialog}>
                    Hủy
                  </div>
                  <button
                    className="new-product-action btn-add"
                    // onClick={}
                    type="submit"
                  >
                    Thêm mới
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
