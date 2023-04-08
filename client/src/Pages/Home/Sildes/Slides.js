import './slides.css'

const fakeSlidesData = [
  {
    id: 1,
    title: 'thời trang mùa đông',
    image: 'assets/images/slide-image-1.png',
    description: 'Ăn mặc theo phong cách, được giảm đến 20% mùa hè này!',
    button: 'Shop Now',
    button_color: '#7f1313',
    background_color: '#d5b8b8',
    url: '/shop'
  }
]

export default function Slides() {
  return (
    <div className="slides row">
      {fakeSlidesData.map((item, index) => (
        <div
          key={index}
          className="slide h-100"
          style={{ backgroundColor: item.background_color }}
        >
          <div className="slide-polygon">
            <img src="assets/images/Polygon 1.png" alt="BigbyShop" />
            <img src="assets/images/Polygon 2.png" alt="BigbyShop" />
            <img id="polygon3" src="assets/images/Polygon 3.png" alt="BigbyShop" />
          </div>
          <div className="slide-content center-box h-100">
            <div className="container row h-100">
              <div className="left-slide row h-100" style={{ background: `url('${item.image}')` }}>
              </div>
              <div className="right-slide center-box">
                <div className="slide-info">
                  <h2 className="slide-title">
                    {item.title}
                  </h2>
                  <p className="slide-description">
                    {item.description}
                  </p>
                  <div className="slide-btn-frame">
                    <a href={item.url} className="slide-btn" style={{ backgroundColor: item.button_color }}>
                      {item.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
