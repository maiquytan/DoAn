import { useSelector } from 'react-redux'
import './purchase.css'
import PurchaseProduct from './PurchaseProduct/PurchaseProduct'

import { VIETNAM_PROVINCE } from '../../Constants/detailAdress'
import { useEffect, useState } from 'react'
import { createOrder } from '../../lib'
import { getCookie } from '../../helper'

export default function Purchase() {

  const cart = useSelector(state => state.app.cart)

  const totalPrice = cart.reduce((total, value) => {
    return total + (value.price * value.quantity)
  }, 0)

  const [province, setProvince] = useState(null)
  const [district, setDistrict] = useState(null)
  const [ward, setWard] = useState(null)
  const [detailAddress, setDetailAddress] = useState(null)

  useEffect(() => {
    setDistrict(null)
  }, [province])

  useEffect(() => {
    setWard(null)
  }, [district])

  const handleOrderSubmit = () => {
    const items = cart?.map((item) => {
      return { id: item.id, quantity: item.quantity }
    })
    const address1 = `${(detailAddress || '')}, ${ward?.name}, ${district?.name}, ${province?.name}`
    if (items) {
      const params = {
        address1,
        items,
        access_token: getCookie('access_token')
      }
      const sendResquest = async () => {
        const response = await createOrder(params)
        console.log(response)
      }
      sendResquest()
    }
  }

  return (
    <div className="purchase">
      <div className="container" >
        <div className="wrap top-page" style={{ background: "#b7b7b7" }}>
          Đơn đặt hàng
        </div>
      </div>
      <div className="container">
        <div className="purchase-wrap">
          <div className="row">
            <div className="purchase-products col-8">
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>&nbsp;</th>
                      <th>Sản phẩm</th>
                      <th>Giá tiền (vnd)</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền (vnd)</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item, index) => (
                      <PurchaseProduct key={index} data={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="purchase-detail col-4">
              <div className="purchase-detail-wrap">
                <div className="purchase-detail-title">
                  Thanh toán
                </div>
                <div className="purchase-detail-price">
                  <div>Giá gốc:</div>
                  <div>
                    {`${totalPrice} đ`}
                  </div>
                </div>
                <div className="purchase-detail-price">
                  <span>Giá thanh toán:</span>
                  <span>
                    {`${totalPrice} đ`}
                  </span>
                </div>
                {/* <hr />
                <span>Số điện thoại:</span>
                <input type="text" /> */}
                <hr />
                <span>Địa chỉ nhận hàng:</span>

                <select className="purchase-address-select" name="cars" id="cars" onChange={(e) => setProvince(VIETNAM_PROVINCE.find((x => x.code === Number(e.target.value))))} >
                  <option value="province">Tỉnh/ Thành Phố</option>
                  {VIETNAM_PROVINCE.map((item, index) => (
                    <option value={item.code} key={index}
                      onClick={() => setProvince(item)}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
                <select className="purchase-address-select" name="cars2" id="cars2" onChange={(e) => setDistrict(province.districts.find((x => x.code === Number(e.target.value))))} value={district?.code || 'province'}>
                  <option value="province">Quận/ Huyện</option>
                  {province?.districts.map((item, index) => (
                    <option value={item.code} key={index}
                      onClick={() => setDistrict(item)}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
                <select className="purchase-address-select" name="cars3" id="cars3" onChange={(e) => setWard(district.wards.find((x => x.code === Number(e.target.value))))} value={ward?.code}>
                  <option value="province">Phường/ Xã</option>
                  {district?.wards.map((item, index) => (
                    <option value={item.code} key={index}
                      onClick={() => setWard(item)}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
                <div style={{ marginTop: '6px', fontSize: '14px' }}>
                  Địa chỉ chi tiết (số nhà, v,v...):
                </div>
                <textarea className="purchase-address-textarea" id="w3review" name="w3review" rows="4" cols="50"
                  onChange={(e) => setDetailAddress(e.target.value)}
                >
                </textarea>
                <hr />
                <span>Phương thức thanh toán:</span>
                <label className="purchase-method" htmlFor="method1">
                  <input type="radio" className="purchase-method-radio" name="method" id="method1" autoComplete="off" value="value1" checked={true} readOnly />
                  <label className="purchase-option" htmlFor="method1" >
                    Thanh toán khi nhận hàng
                  </label>
                </label>
                {/* <label className="purchase-method" htmlFor="method2">
                  <input type="radio" className="purchase-method-radio" name="method" id="method2" autoComplete="off" value="value1" />
                  <label className="purchase-option" htmlFor="method2" >
                    Thanh toán online qua
                  </label>
                </label> */}
                <hr />
                <button
                  type="submit"
                  className="btn-purchase"
                  onClick={handleOrderSubmit}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
