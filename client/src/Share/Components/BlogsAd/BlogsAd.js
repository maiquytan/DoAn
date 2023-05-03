import Blog from './BLog/Blog'
import './blogsad.css'

export default function BlogsAd({ blogs }) {
  console.log(blogs, "ww");
  return (
    <div className='blogs-ad part'>
      <h3 className='blogs-ad-title'>
        Khám phá bài viết
      </h3>
      <hr className='blogs-ad-line' />
      <div className='blogs-ad-content'>
        <div className='container '>
          <div className='row blogs'>
            {blogs?.slice(0,3).map((item, index) => (
              <div className='col-4' key={index}>
                <Blog data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
