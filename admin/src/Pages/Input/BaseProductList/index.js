import ClickOutSide from "../../../hooks/ClickOutSide"


export default function BaseProductList({ baseProductList, handleSetBaseProductProp, turnOffDropDown }) {

  const handleSetBaseProduct = (baseProduct) => {
    // console.log(baseProduct)
    if (baseProduct) {
      handleSetBaseProductProp(baseProduct)
      turnOffDropDown()
    }
  }

  return (
    <>
      <ClickOutSide onClickOutSide={turnOffDropDown}>
        <div className="base-product-list">
          <div className="wrap">
            {baseProductList?.map((item, index) => (
              <div className="base-product" key={index} onClick={() => handleSetBaseProduct(item)}>
                <div className="wrap">
                  <img src={item.image} alt={item.name} />
                  <span>
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ClickOutSide>
      <style jsx>
        {`
          .base-product-list {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            overflow-y: scroll;
            max-height: 524px;
            min-width: 225px;
            max-width: 400px;
          }

          .base-product {
            border-bottom: solid 1px #eee;
            padding: 6px 12px;
            cursor: pointer;
          }

          .base-product:hover {
            background: #eee;
          }

          .base-product .wrap {
            display: flex;
            align-items: center;
          }
          .base-product .wrap span {
            margin: 0 12px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        `}
      </style>
    </>
  )
}
