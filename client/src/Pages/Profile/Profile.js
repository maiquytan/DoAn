import './profile.css'
import { useEffect, useState } from 'react'

import PurchaseOrder from './PurchaseOrder/PurchaseOrder'
import { getOrdersUser, getUserInfor } from '../../lib'

const fakeProfileData = {
  id: 1,
  fullname: 'Pham My Linh',
  image: '',
  gender: 0,
  birth_year: 1998,
  phone: '0327123388',
  email: 'linhmypham98@gmail.com',
  address: 'số 34, ngõ 3, xóm Đông, Cổ Dương, Tiên Dương, Hà Nội'
}

const fakeOrdersData = {
  list: [
    {
      id: 1,
      uuid: '182631273',
      status: 0,
      total_price: 120000,
      created_at: '11/12/2021',
      updated_at: '11/12/2021'
    },
    {
      id: 1,
      uuid: '182631273',
      status: 1,
      total_price: 200000,
      created_at: '11/12/2021',
      updated_at: '11/12/2021'
    },
    {
      id: 1,
      uuid: '182631273',
      status: 2,
      total_price: 120000,
      created_at: '11/12/2021',
      updated_at: '11/12/2021'
    },
    {
      id: 1,
      uuid: '182631273',
      status: 3,
      total_price: 120000,
      created_at: '11/12/2021',
      updated_at: '11/12/2021'
    },
    {
      id: 1,
      uuid: '182631273',
      status: 2,
      total_price: 120000,
      created_at: '11/12/2021',
      updated_at: '11/12/2021'
    },
  ]
}



export default function Profile() {

  const [orders, setOrders] = useState()
  const [user, setUser] = useState()

  const sendRequest = async () => {
    const response = await getOrdersUser()
    const userResponse = await getUserInfor()
    if (response?.code) {
      return response
    }
    if (userResponse?.code) {
      // return response
    }
    setUser(userResponse)
    setOrders(response)
    return response
  }

  useEffect(() => {
    sendRequest()
  }, [])

  console.log(user)

  return (
    <div className="profile">
      <div className=" container">
        <div className="wrap top-page">
          Trang cá nhân
        </div>
      </div>
      <div className="container">
        <div className="profile-wrap">
          <div className="profile-detail">
            <div className="row">
              <div className="col-3">
                <div className="profile-image-frame">
                  <img className="profile-image" src={user?.avatar || '/images/common/default_profile.jpg'} />
                </div>
              </div>
              <div className="col-9">
                <div className="profile-detail-content">
                  <div className="profile-detail-title">
                    Thông tin cá nhân:
                  </div>
                  <div className="profile-row">
                    <span>Họ tên: </span>
                    <>
                      {`${user?.first_name || ''}  ${user?.last_name || ''}`}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Giới tính: </span>
                    <>
                      {Number(user?.gender) === 0 ? 'Nam' : 'Nữ'}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Năm sinh: </span>
                    <>
                      {user?.birth_year || '01-08-1998'}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Điện thoại: </span>
                    <>
                      {user?.phone || '0327123388'}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Email: </span>
                    <>
                      {user?.email}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Địa chỉ: </span>
                    <>
                      {user?.address1 || 'Cổ Dương, Tiên Dương, Đông Anh, Hà Nội'}
                    </>
                  </div>
                  {/* <div className="profile-actions">
                    <button className="profile-action btn-edit-profile">
                      Chỉnh sửa thông tin cá nhân
                    </button>
                    <button className="profile-action btn-change-password">
                      Đổi mật khẩu
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container purchase-history">
        <div className="purchase-history-title">
          Lịch sử mua sắm:
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead className="thead-primary">
              <tr>
                <th>&nbsp;</th>
                <th>Đơn của bạn</th>
                <th>Trạng thái</th>
                <th>Giá trị (vnd)</th>
                <th>Ngày ghi nhận</th>
                <th>Cập nhật cuối</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((item, index) => (
                <PurchaseOrder key={index} data={item} index={orders.length - index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
