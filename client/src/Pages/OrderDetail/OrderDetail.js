import './orderDetail.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import PurchaseProduct from './PurchaseProduct/PurchaseProduct'
import { getOrderDetail } from '../../lib'
import { ORDER } from '../../Constants'

export default function OrderDetail() {
  const { _id } = useParams()

  const [orderDetail, setOrderDetail] = useState()
  // const status = orderDetail ? orderDetail[0]?.order.status : 0
  console.log(orderDetail,"xxxxxxxxxxxxxxxxxxxx")
  useEffect(() => {
    const sendRequest = async () => {
      const response = await getOrderDetail(_id)
      if (response) {
        setOrderDetail(response)
      }
    }
    sendRequest()
  }, [])

  // const totalPrice = orderDetail?.reduce((total, value) => {
  //   return total + (value.product.price * value.quantity)
  // }, 0)

  return (
    <div className='purchase'>
      <div className="container" >
        <div className="wrap top-page" style={{ background: "#b7b7b7" }}>
          Đơn đặt hàng
        </div>
      </div>
      <div className='container'>
        <div className='purchase-wrap'>
          <div className='row'>
            <div className='purchase-products col-8'>
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
                    {/* {orderDetail.product?.map((item, index) => (
                      <PurchaseProduct data={item} key={index} />
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='purchase-detail col-4'>
              <div className='purchase-detail-wrap'>
                <div className='purchase-detail-client-name'>
                  Khách hàng: {orderDetail?.user?.name}
                </div>
                <div className='purchase-detail-date'>
                  Ngày: 12/03/2022
                </div>
                <div className='purchase-detail-phone'>
                  <span>Số điện thoại: </span> 01234345798
                </div>
                <div className='purchase-detail-address mt-6px'>
                  {/* <span>Địa chỉ nhận hàng: </span> {orderDetail ? orderDetail[0]?.order.address : ''} */}
                </div>
                <hr className='mt-12px' />
                <div className='purchase-detail-price mt-12px'>
                  <div>Giá gốc:</div>
                  {/* <div>{totalPrice} đ</div> */}
                </div>
                <div className='purchase-detail-price mt-6px'>
                  <div>Giảm giá:</div>
                  {/* {discou} */}
                  <div>{orderDetail?.discount?.discount || 0}%</div>
                </div>
                <div className='purchase-detail-price'>
                  <span>Giá thanh toán:</span>
                  {/* <span>{totalPrice} đ</span> */}
                </div>

                <hr />

                <div>
                  <span>Trạng thái hóa đơn: </span>
                  {/* <span className={`order-status ${ORDER.status[status].style}`}> */}
                    {/* {ORDER.status[status].name}
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
