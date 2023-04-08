import './input.css'
import dayjs from 'dayjs'

export default function Input({ data, count, index }) {
  return (
    <tr className='admin-td'>
      {/* <td>
        <div className='table-product-name'>
          <div className='row'>
            <img src='./assets/images/image-10.png' alt=''/>
            <span>Áo đẹp ơi là đẹp</span>
          </div>
        </div>
      </td> */}
      <td>#{count - index}</td>
      {/* <td>20</td> */}
      <td>
        {dayjs(new Date(data?.created_date)).format('D/MM YYYY, hh:mm')}
        {/* {(new Date(data?.created_date)).toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} */}
      </td>
      <td>
        <a href={`/input/${data.id}`} className='table-actions admin-input'>
          <button className='table-read' style={{ color: 'green' }}>
            <i className='fa fa-eye mr-6px'></i> Xem
          </button>
        </a>
      </td>
    </tr>
  )
}
