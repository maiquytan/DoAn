import './purchaseProduct.css'

export default function PurchaseProduct({ data }) {
  // console.log(data)

  return (
    <tr className="alert" role="alert">
      <td>
        <div className="img" style={{ background: `url:('${data.product.product_color?.image.replace('http://127.0.0.1:8000/products/', 'http://127.0.0.1:8000/static/products/')}')` }} >
          <img width={'auto'} height={'100%'} src={data.product.product_color?.image.replace('http://127.0.0.1:8000/products/', 'http://127.0.0.1:8000/static/products/')} alt="" />
        </div>
      </td>
      <td>
        <div className="email">
          <span>Sneakers Shoes 2020 For Men </span>
          <div>Fugiat voluptates</div>
        </div>
      </td>
      <td>{data.product.price}</td>
      <td className="quantity">
        {/* <div className="input-group">
            <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} />
            </div> */}
        {data.quantity}
      </td>
      <td>
        {data.product.price * data.quantity}
      </td>
      <td>
        {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i className="fa fa-close" /></span>
            </button> */}
      </td>
    </tr>
  )
}
