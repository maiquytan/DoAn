import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteProduct, setPreviewProduct } from '../../../reducers/app'
import './productListItem.css'
import { useEffect, useState } from 'react'

export default function ProductListItem({ data, products }) {
  const [items, setItems] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  console.log(data, "lll");
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    if (data) {
      dispatch(setPreviewProduct(data))
    }
  }

  useEffect(() => {
    setItems(products);
  }, [products]);

  const handleFavoriteToggle = (_id) => {
    const itemIndex = items.findIndex(item => item._id === _id);
    console.log(itemIndex);
    if (itemIndex >= 0) {
      const newItems = [...items];
      const existingLikeIndex = likedProducts.findIndex(like => like._id === _id);
      if (existingLikeIndex >= 0) {
        newItems[itemIndex] = { ...newItems[itemIndex], favorite: newItems[itemIndex].favorite - 1 };
        setLikedProducts(likedProducts.filter(like => like._id !== _id));
      } else {
        newItems[itemIndex] = { ...newItems[itemIndex], favorite: newItems[itemIndex].favorite + 1 };
        setLikedProducts([...likedProducts, newItems[itemIndex]]);
      }
      setItems(newItems);

    }
  }

  useEffect(() => {
    if (likedProducts.length > 0)
      dispatch(setFavoriteProduct(likedProducts[0]))
  }, [likedProducts])

  return (
    <>
      <div className="col-2-4 product-lists-item" >
        <div className="thumb-item"
          style={{ background: 'url(' + data.image + ')' }}
        >
          <div className="thumb-item-mask center-box">
            <div className="thumb-item-actions">
              <div className="thumb-item-action" onClick={() => handleFavoriteToggle(data._id)}>
                {likedProducts.find(like => like._id === data._id) ? "❤️" : "🖤"}
              </div>
              <div className="thumb-item-action">
                <i className="fa fa-cart-plus center-box"></i>
              </div>
              <label className="thumb-item-action" htmlFor="product-detail-check" onClick={handleOpenModal}>
                <i className="fa fa-search center-box"></i>
              </label>
              <input type="checkbox" className="product-detail-check hidden-check" name="product-detail-checkbox" id="product-detail-check" autoComplete="off" />
              {/* <ProductDetail data={data} /> */}
            </div>
          </div>
          <div className="sale-tag">
            {data.discount > 0 && (
              <>
                <div className="sale-tag-square">
                  <span> Sale </span>
                  <span>
                    {`${data.discount * 100}%`} </span>
                </div>
                <div className="sale-tag-polygon">
                </div>
              </>
            )}
          </div>
        </div>
        <div className="thumb-item-name">
          {data.name}
        </div>
        <div className="thumb-item-price-like row">
          <div className="price">
            <span>
              {data.discount > 0 && (
                <div className="thumb-item-price">
                  {`${(100 - data.discount * 100) / 100 * data.price} đ`}
                </div>
              )}
            </span>
            <span className={data.discount > 0 ? "thumb-item-origin-price" : "thumb-item-price"}>
              {`${data.price} đ`}
            </span>
          </div>
          <span className="thumb-item-like">
            <p>{data.favorite} </p>
            <i className="fa fa-heart center-box"></i>
          </span>
        </div>
      </div>
    </>
  )
}
