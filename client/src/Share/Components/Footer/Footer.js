import './footer.css'
import ChatWidget from './ChatWidget.js'
import { Helmet } from 'react-helmet';


export default function Footer() {

  return (
    <>
      <div className='footer'>
      <ChatWidget/>
        <div className="footer-wrap">
          <div className="top-footer container row">
            <div className='footer-intro'>
              <div className='footer-title'>
                BichThuanShop
              </div>
              <div className='footer-des'>
                Shop Thời Trang Online Love Tree với phương châm "Đồng hành cùng phong cách thời trang của bạn" sẽ là nơi mua sắm an toàn và uy tín, bởi chúng tôi luôn đề cao tiêu chí mang đến cho quý khách những sản phẩm chất lượng nhất với giá cả luôn phải chăng.
              </div>
            </div>
            <div className="about-us-footer">
              <h3>Liên hệ</h3>
              <ul className="contact-footer-menu">
                <li>
                  <i className="fa fa-volume-control-phone" /> Hotline: (+84) 988176899
                </li>
                <li>
                  <i className="fa fa-address-book" /> Zalo/Viber: (+84) 988176899
                </li>
                <li>
                  <i className="fa fa-telegram" /> Telegram/Twiiter: 091 786 868
                </li>
                <li>
                  <i className="fa fa-phone" /> Tel: (+84) 02436436899
                </li>
                <li>
                  <i className="fa fa-envelope" /> Email: maiquytan123@gmail.com
                </li>
              </ul>
            </div>
            <div className="service-footer">
              <h3>Địa chỉ bản đồ</h3>
              <div className="map-footer-wrap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.3353414384683!2d-122.81580028431839!3d49.06126007930781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0c621cc5a6b31e6!2zNDnCsDAzJzQzLjEiTiAxMjLCsDQ5JzAwLjYiVw!5e0!3m2!1sen!2s!4v1650359626332!5m2!1sen!2s" title="BigbyShop" aria-label="BigbyShop" />
              </div>
            </div>

          </div>
        </div>
        <hr className="footer-bar" />
        <p className="text-center" style={{ padding: 5, color: 'gray' }}>Copyright © 2023 TanMaiQuy. All rights reserved </p>
      </div>
    </>
  )
}
