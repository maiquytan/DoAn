import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import Cart from '../Cart/Cart'
import { LINK } from '../../../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { actions } from '../../../reducers/app'

export default function NavBar() {
  const dispatch = useDispatch()
  const pathname = (window.location.pathname)
  console.log(pathname, "22222222222222222")
  const history = useHistory()
  const cart = useSelector(state => state.app.cart) || []
  const [isDropdown, setIsDropdown] = useState(false)
  const [user, setUser] = useState(localStorage.getItem('user') || '')

  const cartCount = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  const accessToken = localStorage.getItem('access_token');
  const expireTime = localStorage.getItem('expireTime');
  const storedUser = JSON.parse(localStorage.getItem('user'));
  console.log(storedUser);

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
    }
    if(!storedUser) {
      setUser('');
    }
  }, []);

  const handleLogout = () => {
    dispatch(actions.logout())
    localStorage.removeItem('access_token');
    localStorage.removeItem('expireTime');
    localStorage.removeItem('user');
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
                  <NavLink to={item.url}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item" style={{ width: "2px", background: "black", margin: "0px 15px" }} />
              <li className={`nav-item ${'/favorite' === pathname ? 'active' : ''}`}>
                <NavLink to="/favorite">
                  <i className="fa fa-heart" />
                </NavLink>
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
              {accessToken&& user ? (
                <li
                  className={`nav-item ${'/profile' === pathname ? 'active' : ''}`}
                  style={{ position: 'relative', minHeight: 35, minWidth: 35, display: 'flex', justifyContent: 'center' }}
                  onClick={() => setIsDropdown(!isDropdown)}
                >
                  <p className="username">{user.firstName}</p>
                  <i className="fa fa-user-circle" />
                  <div className={`dropdown-login ${isDropdown ? 'dropdown' : ''}`}>
                    <ul style={{ padding: 0 }}>
                      <li>
                        <NavLink to="/profile">
                          Thông tin và lịch sử
                        </NavLink>
                      </li>
                      <li className="logout-btn" onClick={handleLogout}>
                        Đăng xuất
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                < div className="nav-login-btn">
                  <NavLink to="/login">
                    Đăng nhập
                  </NavLink>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div >
    </div >
  )
}
