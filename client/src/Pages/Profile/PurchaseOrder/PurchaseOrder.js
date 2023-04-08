import './purchaseOrder.css'
import dayjs from 'dayjs'

import { ORDER } from '../../../Constants'

export default function PurchaseOrder({ data, index }) {
  const {
    id,
    // uuid,
    // order,
    status,
    total_price,
    created_date,
    updated_date,
  } = data

  return (
    <>
      {data && (
        <tr className="alert" role="alert">
          <td>
            <></>
          </td>
          <td>
            <div className="email">
              <span>
                #{index}
              </span>
            </div>
          </td>
          <td>
            <div className={`order-status ${ORDER.status[status].style}`}>
              {ORDER.status[status].name}
            </div>
          </td>
          <td className="order-price">
            {total_price}
          </td>
          <td>
            {dayjs(created_date).format('D/MM YYYY, hh:mm')}
          </td>
          <td>
            {dayjs(updated_date).format('D/MM YYYY, hh:mm')}
          </td>
          <td>
            <a href={`order/${id}`} className="detail-btn">
              <i className="fa fa-eye "></i>
              Xem
            </a>
          </td>
        </tr>
      )}
    </>

  )
}
