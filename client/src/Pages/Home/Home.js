import React from 'react'

import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'
// import NavBar from '../../Share/Components/NavBar/NavBar'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import Categories from './Categories/Categories'
import Slides from './Sildes/Slides'
import BigTags from './BigTags/BigTags'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBaseProduct, getBlogs } from '../../lib'
import { getBlog, getProduct } from '../../reducers/app'

const fakeHomeData = {
  bigTags: [
    {
      id: 1,
      name: 'Nam',
      slug: 'shop',
      image: 'assets/images/image-3.png',
    },
    {
      id: 1,
      name: 'Nữ',
      slug: 'shop',
      image: 'assets/images/image-2.png',
    },
    {
      id: 1,
      name: 'Khác',
      slug: 'shop',
      image: 'assets/images/image-4.png',
    },
  ]
}

export default function Home() {
  const [blogs, setBlogs] = useState([])
  const [baseProducts, setBaseProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPage, setTotalPage] = useState(1)
  const dispatch = useDispatch();

  const sendRequest = async () => {
		const response = await getBaseProduct(currentPage)
		dispatch(getProduct(response.products))
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

  const sortByFavourites = [...baseProducts].sort((a, b) => b.favorite - a.favorite).slice(0,4);
  const newProduct = [...baseProducts].slice(0,4);
  console.log(blogs, "xxx")
  console.log(sortByFavourites, "")

  return (
    <>
      {/* <NavBar/> */}
      <Slides />
      <BigTags dataList={fakeHomeData.bigTags} />
      <Categories
      hot={sortByFavourites}
      newProduct = {newProduct}
      />
      <BlogsAd blogs={blogs} />
      <NewsLetter />
    </>
  )
}
