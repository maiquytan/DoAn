import './profile.css'
import { useEffect, useState } from 'react'

import PurchaseOrder from './PurchaseOrder/PurchaseOrder'
import { getOrdersUser } from '../../lib'
import { useSelector } from 'react-redux'

const fakeProfileData = {
  id: 1,
  fullname: 'Mai Quy Tan',
  image: '',
  gender: 0,
  birth_year: 1998,
  phone: '0327123388',
  email: 'maiquytan123@gmail.com',
  address: 'Bảo Châu, Đông La, Đông Hưng, Thái Bình'
}

export default function Profile() {
  const [orders, setOrders] = useState()
  const [user, setUser] = useState({})
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const accessToken = localStorage.getItem('access_token');
  console.log(storedUser,"xxxxxxxxxxxxxxxx")
  const sendRequest = async () => {
    const response = await getOrdersUser(accessToken)
    const order = response.filter( x => x.user === storedUser._id )
    setOrders(order)
    console.log(order,"55555555555555555")
    // return response
  }

  useEffect(() => {
    setUser(storedUser)
    sendRequest()
  }, [])

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
                  <img className="profile-image" src={user?.image || '/images/common/default_profile.jpg'} />
                </div>
              </div>
              <div className="col-9">
                <div className="profile-detail-content">
                  <div className="profile-detail-title">
                    Thông tin cá nhân:
                  </div>
                  <div className="profile-row">
                    <span>Tên: </span>
                    <>
                      {`${user?.lastName || 'Mai'}  ${user?.firstName || 'Tân'}`}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Giới tính: </span>
                    <>
                      {Number(user?.gender) === 1 ? 'Nam' : 'Nữ'}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Năm sinh: </span>
                    <>
                      {user?.birth_year || '21-05-2001'}
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
                      {user?.email || 'maiquytan123@gmail.com'}
                    </>
                  </div>
                  <div className="profile-row">
                    <span>Địa chỉ: </span>
                    <>
                      {user?.address || 'Dong La, Dong Hung, Thai Binh'}
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
                <PurchaseOrder key={index} data={item}  />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
