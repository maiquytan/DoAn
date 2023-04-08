const PaginateSearch = ({ totalPage, currentPage, handleSetPage }) => {
  const range = ({ from = 0, to, step = 1, length = Math.ceil((to - from) / step) }) =>
    Array.from({ length }, (_, i) => from + i * step)

  let pageArrayShow
  if (currentPage < 4) pageArrayShow = range({ from: 1, to: (totalPage < 5) ? (totalPage + 1) : 6, step: 1 })
  else if (currentPage > (totalPage - 3)) pageArrayShow = range({ from: totalPage > 4 ? totalPage - 4 : 1, to: (totalPage + 1), step: 1 })
  else pageArrayShow = range({ from: currentPage - 2, to: currentPage + 3, step: 1 })
  return (
    pageArrayShow.map((pageNumber, index) => (
      <button
        className={`pagination-num ${pageNumber === currentPage ? 'active' : ''}`} key={index}
        onClick={() => handleSetPage(pageNumber)}
      >
        <span>
          {pageNumber}
        </span>
        <style jsx>
          {`
          .pagination-num span {
            color: #393333;
          }
          .pagination-num {
            min-height: 40px;
            font-weight: 300;
            font-size: 15px;
            cursor: pointer;
            min-width: 32px;
            padding: 0 8px;
            border: none;
            outline: none;
            background: transparent;
          }
          .pagination-num.active{
            background: #ff597e;
          }
          .pagination-num.active span{
            color: white;
          }
          @media screen and (max-width: 599px) {
            .pagination-num {
              padding: 0 4px;
            }
          }
        `}
        </style>
      </button>
    ))
  )
}

export default PaginateSearch;
