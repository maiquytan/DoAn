import './purchaseOrder.css'
import dayjs from 'dayjs'

import { ORDER } from '../../../Constants'
import { NavLink } from 'react-router-dom'

export default function PurchaseOrder({ data }) {
  console.log(data,"bbbbbbbbbbbb")

  return (
    <>
      {data && (
        <tr className="alert" role="alert">
          <td>
            <></>
          </td>
          <td>
            <div className="email">
              <p>
                #{data._id}
              </p>
            </div>
          </td>
          <td>
            <div className={`order-status ${ORDER.status[data.status].style}`}>
              {ORDER.status[data.status].name}
            </div>
          </td>
          <td className="order-price">
            {data.totalAmount}
          </td>
          <td>
            {dayjs().format('D/MM YYYY, hh:mm')}
          </td>
          <td>
            {dayjs().format('D/MM YYYY, hh:mm')}
          </td>
          <td>
            <NavLink to={`order/${data._id}`} className="detail-btn">
              <i className="fa fa-eye "></i>
              Xem
            </NavLink>
          </td>
        </tr>
      )}
    </>

  )
}
