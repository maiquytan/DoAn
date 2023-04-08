import './index.css'

export default function NotFound() {

  return (
    <>
      <div
        className="container center-box"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="wrap center-box" style={{ flexDirection: 'column' }}>
          <p className="not-found-title">
            404 Not Found
          </p>
          <a href="/" className="go-to-home">
            Go to HomePage
          </a>
        </div>
      </div>
    </>
  )
}
