import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../reducers/app'

import CartItem from '../CartItem/CartItem'
import './cart.css'

export default function Cart() {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.app.cart)
  const tempTotalPrice = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
    0
  );

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <label className="cart-frame">
      <label className="overlay" htmlFor="cart-check"></label>
      <div className="cart">
        <div className="cart-wrap">
          <div className="cart-top space-between">
            <div className="cart-title">
              Giỏ hàng:
            </div>
            <input type="checkbox" className="cart-check hidden-check" name="cart-checkbox" id="cart-check-close" autoComplete="off" defaultChecked />
            <label className="cart-close" htmlFor="cart-check" >
              <i className="fa fa-close"></i>
            </label>
          </div>
          <div className="cart-items">
            {cart?.map((item, index) => (
              <CartItem key={index} data={item} />
            ))}
          </div>
          <div className="cart-bottom bottom">
            <div className="cart-total-price">
              Tổng tính:
              <span> {tempTotalPrice} đ</span>
            </div>
            {cart?.length > 0 ? (
              <a href="./purchase" >
                <div className="btn-cart">
                  Thanh toán
                </div>
              </a>
            ) : (
              <div >
                <div className="btn-cart disable">
                  Thanh toán
                </div>
              </div>
            )}
          </div>
        </div>
      </div >
    </label >
  )
}
