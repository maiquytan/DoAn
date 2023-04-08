import './inputs.css'
import { useEffect, useState } from 'react'

import Input from './Input/Input'
import NewBaseProduct from '../../Share/Components/NewProduct/NewProduct'
import { createInput, getBaseProduct, getInputs, getSizes } from '../../lib'
import NewItem from './NewItem'
import BaseProductList from './BaseProductList'
import NewColorProduct from '../../Share/Components/NewProduct/NewColorProduct'

export default function Inputs() {

  const [inputs, setInputs] = useState()
  const [inputsCount, setInputsCount] = useState(0)
  const [baseProducts, setBaseProducts] = useState()
  const [baseProduct, setBaseProduct] = useState()
  const [productColors, setProductColors] = useState()
  const [productColor, setProductColor] = useState()
  const [sizes, setSizes] = useState()
  const [size, setSize] = useState()
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()
  const [inputDetails, setInputDetails] = useState([])
  const [successNotification, setSuccessNotification] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [dropDown, setDropdown] = useState(false)
  const [isAddNewBaseProduct, setIsAddNewBaseProduct] = useState(false)
  const [isAddNewColorProduct, setIsAddNewColorProduct] = useState(false)
  // const [notification, setNotification] = useState(null)

  useEffect(() => {
    if (inputDetails.length > 0) {
      setSuccessNotification(null)
    }
  }, [inputDetails])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getBaseProduct()
      const response2 = await getSizes()
      const response3 = await getInputs()
      if (response) {
        setBaseProducts(response.results)
      }
      if (response2) {
        setSizes(response2.results)
      }
      if (response3) {
        setInputs(response3.results)
        setInputsCount(response3.count)
      }
    }
    sendRequest()
  }, [])

  useEffect(() => {
    if (sizes)
      setSize(sizes[0])
  }, [sizes])

  useEffect(() => {
    if (successNotification) {
      const sendRequest = async () => {
        const response = await getBaseProduct()
        const response2 = await getSizes()
        const response3 = await getInputs()
        if (response) {
          setBaseProducts(response.results)
        }
        if (response2) {
          setSizes(response2.results)
        }
        if (response3) {
          setInputs(response3.results)
          setInputsCount(response3.count)
        }
      }
      sendRequest()
    }
  }, [successNotification])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getBaseProduct(searchText)
      if (response) {
        setBaseProducts(response.results)
      }
    }
    sendRequest()
  }, [searchText, isAddNewBaseProduct, isAddNewColorProduct])

  const handleSetBaseProduct = (id) => {
    const isExist = baseProducts.find(x => x.id === Number(id))
    if (isExist && id) {
      setBaseProduct(baseProducts.find(x => x.id === Number(id)))
      setProductColors(baseProducts.find(x => x.id === Number(id))?.product_colors)
      setProductColor(baseProducts.find(x => x.id === Number(id))?.product_colors[0])
      setSearchText(isExist.name)
    }
  }

  const handleSetProductColor = (id) => {
    console.log(id)
    if (productColors?.find(x => x.id === Number(id)) && id) {
      setProductColor(productColors?.find(x => x.id === Number(id)))
    }
  }

  const handleAddProduct = () => {
    const isValid = productColors && productColor
    if (isValid) {
      const newInputDetail = {
        base_product: baseProduct?.id,
        product_color: productColor?.id,
        size: size.id,
        quantity,
        price,
      }
      const isExist = inputDetails.find(x => Number(x.product_color) === Number(productColor?.id) && Number(x.size) === Number(size.id))
      if (isExist) {
        setInputDetails(inputDetails.map(item => {
          if ((Number(item.product_color) === Number(productColor?.id) && Number(item.size) === Number(size.id)))
            return {
              ...item, quantity: item.quantity + newInputDetail.quantity
            }
          return item
        }))
      } else {
        setInputDetails([...inputDetails, newInputDetail])
      }
    }
    else {
      console.log('loi xay ra')
    }
  }

  const handleAddToInput = () => {
    const isValid = productColors && productColor && (Number(quantity) > 0) && (Number(price) > 0)
    if (isValid) {
      const newInputDetail = {
        base_product: baseProduct?.id,
        product_color: productColor?.id,
        size: size.id,
        quantity,
        price,
      }
      const isExist = inputDetails.find(x => Number(x.product_color) === Number(productColor?.id) && Number(x.size) === Number(size.id))
      if (isExist) {
        setInputDetails(inputDetails.map(item => {
          if ((Number(item.product_color) === Number(productColor?.id) && Number(item.size) === Number(size.id)))
            return {
              ...item, quantity: item.quantity + newInputDetail.quantity
            }
          return item
        }))
      } else {
        setInputDetails([...inputDetails, newInputDetail])
      }
    }
    else {
      console.log('loi xay ra')
    }
  }

  const handleCreateInput = () => {
    const sendRequest = async () => {
      const response = await createInput(inputDetails)
      if (response) {
        setInputDetails([])
        setSuccessNotification('Nhập hàng thành công')
        console.log('Succsess!')
      }
    }
    if (inputDetails.length > 0) {
      sendRequest()
    }
  }

  const handleSetSize = (id) => {
    const isExist = sizes?.find(x => x.id === Number(id))
    if (isExist)
      setSize(isExist)
  }

  const handleSetSearchText = (value) => {
    setSearchText(value)
    if (value.length > 0)
      setDropdown(true)
  }

  const handleAddBaseProductSuccess = () => {
    setIsAddNewBaseProduct(false)
    setSuccessNotification('Thêm sản phẩm gốc thành công!')
  }

  const handleSetIsAddNewColorProduct = () => {
    if (baseProduct)
      setIsAddNewColorProduct(true)
  }

  const handleSetSuccessNotification = () => {
    setSuccessNotification('Thêm áo màu thành công!')
    setIsAddNewColorProduct(false)
  }

  // console.log(sizes, size)
  // console.log(baseProducts?.product_colors)
  // console.log(inputDetails)

  return (
    <div className="admin-page">
      <div className="inputs">
        <div className="container">
          <div className="admin-page-title">
            Nhập hàng
          </div>
          < div className="admin-page-content">
            {successNotification && <p className="success-input">{successNotification}</p>}
            <input
              type="checkbox"
              className="new-product-check hidden-check"
              name="new-product-checkbox"
              id="new-product-check"
              autoComplete="off"
              checked={isAddNewBaseProduct}
            />
            <NewBaseProduct
              addBaseProductSuccess={() => handleAddBaseProductSuccess()}
              turnOffDialog={() => setIsAddNewBaseProduct(false)}
            />
            {(isAddNewColorProduct && baseProduct) && (
              <NewColorProduct
                turnOffDialog={() => setIsAddNewColorProduct(false)}
                baseProduct={baseProduct}
                addColorProductSuccess={() => handleSetSuccessNotification()} />
            )}
            <table className="admin-table">
              <tr className="admin-th">
                <th>Chọn sản phẩm</th>
                <th>Màu sắc</th>
                <th>Kích cỡ</th>
                <th>Số lượng</th>
                <th>Giá nhập/chiếc(vnđ)</th>
                <th className="th-actions" />
              </tr>
              {inputDetails?.map((item, index) => (
                <NewItem
                  productColor={productColors?.find(x => x.id === Number(item.product_color))}
                  baseProduct={baseProducts?.find(x => x.id === Number(item.base_product))}
                  size={sizes?.find(x => x.id === Number(item.size))}
                  quantity={item.quantity}
                  price={item.price}
                  key={index}
                />
              ))}
              <tr className="admin-td">
                <td>
                  <div className="admin-cell-td d-flex product-img">
                    <img src={productColor?.image?.replace('http://127.0.0.1:8000/products/', 'http://127.0.0.1:8000/static/products/') || '/images/common/default-thumbnail.jpg'} alt="" />
                    <input
                      list="base_products"
                      value={searchText}
                      onChange={e => handleSetSearchText(e.target.value)}
                      onFocus={() => setDropdown(true)}
                    />
                    <label htmlFor="new-product-check" className="btn-admin-cell-td btn-new-product" onClick={() => setIsAddNewBaseProduct(true)}>
                      <i className="fa fa-plus"></i>
                    </label>
                    {dropDown && (
                      <BaseProductList
                        baseProductList={baseProducts}
                        handleSetBaseProductProp={item => handleSetBaseProduct(item.id)}
                        turnOffDropDown={() => setDropdown(false)}
                      />
                    )}
                  </div>
                </td>
                <td>
                  <div className="admin-cell-td d-flex color-td">
                    <div
                      className="admin-color-td"
                      style={{ background: productColor?.color?.color_code || "#eee" }}
                    />
                    <select name="Size" id="size-product" onChange={e => handleSetProductColor(e.target.value)} defaultValue={sizes ? sizes[0]?.id : 1}>
                      <option disabled>
                        Chọn màu
                      </option>
                      {productColors?.map((item, index) => (
                        <option value={item.id} key={index}>
                          {item.color?.name}
                        </option>
                      ))}
                    </select>
                    <button className="btn-admin-cell-td" onClick={() => handleSetIsAddNewColorProduct(true)}>
                      <i className="fa fa-plus"></i>
                    </button>

                  </div>
                  {/* <datalist id="admin-color1">
                    {productColors?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.color?.name}
                      </option>
                    ))}
                  </datalist> */}
                </td>
                <td>
                  <div className="admin-cell-td d-flex size-td">
                    <div className="admin-size-td">
                      {size?.name}
                    </div>
                    <select name="Size" id="size-product" onChange={e => handleSetSize(e.target.value)} defaultValue={sizes ? sizes[0]?.id : 1}>
                      <option disabled>
                        Chọn size
                      </option>
                      {sizes?.map((item, index) => (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <datalist id="admin-size">
                    {sizes?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </datalist>
                </td>
                <td>
                  <div className="admin-cell-td quantity-td row">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={1}
                      onChange={e => setQuantity(Number(e.target.value))}
                    />
                  </div>
                </td>
                <td>
                  <div className="admin-cell-td money-td row">
                    <input
                      type="number"
                      id="money"
                      name="money"
                      min={1}
                      onChange={e => setPrice(Number(e.target.value))}
                    />
                  </div>
                </td>
                <td>
                  <div className="table-actions btn-input-plus">
                    <button
                      title="Thêm vào đơn"
                      onClick={handleAddToInput}
                    >
                      Thêm
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          {inputDetails.length > 0 && (
            <div className="create-input-btn">
              <button onClick={handleCreateInput}>
                Nhập hàng
              </button>
            </div>
          )}
          <div className="inputs-history-title">
            Lịch sử nhập hàng:
          </div>
          < div className="admin-page-content">
            <table className="admin-table">
              <tr className="admin-th">
                <th>STT</th>
                {/* <th>Số lượng</th> */}
                {/* <th>Tổng đơn (vnd)</th> */}
                <th>Ngày</th>
                <th className="th-actions">Thao tác</th>
              </tr>
              {inputs?.map((item, index) => (
                <Input data={item} index={index} key={index} count={inputsCount} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
