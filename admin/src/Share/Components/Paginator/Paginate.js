import React from "react"
import './Paginate.css'

const PaginateSearch = ({ totalPage, currentPage, handleSetPage, setCurrentPage }) => {
  const range = ({ from = 0, to, step = 1, length = Math.ceil((to - from) / step) }) =>
    Array.from({ length }, (_, i) => from + i * step)

  let pageArrayShow
  if (currentPage < 4) pageArrayShow = range({ from: 1, to: (totalPage < 5) ? (totalPage + 1) : 6, step: 1 })
  else if (currentPage > (totalPage - 3)) pageArrayShow = range({ from: totalPage > 4 ? totalPage - 4 : 1, to: (totalPage + 1), step: 1 })
  else pageArrayShow = range({ from: currentPage - 2, to: currentPage + 3, step: 1 })
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      {pageArrayShow.map((pageNumber, index) => (
        <button
          className={`pagination-num ${pageNumber === currentPage ? 'active' : ''}`} key={index}
          onClick={() => handleSetPage(pageNumber)}
        >
          <span>
            {pageNumber}
          </span>
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </button>

    </div>
  )
}

export default PaginateSearch;
