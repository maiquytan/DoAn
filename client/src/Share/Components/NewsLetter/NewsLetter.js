import './newsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter'>
      <div className='center-box'>
        <div className='news-letter-wrap'>
          <h2 className='letter-title'>
            Nhận tin mới
          </h2>
          <div className='letter-des'>
            Nhận thông báo mới nhất về các trang phục yêu thích của bạn.
          </div>
          <form className="form-inline" style={{margin: '15px 0'}}>
            <div className="form-letter">
              <input type="text" className="letter-form" id="inputLetter" placeholder="Email của bạn" />
            </div>
            <button type="submit" className="btn-letter">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  )
}
