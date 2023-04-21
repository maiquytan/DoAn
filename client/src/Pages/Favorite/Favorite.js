import React from 'react'
import './Favorite.css'
import { useSelector } from 'react-redux';
import ProductListItem from '../../Share/Components/ProductListItem/ProductListItem';

export const Favorite = () => {
  const favorites = useSelector((state) => state.app.favorite)
  console.log(favorites);
  return (
    <div className="favorite products container">
      <div className="row product-lists">
      {favorites?.map((product, index) => (
        <ProductListItem data={product} key={index}  />
      ))}
    </div>
    </div>
  )
}
export default Favorite;

