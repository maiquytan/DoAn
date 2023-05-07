import './sideBar.css'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='logo'>
          < img src='./assets/images/bigby-logo.png' alt=''/>
        </div>
      </div>
      <div className='sidebar-wrap'>
        <div className='sidebar-categorys'>
          Tổng quát
        </div>
        <ul className='sidebar-items'>
          <NavLink to='/'>
          <li className='sidebar-item'>
             <i className='fa fa-home'></i> Home
          </li>
          </NavLink>
          <NavLink to='/users'>
            <li className='sidebar-item'>
            <i className='fa fa-address-book'></i> Quản lý tài khoản
            </li>
          </NavLink>
        </ul>
        <hr/>
        <div className='sidebar-categorys'>
          Bán hàng
        </div>
        <ul className='sidebar-items'>
          {/* <li className='sidebar-item'>
             <i className='fa fa-shopping-bag'></i> Tạo hóa đơn thanh toán
          </li> */}
          <NavLink to='/products'>
            <li className='sidebar-item'>
            <i className='fa fa-suitcase'></i> Quản lý sản phẩm
            </li>
          </NavLink>
          <NavLink to='/orders'>
            <li className='sidebar-item'>
            <i className='fa fa-cubes'></i> Quản lý đơn hàng
            </li>
          </NavLink>
          {/* <li className='sidebar-item'>
          <i className='fa fa-list-ul'></i> Quản lý danh mục
          </li> */}
        </ul>
        <hr/>

        <div className='sidebar-categorys'>
          Nhập hàng
        </div>
        <ul className='sidebar-items'>
          <NavLink to='/inputs'>
            <li className='sidebar-item'>
              <i className='fa fa-linode'></i> Quản lý nhập hàng
            </li>
          </NavLink>
        </ul>
        <hr/>
        {/* <div className='sidebar-categorys'>
          Bài viết
        </div> */}
        <ul className='sidebar-items'>
          {/* <li className='sidebar-item'>
             <i className='fa fa-newspaper-o'></i> Thêm bài viết
          </li>
          <li className='sidebar-item'>
          <i className='fa fa-object-group'></i> Quản lý bài viết
          </li> */}
        </ul>
        {/* <hr/> */}
        <div className='sidebar-categorys'>
          Khác
        </div>
        <ul className='sidebar-items'>
          {/* <li className='sidebar-item'>
             <i className='fa fa-group'></i> Nhân viên
          </li>
          <li className='sidebar-item'>
          <i className='fa fa-bar-chart'></i> Thống kê
          </li>
          <li className='sidebar-item'>
          <i className='fa fa-toggle-right'></i> Slides
          </li> */}
        </ul>
      </div>
    </div>
  )
}
