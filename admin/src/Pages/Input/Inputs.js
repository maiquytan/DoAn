import './inputs.css'
import { useEffect, useState } from 'react'

import Input from './Input/Input'
import NewBaseProduct from '../../Share/Components/NewProduct/NewProduct'
import { createInput, createProduct, getBaseProduct, getInputs, getSizes } from '../../lib'
import NewItem from './NewItem'
import BaseProductList from './BaseProductList'
import NewColorProduct from '../../Share/Components/NewProduct/NewColorProduct'

export default function Inputs() {
  const [isAdd, setIsAdd] = useState(false)
  const [image, setImage] = useState(null);
  const [code, setCode] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [discount, setDiscount] = useState('')
  const [name, setName] = useState('')
  const [describe, setDescribe] = useState('')
  const [imageUrl, setImageUrl] = useState(null);

  function handleImageChange(event) {
    setImage(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0])); // Tạo URL cho ảnh được chọn
  }
  const handleOnClick = () => {
    setIsAdd(true);
  }
  const handleCloseClick = () => {
    setIsAdd(false);
  }

  const handleAddProduct = async () => {
    // Kiểm tra tính hợp lệ của các giá trị input
    if (!name || !discount || !price || !color || !describe) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    try {
      // tạo sản phẩm mới bằng cách gọi API createInput được import từ lib
      const newProduct = {
        name: name,
        code: code,
        image: image,
        discount: discount,
        price: price,
        color: color,
        describe: describe
      }
      createProduct(newProduct);

      // Thông báo thêm sản phẩm thành công cho người dùng.
      alert('Thêm sản phẩm thành công.')
      // Reset giá trị của các input
      setName('')
      setPrice('')
      setDiscount('')
      setColor('')
      setDescribe('')
      setIsAdd(false);
    } catch (error) {
      alert('Thêm sản phẩm thất bại.')
      console.log(error)
    }
  }

  return (
    <div className="admin-page">
      <div className="inputs">
        <h1>Nhập hàng</h1>
        <div className='add-product' onClick={handleOnClick}>
          <i className="fa fa-plus" aria-hidden="true" ></i>
          <p>Thêm sản phẩm mới</p>
        </div>
        {isAdd &&
          <div className="product-detail-modal show">
            <div className="container animation" >
              <div className="product-detail">
                <div className="close-wrap">
                  <label className="btn-close" htmlFor="product-detail-check-1" onClick={handleCloseClick}>
                    <i className="fa fa-close"></i>
                  </label>
                </div>
                <form className="product-detail-wrap" onSubmit={handleAddProduct}>
                  <div className="product-image-frame col-6">
                    <div className="product-image" >
                      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
                    </div>
                    <input type="file" onChange={handleImageChange} />
                  </div>
                  <div className="product-content col-4">
                    <h2 className="product-title mt-12px">
                      Tên sản phẩm :
                      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name product"></input>
                    </h2>
                    <span className="product-code">
                      Mã sản phẩm:
                      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" />
                    </span>

                    <div className="product-price mt-12px">
                      <span className="product-update-price">
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
                      </span>

                    </div>
                    <div className="product-discount-name">
                      Giảm giá:
                      <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Enter discount" />
                    </div>
                    <div className="product-color-name">
                      Màu sắc:
                      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color" />
                    </div>


                    <hr className="product-content-line" />
                    <div className="product-description">
                      Mô tả:
                      <textarea
                        value={describe}
                        onChange={(e) => setDescribe(e.target.value)}
                        placeholder="Enter description"
                      />
                    </div>
                    <div className="product-detail-actions">
                      <div className="row">
                        <button className={`product-detail-action btn-like ${'disable'}`} onClick={handleCloseClick}>
                          Hủy
                        </button>
                        <button className="product-detail-action btn-add-to-cart" type='submit'>
                          Thêm
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
