import './orders.css'
import { useEffect, useState } from 'react'

import Order from './Order/Order'
import { useDispatch } from 'react-redux'
import { deleteOrders, getOrders } from '../../lib'
import PaginateSearch from '../../Share/Components/Paginator/Paginate'

export default function Orders() {
  const [orders, setOrders] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const dispatch = useDispatch();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getOrders(currentPage)
      console.log(response,"xxxxxxx")
      if (response) {
        setOrders(response.orders)
        setTotalPage(Math.ceil(response.totalOrders / 10))
      }
    }
    sendRequest()
  }, [currentPage])

  const handleDeleteClick = async(list) => {
    const deleteOrderId = list._id;
    deleteOrders(deleteOrderId, dispatch)

    const response = await getOrders(currentPage); // currentPage là trang hiện tại
    if (response) {
      setOrders(response.orders)
      setTotalPage(Math.ceil(response.totalOrders / 10))
    }
  }

  return (
    <div className='admin-page'>
      <div className='orders'>
        <div className='container'>
          <div className='admin-page-title'>
            Đơn hàng
          </div>
          < div className='admin-page-content'>
            <table className='admin-table'>
              <thead>
              <tr className='admin-th'>
                <th style={{ textAlign: 'center' }}>Mã Hóa đơn</th>
                <th>Ngày</th>
                <th>Thành tiền</th>
                {/* <th>Mã đơn</th> */}
                <th>Trạng thái</th>
                <th className='th-actions'>Thao tác</th>
              </tr>
              </thead>
              {orders?.map((item, index) => (
                <Order data={item} key={index} handleDeleteClick= {handleDeleteClick}/>
              ))}
            </table>
              <div className="justify-center pagination-wrap">
            <PaginateSearch
              totalPage={totalPage}
              currentPage={currentPage}
              handleSetPage={(page) => { setCurrentPage(page) }}
              setCurrentPage = {setCurrentPage}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
