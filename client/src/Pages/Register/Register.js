import './register.css'
import { useEffect, useState } from 'react'

import { register } from '../../lib'

export default function Register() {

  const [username, setUsername] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [birthYear, setBirthYear] = useState()
  const [gender, setGender] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [address1, setAddress1] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const handleRegiter = (e) => {
    const isPasswordMatch = password === confirmPassword
    const sendRequest = async () => {
      const params = {
        username,
        gender,
        phone,
        email,
        address1,
        password,
        first_name: firstName,
        last_name: lastName,
        birth_year: birthYear
      }
      const response = await register(params)
      if (response.error) {
        setErrors(response.error)
        return
      }
      e.preventDefault()
      setErrors({})
      setIsSuccess(true)
    }
    if (isPasswordMatch) {
      e.preventDefault()
      sendRequest()
    }
    else {
      e.preventDefault()
      setErrors({ ...errors, password: 'Mật khẩu không trùng khớp!' })
    }

  }

  useEffect(() => {
    console.log(isSuccess)
    setIsSuccess(false)
    setErrors({})
  }, [isSuccess])

  const showError = (errorsParam) => {
    const keys = Object.keys(errorsParam)
    const errorsMessage = keys.map((key) => {
      if (Array.isArray(errorsParam[key]))
        return errorsParam[key].join(', ')
      return errorsParam[key]
    })
    // if (errorsMessage?.contains('A user with that username already exists')) return 'Tài khoản này đã được đăng ký'
    return errorsMessage.toString()
  }

  // const showSuccess = () => {
  //   return <p style={{ color: 'green' }}>Bạn đã đăng ký thành công!</p>
  // }

  // console.log(errors)

  return (

    <div className="register" style={{ background: `${"url("}  ${"/assets/images/login-background.webp"}  ${")"}` }}>
      <div className="register-wrap center-box">
        <form className="register-form" onSubmit={handleRegiter}>
          <h3 className="register-title">
            Đăng ký
          </h3>
          {(Object.keys(errors).length > 0) && <p style={{ color: 'brown' }}>Đã có lỗi xảy ra! <br />{showError(errors)}</p>}
          {isSuccess && <p style={{ color: 'green' }}>Bạn đã đăng ký thành công!</p>}
          <div className="register-form-group">
            <input
              type="text"
              className="register-input"
              id="register-input"
              placeholder="Tài khoản"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-1"
              placeholder="Họ"
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-2"
              placeholder="Tên"
              onChange={e => setLastName(e.target.value)}
              required
            />
            <div className="register-form-inline">
            {/* <input type="datetime-local" id="birthdaytime" name="birthdaytime"> */}
              <input
                type="date"
                className="register-input col-6"
                id="register-input-3"
                placeholder="Năm sinh"
                onChange={e => setBirthYear(e.target.value)}
                required
              />
              <select name="cars" id="cars" form="carform" placeholder="Giới tính" className="register-input col-6" onChange={e => setGender(e.target.value)}>
                <option value="Giới tính" disabled>Giới tính</option>
                <option value={0}>Nam</option>
                <option value={1}>Nữ</option>
              </select>
              {/* <input type="text" className="register-input col-6" id="register-input" placeholder="Giới tính" /> */}
            </div>
            <input
              type="text"
              className="register-input"
              id="register-input-4"
              placeholder="Điện thoại"
              onChange={e => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-5"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              className="register-input"
              id="register-input-6"
              placeholder="Địa chỉ"
              onChange={e => setAddress1(e.target.value)}
              required
            />
            <input
              type="password"
              className="register-input"
              id="register-input-7"
              placeholder="Mật khẩu"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="register-input"
              id="register-input-8"
              placeholder="Nhập lại mật khẩu"
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="register-btn"
          // onClick={handleRegiter}
          >
            Đăng ký
          </button>
          <a href="/login" className="link-to text-center"> Đăng nhập </a>
        </form>
      </div>
    </div>
  )
}
