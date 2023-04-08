import Blog from '../../Share/Components/BlogsAd/BLog/Blog'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import './blogsPage.css'

const fakeBlogs = [
  {
    id: 1,
    slug: 'dauxanh',
    thumbnail: 'assets/images/image-3.png',
    title: 'Dau xanh rau ma',
    description: 'Dau xanh rau ma co the giup ban giam can mot cach dang ke, ngon hon khi uong lanh, no hon khi an 2 bat.',
    created_at: 'April 4, 12',
  },
  {
    id: 1,
    slug: 'dauxanh',
    thumbnail: 'assets/images/image-2.png',
    title: 'Thời trang mùa đông nên chọn màu gì để mặc?',
    description: 'Mùa đông lạnh bạn vẫn có thể diện những chiếc váy 2 dây, váy hoa điệu đà được mà không lo giá...',
    created_at: 'April 4, 12',
  },
  {
    id: 1,
    slug: 'dauxanh',
    thumbnail: 'assets/images/image-6.png',
    title: 'Dau xanh rau ma',
    description: 'Dau xanh rau ma co the giup ban giam can mot cach dang ke, ngon hon khi uong lanh, no hon khi an 2 bat.',
    created_at: 'April 4, 12',
  },
  {
    id: 1,
    slug: 'dauxanh',
    thumbnail: 'assets/images/image-2.png',
    title: 'Thời trang mùa đông nên chọn màu gì để mặc?',
    description: 'Mùa đông lạnh bạn vẫn có thể diện những chiếc váy 2 dây, váy hoa điệu đà được mà không lo giá...',
    created_at: 'April 4, 12',
  },
  {
    id: 1,
    slug: 'dauxanh',
    thumbnail: 'assets/images/image-6.png',
    title: 'Dau xanh rau ma',
    description: 'Dau xanh rau ma co the giup ban giam can mot cach dang ke, ngon hon khi uong lanh, no hon khi an 2 bat.',
    created_at: 'April 4, 12',
  },
  {
    id: 1,
    slug: 'dauxanh',
    thumbnail: 'assets/images/image-3.png',
    title: 'Dau xanh rau ma',
    description: 'Dau xanh rau ma co the giup ban giam can mot cach dang ke, ngon hon khi uong lanh, no hon khi an 2 bat.',
    created_at: 'April 4, 12',
  },
]

export default function BLogsPage() {
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
          {fakeBlogs.map((item, index) => (
            <div className="col-4" key={index}>
              <Blog data={item} />
            </div>
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
