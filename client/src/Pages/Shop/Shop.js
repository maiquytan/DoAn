import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PaginateSearch from '../../Share/Components/Paginator/Paginate'
import { getBaseProduct } from '../../lib'
import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import ProductListItem from '../../Share/Components/ProductListItem/ProductListItem'
import './shop.css'

const fakeHomeData = {
	categories: [
		{
			title: 'Mới nhất',
			list: [
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/batman-im-not-saying-funny-quote.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/black-lives-matter-say-their-names.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/boo-halloween.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/coffee-because-murder-is-wrong.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/costume-not-found-error-404-funny-halloween.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/costume-not-found-error-404-funny-halloween.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/fred-flintstone-tie.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/gaston-costume.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/globo-gym.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/harry-potter-harry-potter-i-solemnly-swear.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
			]
		},
		{
			title: 'Hot nhất',
			list: [
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/im-someones-boo-halloween.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/jimmy-neutron.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/looney-tunes-bugs-bunny.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/looney-tunes-marvin-the-martian.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/magical-adventure.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/pumpkin-halloween.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/raining-hearts.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/rocket-power-regina.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/staypuft-marshmallow-man-shirt.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
				{
					id: 1,
					slug: '1',
					thumbnail: '/assets/images/products/tammy-mahalo-shirt.webp',
					name: 'Áo phông xịn xò',
					sale: 0.2,
					listedPrice: 124000,
					likes: 143
				},
			]
		},
	],
	blogs: [
		{
			id: 1,
			slug: 'dauxanh',
			thumbnail: '/assets/images/image-4.png',
			title: 'Dau xanh rau ma',
			description: 'Dau xanh rau ma co the giup ban giam can mot cach dang ke, ngon hon khi uong lanh, no hon khi an 2 bat.',
			created_at: 'April 4, 12',
		},
		{
			id: 1,
			slug: 'dauxanh',
			thumbnail: '/assets/images/image-3.png',
			title: 'Thời trang mùa đông nên chọn màu gì để mặc?',
			description: 'Mùa đông lạnh bạn vẫn có thể diện những chiếc váy 2 dây, váy hoa điệu đà được mà không lo giá...',
			created_at: 'April 4, 12',
		},
		{
			id: 3,
			slug: 'dauxanh',
			thumbnail: '/assets/images/image-6.png',
			title: 'Dau xanh rau ma',
			description: 'Dau xanh rau ma co the giup ban giam can mot cach dang ke, ngon hon khi uong lanh, no hon khi an 2 bat.',
			created_at: 'April 4, 12',
		},
	]
}

export default function Shop() {
	const [baseProducts, setBaseProduct] = useState({})
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPage, setTotalPage] = useState(1)
	const [searchText, setSearchText] = useState('')

	const sendRequest = async (searchText = '', page = 1) => {
		const response = await getBaseProduct(searchText, page);
		if (response?.code) {
			return response.detail
		}
		setBaseProduct(response)
		setTotalPage(Math.ceil(Number(response.count) / 10))
		return response
	}

	useEffect(() => {
		sendRequest()
	}, [])

	useEffect(() => {
		sendRequest(searchText, currentPage)
	}, [currentPage])

	const handleSearch = (e) => {
		console.log(e)
		e.preventDefault()
		setCurrentPage(1)
		sendRequest(searchText, 1)
	}

	return (
		<div className="shop">
			<div className="products-bar container">
				<div className="products-top-bar row">
					<h1 className="hidden"></h1>
					<div className="products-by-gender col-4">
						{/* <input type="radio" className="gender-check hidden-check" name="options" id="option1" autoComplete="off" defaultChecked />
						<label className="gender-option" htmlFor="option1" >
							Tất cả sản phẩm
						</label>
						<input type="radio" className="gender-check hidden-check" name="options" id="option2" autoComplete="off" />
						<label className="gender-option" htmlFor="option2" >
							Nam
						</label>
						<input type="radio" className="gender-check hidden-check" name="options" id="option3" autoComplete="off" />
						<label className="gender-option" htmlFor="option3" >
							Nữ
						</label> */}
					</div>
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
					<div className="col-4 flex-right">
						{/* <label className="products-filter-btn" htmlFor="filter">
							Filter <i className="fa fa-sliders"></i>
						</label> */}
					</div>
				</div>
				<div className="products-filter">

					<input className="filter-check hidden-check" name="filter" id="filter"
						type="checkbox" autoComplete="off"
					/>
					<div className="products-filter-options-frame">
						<div className="products-filter-options">
							<div className="row">
								<div className="filter-polygon"></div>
								<div className="options-group col-3">
									<div className="options-group-title">
										Sắp xếp theo:
									</div>
									<input className="products-check hidden-check" name="standard" id="standard1"
										value={"hello"}
										type="radio" autoComplete="off" defaultChecked
									/>
									<label className="products-option" htmlFor="standard1" >Mới nhất</label>
									<input className="products-check hidden-check" name="standard" id="standard2"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="standard2" >Phổ biến</label>
									<input className="products-check hidden-check" name="standard" id="standard3"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="standard3" >Giá trung bình</label>
									<input className="products-check hidden-check" name="standard" id="standard4"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="standard4" >Giá: từ thấp đến cao</label>
									<input className="products-check hidden-check" name="standard" id="standard5"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="standard5" >Giá: từ cao đến thấp</label>
								</div>
								<div className="options-group col-3">
									<div className="options-group-title">
										Tầm giá:
									</div>

									<input className="products-check hidden-check" name="price" id="price1"
										value={"hello"}
										type="radio" autoComplete="off" defaultChecked
									/>
									<label className="products-option" htmlFor="price1" >Tất cả</label>

									<input className="products-check hidden-check" name="price" id="price2"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="price2" >0 - 100.000đ</label>

									<input className="products-check hidden-check" name="price" id="price3"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="price3" >100.000đ - 200.000đ</label>

									<input className="products-check hidden-check" name="price" id="price4"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="price4" >200.000đ - 300.000đ</label>

									<input className="products-check hidden-check" name="price" id="price5"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="price5" >300.000đ - 400.000đ</label>

									<input className="products-check hidden-check" name="price" id="price6"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="price6" >400.000đ - 500.000đ</label>
								</div>
								<div className="options-group col-3">
									<div className="options-group-title">
										Kiểu:
									</div>

									<input className="products-check hidden-check" name="type" id="type1"
										value={"hello"}
										type="radio" autoComplete="off" defaultChecked
									/>
									<label className="products-option" htmlFor="type1" >Tất cả</label>

									<input className="products-check hidden-check" name="type" id="type2"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="type2" >Áo</label>

									<input className="products-check hidden-check" name="type" id="type3"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="type3" >Quần</label>

									<input className="products-check hidden-check" name="type" id="type4"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="type4" >Bộ</label>

									<input className="products-check hidden-check" name="type" id="type5"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="type5" >Váy</label>
								</div>
								<div className="options-group col-3">
									<div className="options-group-title">
										Danh mục:
									</div>

									<input className="products-check hidden-check" name="category" id="category1"
										value={"hello"}
										type="radio" autoComplete="off" defaultChecked
									/>
									<label className="products-option" htmlFor="category1" >Tất cả</label>

									<input className="products-check hidden-check" name="category" id="category2"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="category2" >Phổ biến</label>

									<input className="products-check hidden-check" name="category" id="category3"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="category3" >Giá trung bình</label>

									<input className="products-check hidden-check" name="category" id="category4"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="category4" >Giá: từ thấp đến cao</label>

									<input className="products-check hidden-check" name="category" id="category5"
										value={"hello"}
										type="radio" autoComplete="off"
									/>
									<label className="products-option" htmlFor="category5" >Giá: từ cao đến thấp</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="products container">
				<div className="row product-lists">
					{baseProducts?.results?.map((product, index) => (
						<ProductListItem data={product} key={index} />
						// <></>
					))}
				</div>
				<div className="justify-center pagination-wrap">
					<PaginateSearch
						totalPage={totalPage}
						currentPage={currentPage}
						handleSetPage={(page) => { setCurrentPage(page) }}
					/>
				</div>
			</div>
			<BlogsAd blogs={fakeHomeData.blogs} />
			<NewsLetter />
		</div>
	)
}
