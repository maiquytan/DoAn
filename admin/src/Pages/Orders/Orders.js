import './orders.css'
import { useEffect, useState } from 'react'

import Order from './Order/Order'
import { getOrders } from '../../lib'

export default function Orders() {
  const [orders, setOrders] = useState()

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getOrders()
      if (response) {
        setOrders(response.results)
      }
    }
    sendRequest()
  }, [])

  console.log(orders)

  return (
    <div className='admin-page'>
      <div className='orders'>
        <div className='container'>
          <div className='admin-page-title'>
            Đơn hàng
          </div>
          < div className='admin-page-content'>
            <table className='admin-table'>
              <tr className='admin-th'>
                <th style={{ textAlign: 'center' }}>khách hàng</th>
                <th>Ngày</th>
                <th>Thành tiền</th>
                {/* <th>Mã đơn</th> */}
                <th>Trạng thái</th>
                <th className='th-actions'>Thao tác</th>
              </tr>
              {orders?.map((item, index) => (
                <Order data={item} key={index} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
