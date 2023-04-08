import './sideBar.css'

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
          <a href='/'>
          <li className='sidebar-item'>
             <i className='fa fa-home'></i> Home
          </li>
          </a>
        </ul>
        <hr/>
        <div className='sidebar-categorys'>
          Bán hàng
        </div>
        <ul className='sidebar-items'>
          {/* <li className='sidebar-item'>
             <i className='fa fa-shopping-bag'></i> Tạo hóa đơn thanh toán
          </li> */}
          <a href='/products'>
            <li className='sidebar-item'>
            <i className='fa fa-suitcase'></i> Quản lý sản phẩm
            </li>
          </a>
          <a href='/orders'>
            <li className='sidebar-item'>
            <i className='fa fa-cubes'></i> Quản lý đơn hàng
            </li>
          </a>
          {/* <li className='sidebar-item'>
          <i className='fa fa-list-ul'></i> Quản lý danh mục
          </li> */}
        </ul>
        <hr/>

        <div className='sidebar-categorys'>
          Nhập hàng
        </div>
        <ul className='sidebar-items'>
          <a href='/inputs'>
            <li className='sidebar-item'>
              <i className='fa fa-linode'></i> Quản lý nhập hàng
            </li>
          </a>
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
