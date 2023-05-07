// import OrderDetail from '../../../Share/Components/OrderDetail/OrderDetail'
import './order.css'
import dayjs from 'dayjs'
import { ORDER } from '../../../Constants'

export default function Order({ data ,handleDeleteClick }) {

  // console.log(data.status)
  return (
    <tbody>
    <tr className='admin-td'>
      <td style={{ textAlign: 'center' }} className='table-client-name'>
          #{data?._id}
      </td>
      <td>
        {dayjs(data.created_date).format('MM/d YYYY, hh:mm')}
      </td>
      <td>
        {data?.totalAmount} VND
      </td>
      {/* <td>1232534641423</td> */}
      <td>
        {/* {data.status Or} */}
        {ORDER.status[data?.status].name}
      </td>
      <td>
        <div className='table-actions'>
          <a href={`/orderdetail/${data.id}`}>
            <button className='table-read' style={{ color: 'green' }}>
              <i className='fa fa-eye'></i>
            </button>
          </a>
          {/* <OrderDetail/> */}
          <button className='table-update'>
            <i className='fa fa-pencil-square-o'></i>
          </button>
          <button className='table-delete' style={{ color: 'brown' }} onClick={()=>handleDeleteClick(data)}>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      </td>
    </tr>
    </tbody>
  )
}
