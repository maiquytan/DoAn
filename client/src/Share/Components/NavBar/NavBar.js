import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Cart from '../Cart/Cart'
import { LINK } from '../../../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { getCookie } from '../../../helper'
import { useState } from 'react'
import { actions } from '../../../reducers/app'

export default function NavBar() {
  const dispatch = useDispatch()
  const pathname = (window.location.pathname)
  const history = useHistory()

  const cart = useSelector(state => state.app.cart) || []
  const isLogedIn = useSelector(state => state.app.isLogedIn)

  const [isDropdown, setIsDropdown] = useState(false)

  const cartCount = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  // console.log(isLogedIn)
  // console.log(getCookie('access_token'))

  const handleLogout = () => {
    dispatch(actions.logout())
    setIsDropdown(false)
    history.push(`/login`)
  }


  return (
    <div className="navbar center-box">
      <div className="container">
        <div className="d-flex" >
          <div className="left-navbar">
            <NavLink to="/">
              <div className="logo">

              </div>
            </NavLink>
          </div>
          <div className="right-navbar">
            <ul className="nav-items">
              {LINK.nav.main.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${pathname === item.url ? 'active' : ''}`}
                >
                  <a href={item.url}>
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="nav-item" style={{ width: "2px", background: "black", margin: "0px 15px" }} />
              <li
                className={`nav-item ${'/favourite' === pathname ? 'active' : ''}`}
              >
                <a href="/favourite">
                  <i className="fa fa-heart" />
                </a>
              </li>
              <li className="nav-item">
                <label className="cart-open" htmlFor="cart-check" style={{ fontSize: "24px", cursor: "pointer", marginBottom: "3px", marginLeft: "6px", marginRight: "6px" }}>
                  <i className="fa fa-shopping-cart" />
                  {((Number(cartCount) > 0)) && (
                    <div className="cart-count">
                      <span>{cartCount}</span>
                    </div>
                  )}
                </label>
                <input type="checkbox" className="cart-check hidden-check" name="cart-checkbox" id="cart-check" autoComplete="off" />
                <Cart />
              </li>
              {isLogedIn ? (
                <li
                  className={`nav-item ${'/profile' === pathname ? 'active' : ''}`}
                  style={{ position: 'relative', minHeight: 35, minWidth: 35, display: 'flex', justifyContent: 'center' }}
                  onClick={() => setIsDropdown(!isDropdown)}
                >
                  {/* <a href="/profile"> */}
                  <i className="fa fa-user-circle" />
                  {/* </a> */}
                  <div className={`dropdown-login ${isDropdown ? 'dropdown' : ''}`}>
                    <ul style={{ padding: 0 }}>
                      <li>
                        <a href="/profile">
                          Thông tin và lịch sử
                        </a>
                      </li>
                      <li className="logout-btn" onClick={handleLogout}>
                        Đăng xuất
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                < div className="nav-login-btn">
                  <a href="/login">
                    Đăng nhập
                  </a>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div >
    </div >
  )
}
