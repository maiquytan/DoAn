import './topBar.css'

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbar-wrap space-between'>
          <div className='topbar-search center-box'>
            {/* <form className="form-inline">
              <div className="products-search-form">
                  <input type="text" className="products-search-input" id="inputProductsSearch" placeholder="Tìm kiếm sản phẩm" />
              </div>
              <button type="submit" className="btn-products-search">
                  <i className='fa fa-search'>
                  </i>
              </button>
            </form> */}
            <div className='products-search'>
              <form className="form-inline">
                  <div className="products-search-form">
                      <input type="text" className="products-search-input" id="inputProductsSearch" placeholder="Tìm kiếm sản phẩm" />
                  </div>
                  <button type="submit" className="btn-products-search">
                      <i className='fa fa-search'>
                      </i>
                  </button>
              </form>
            </div>
          </div>

          <div className='admin-settings center-box'>
            <div className='row'>

              <div style={{borderLeft: 'solid 1px gray', margin: '0 12px'}}></div>
              <div className='admin-avatar center-box'>
                Mai Tan <img src='/images/common/default_profile.jpg' alt=''/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
