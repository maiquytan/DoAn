import { useDispatch } from 'react-redux'
import Blog from '../../Share/Components/BlogsAd/BLog/Blog'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import './blogsPage.css'
import { useEffect, useState } from 'react'
import { getBlog } from '../../reducers/app'
import { getBlogs } from '../../lib'
import BlogsAd from '../../Share/Components/BlogsAd/BlogsAd'

export default function BLogsPage() {
  const [listBlogs, setListBlogs] = useState();
  const dispatch = useDispatch();

  const sendRequestBlog = async () => {
    const res = await getBlogs();
    dispatch(getBlog(res))
    console.log("222",res);
    if (res) {
      setListBlogs(res);
    }
  }

  useEffect(() => {
    sendRequestBlog()
  }, [dispatch]);

  console.log(listBlogs)

  return (
    <div className="blogs-page">
      <div className="blogs-page-top" style={{ background: `url('assets/images/blogs-background.jpg')` }}>
        <div className="blogs-page-top-mask">
          <h2 className="blogs-page-title">
            Clothes Blogs
          </h2>
        </div>
      </div>
      <div className="blogs container">
        <div className="row">
        <BlogsAd blogs={listBlogs} />
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
