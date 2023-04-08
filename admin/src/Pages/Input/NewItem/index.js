export default function NewItem({ data, productColor, baseProduct, size, quantity, price, changeQuantity,  }) {

  const handleSetQuantity = (value) => {
    const newQuantity = {
      product_color: productColor?.id,
      size: size?.id,
      quantity: value
    }
    // console.log(newQuantity, productColor, size)
  }

  const handleDeleteItem = (value) => {

  }

  return (
    <tr className="admin-td">
      <td>
        <div className="admin-cell-td row product-img">
          <img src={productColor?.image?.replace('http://127.0.0.1:8000/products/', 'http://127.0.0.1:8000/static/products/') || '/images/common/default-thumbnail.jpg'} alt="" />
          <input
            value={baseProduct?.name}
            disabled
            readOnly
          />
        </div>
      </td>
      <td>
        <div className="admin-cell-td color-td row">
          <div
            className="admin-color-td"
            style={{ background: productColor?.color.color_code || "#eee" }}
          />
          <input
            list="admin-color1"
            value={productColor?.color.name}
            disabled
            readOnly
          />

        </div>
      </td>
      <td>
        <div className="admin-cell-td size-td row">
          <input
            list="admin-size"
            value={size?.name}
            disabled
            readOnly
          />
        </div>
      </td>
      <td>
        <div className="admin-cell-td quantity-td row">
          <input
            type="number"
            id="quantity"
            name="quantity"
            min={1}
            onChange={e => handleSetQuantity(Number(e.target.value))}
            value={quantity}
            disabled
            // readOnly
          />
        </div>
      </td>
      <td>
        <div className="admin-cell-td money-td row">
          <input
            type="number"
            id="money"
            name="money"
            min={1}
            value={price}
            disabled
            readOnly
          />
        </div>
      </td>
      <td>
        <div className="table-actions btn-input-plus">
          <button
            title="Xóa"
          // onClick={handleAddToInput}
          >
            X
          </button>
        </div>
      </td>
    </tr>
  )
}
