import './index.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import ProductListItem from '../ProductListItem/ProductListItem'
import { getBaseProduct } from '../../../lib'

export default function Category({ backgroundColor, title, dataList }) {

  const [baseProducts, setBaseProduct] = useState({})

  const sendRegisterInfor = async () => {
    const response = await getBaseProduct();
    if (response?.code) {
      return response.detail
    }
    setBaseProduct(response)
    return response
  }

  useEffect(() => {
    sendRegisterInfor()
  }, [])


  return (
    <div className='part category' style={{ background: backgroundColor ? 'linear-gradient(0deg, #F4F1E9, #F4F1E9), #FFFFFF' : 'transparent' }}>
      <div className='container'>
        <h2 className='category-title'>
          {title || 'Danh muc'}
        </h2>
        <div className='row product-lists'>
          {baseProducts?.results?.map((product, index) => (
            <ProductListItem
              key={index}
              data={product}
            />
          ))}
        </div>
        <NavLink to="/shop">
          <div className="btn-see-more">
            See more...
          </div>
        </NavLink>
      </div>
    </div>
  )
}

