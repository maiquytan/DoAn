import './register.css'
import { useState } from 'react'

import { register } from '../../lib'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [username, setUsername] = useState()
  const [phone, setPhone] = useState()
  const [firstName, setFirstName] = useState()
  const [address1, setAddress1] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [isSuccess, setIsSuccess] = useState()

  const handleRegiter = (e) => {
    e.preventDefault()
    const isPasswordMatch = password === confirmPassword
    const newUser = {
      username: username,
      password: password,
      firstName: firstName,
    };
    register(newUser,dispatch,history);
    if(isPasswordMatch && register.username !== username) {
      setIsSuccess(true);
      history.push("/login");
    }else {
      setIsSuccess(false)
    }
  }

  return (

    <div className="register" style={{ background: `${"url("}  ${"/assets/images/login-background.webp"}  ${")"}` }}>
      <div className="register-wrap center-box">
        <form className="register-form" onSubmit={handleRegiter}>
          <h3 className="register-title">
            Đăng ký
          </h3>
          {isSuccess===false && <p style={{ color: 'brown' }}>Mật khẩu không khớp </p>}
          {isSuccess===true && <p style={{ color: 'green' }}>Bạn đã đăng ký thành công!</p>}
          <div className="register-form-group">
            <input
              type="text"
              className="register-input"
              id="register-input"
              placeholder="Tài khoản"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-1"
              placeholder="Tên"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-4"
              placeholder="Điện thoại"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-6"
              placeholder="Địa chỉ"
              value={address1}
              onChange={e => setAddress1(e.target.value)}
              required
            />
            <input
              type="password"
              className="register-input"
              id="register-input-7"
              placeholder="Mật khẩu"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="register-input"
              id="register-input-8"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="register-btn"
          >
            Đăng ký
          </button>
          <a href="/login" className="link-to text-center"> Đăng nhập </a>
        </form>
      </div>
    </div>
  )
}
