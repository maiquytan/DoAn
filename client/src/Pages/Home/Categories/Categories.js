import './categories.css'

import Category from '../../../Share/Components/Category'

export default function Categories({ categories }) {

  return (
    <div className='categories'>
      {categories.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          dataList={category.list}
        />
      ))}
    </div>
  )
}
