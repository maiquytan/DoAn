import './index.css'
import ProductListItem from '../ProductListItem/ProductListItem'
import { getBaseProduct } from '../../../lib'

export default function Category({ hot }) {
  console.log(hot)

  return (
    <div className='part category' >
      <div className='container'>

        {/* <div className='row product-lists'>
            <ProductListItem
              data={newProduct}
            />
        </div> */}
      </div>
    </div>
  )
}

