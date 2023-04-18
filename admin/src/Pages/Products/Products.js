import './products.css'
import { useEffect, useState } from 'react'

import Product from './../../Share/Components/Product/Product.js'
import { getBaseProduct } from '../../lib'
import PaginateSearch from '../../Share/Components/Paginator/Paginate'

export default function Products() {
  const [baseProducts, setBaseProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    const sendRequest = async () => {
      const response = await getBaseProduct(currentPage)
      console.log(response.products,"1111")
      if (response) {
        setBaseProducts(response.products)
        setTotalPage(Math.ceil(response.totalProducts / 10))
      }
    }
    sendRequest()
  }, [currentPage])

  console.log(baseProducts)
  console.log(totalPage)

  return (
    <div className='admin-page'>
      <div className='products'>
        <div className='container'>
          <div className='admin-page-title'>
            Sản phẩm
          </div>
          < div className='admin-page-content'>
            <table className='admin-table'>
              <thead>
                <tr className='admin-th'>
                  <th style={{ textAlign: 'center' }}>Tên sản phẩm</th>
                  <th>Mã sản phẩm</th>
                  {/* <th>Tồn kho</th> */}
                  <th>Giá</th>
                  <th className='th-actions'>Thao tác</th>
                </tr>
              </thead>
              <tbody>
              {baseProducts?.map((item, index) => (
                <Product data={item} key={index} />
              ))}
              </tbody>
            </table>
          </div>
          <div className="justify-center pagination-wrap">
            <PaginateSearch
              totalPage={totalPage}
              currentPage={currentPage}
              handleSetPage={(page) => { setCurrentPage(page) }}
              setCurrentPage = {setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
