import './login.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { login } from '../../lib'
import { actions } from '../../reducers/app'

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const handleLogin = (e) => {
    const sendRequest = async () => {
      const response = await login(username,password)
      if (response.error) {
        setErrors(response.error)
        return
      }
      dispatch(actions.login(response))
      setErrors({})
      e.preventDefault()
      setIsSuccess(true)
    }
    if (username?.length > 0 && password?.length > 0) {
      e.preventDefault()
      sendRequest()
    }
  }

  useEffect(() => {
    setIsSuccess(false)
    setErrors({})
  }, [])

  useEffect(() => {
    if (isSuccess) {
      console.log('Ok')
      const t = setTimeout(() => {
        history.push('/')
      }, 1000)
      return () => clearTimeout(t)
    }
  }, [isSuccess,history])

  return (
    <div className="login" style={{ background: `${"url("}  ${"/assets/images/login-background.webp"}  ${")"}` }}>
      <div className="login-wrap center-box">
        <form className="login-form" onSubmit={handleLogin}>
          <h3 className="login-title">
            Đăng nhập
          </h3>
          {(Object.keys(errors).length > 0) && <p style={{ color: 'brown' }}>Tên tài khoản hoặc mật khẩu không đúng </p>}
          {isSuccess && <p style={{ color: 'green' }}>Đăng nhập thành công!</p>}
          <div className="login-form-group">
            <input
              type="text"
              className="login-input"
              id="login-input"
              placeholder="Tài khoản"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="login-input"
              id="login-password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
          <a href="/register" className="link-to text-center"
            style={{ marginTop: "60px", color: "#b10606" }}
          > Bạn chưa có tài khoản? </a>
          <p> Hoặc đăng nhập với</p>
          <div className="login-ways row">
            <div className="login-way facebook-way col-4">
              <i className="fa fa-facebook login-way-icon" style={{ background: "blue" }}>
              </i>
            </div>
            <div className="login-way twiter-way col-4">
              <i className="fa fa-twitter login-way-icon" style={{ background: "#18baf9" }}>
              </i>
            </div>
            <div className="login-way google-way col-4">
              <i className="fa fa-google login-way-icon" style={{ background: "#aa1919" }}>
              </i>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
