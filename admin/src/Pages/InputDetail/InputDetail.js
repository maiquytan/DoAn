// import './inputDetail.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { getInputDetail } from '../../lib'
import InputProduct from './InputProduct/InputProduct'

export default function InputDetail() {
  const { id } = useParams()

  const [inputDetail, setInputDetail] = useState()

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getInputDetail(id)
      if (response) {
        setInputDetail(response)
      }
    }
    sendRequest()
  }, [])

  const totalPrice = inputDetail?.reduce((total, value) => {
    return total + (value.price * value.quantity)
  }, 0)

  console.log(inputDetail?.input?.created_date)

  return (
    <div className='purchase'>
      <div className='top-page container' style={{ background: '#b7b7b7' }}>
        Đơn nhập hàng:
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
                    {inputDetail?.map((item, index) => (
                      <InputProduct data={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='purchase-detail col-4'>
              <div className='purchase-detail-wrap'>
                <div className='purchase-detail-client-name'>
                  Tổng quát đơn nhập
                </div>
                <div className='purchase-detail-date'>
                  Ngày: {dayjs(new Date(inputDetail && inputDetail[0]?.input?.created_date)).format('D/MM YYYY, hh:mm')}
                </div>
                <div className='purchase-detail-phone'>
                  <span>Số điện thoại: </span> 01234345798
                </div>
                <div className='purchase-detail-address mt-6px'>
                  {/* <span>Địa chỉ nhận hàng: </span> {inputDetail ? inputDetail[0]?.order.address1 : ''} */}
                </div>
                <hr className='mt-12px' />
                <div className='purchase-detail-price mt-12px'>
                  <div>Giá gốc:</div>
                  <div>{totalPrice} đ</div>
                </div>

                <div className='purchase-detail-price'>
                  <span>Giá thanh toán:</span>
                  <span>{totalPrice} đ</span>
                </div>
                {/* <hr />
                <div type='submit' className='purchase-detail-actions space-between mt-12px'>
                  <div className='col-6'>
                    <button type='submit' className='btn-purchase-detail btn-cancel-order'>
                      Hủy đơn
                    </button>
                  </div>
                  <div className='col-6'>
                    <button type='submit' className='btn-purchase-detail btn-update-order'>
                      Cập nhật
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>

  )
}
