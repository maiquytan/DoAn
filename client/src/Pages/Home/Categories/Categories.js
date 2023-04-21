import './categories.css'

import Category from '../../../Share/Components/Category'
import { NavLink } from 'react-router-dom'
import ProductListItem from '../../../Share/Components/ProductListItem/ProductListItem'

export default function Categories({ hot, newProduct }) {

  return (
    <div className='categories'>
      <div className='container'>
        <h2 className='category-title'>
          Hot nhất
        </h2>
        <div className='row product-lists'>
          {hot?.map((product,index) => (
          <ProductListItem
            data={product} key={index}
          />
          ))}
        </div>
        <NavLink to="/shop">
          <div className="btn-see-more">
            See more...
          </div>
        </NavLink>
      </div>
      <div className='container'>
        <h2 className='category-title'>
          Mới nhất
        </h2>
        <div className='row product-lists'>
        {newProduct?.map((product,index) => (
          <ProductListItem
            data={product} key={index}
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
