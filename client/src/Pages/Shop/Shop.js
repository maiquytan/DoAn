import { useEffect, useState } from 'react'
import PaginateSearch from '../../Share/Components/Paginator/Paginate'
import { getBaseProduct, getBlogs } from '../../lib'
import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import ProductListItem from '../../Share/Components/ProductListItem/ProductListItem'
import './shop.css'
import { useDispatch } from 'react-redux'
import { getBlog, getProduct } from '../../reducers/app'

export default function Shop() {
	const [blogs, setBlogs] = useState([])
	const [baseProducts, setBaseProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPage, setTotalPage] = useState(1)
	const [searchText, setSearchText] = useState('')
	const dispatch = useDispatch();

	const sendRequest = async () => {
		const response = await getBaseProduct(currentPage, searchText)
		dispatch(getProduct(response.products))
		console.log("222", response);
		if (response) {
			setBaseProducts(response.products)
			setTotalPage(Math.ceil(response.totalProducts / 10))
		}
	}

	const sendRequestBlog = async () => {
		const res = await getBlogs();
		dispatch(getBlog(res))
		if (res) {
			setBlogs(res);
		}
	}

	useEffect(() => {
		sendRequest()
		sendRequestBlog()
	}, [currentPage])

	const handleSearch = (e) => {
		e.preventDefault()
		setCurrentPage(1)
		sendRequest(searchText, 1)
	}

	return (
		<div className="shop">
			<div className="products-bar container">
				<div className="products-top-bar row">
					<div className="col-4">
						<div className="products-search">
							<form className="form-inline" onSubmit={handleSearch}>
								<div className="products-search-form">
									<input
										type="text" className="products-search-input"
										id="inputProductsSearch"
										placeholder="Tìm kiếm sản phẩm"
										value={searchText}
										onChange={(e) => setSearchText(e.target.value)}
									/>
								</div>
								<button
									type="submit"
									className="btn-products-search"
								>
									<i className="fa fa-search">
									</i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="products container">
				<div className="row product-lists">
					{baseProducts?.length > 0 ?
						baseProducts.map((product, index) => (
							<ProductListItem data={product} key={index} products={baseProducts} />
						)) :
						<p>Không tìm thấy sản phẩm.</p>
					}
				</div>
				<div className="justify-center pagination-wrap">
					<PaginateSearch
						totalPage={totalPage}
						currentPage={currentPage}
						handleSetPage={(page) => { setCurrentPage(page) }}
					/>
				</div>
			</div>
			<BlogsAd blogs={blogs} />
			<NewsLetter />
		</div>
	)
}
