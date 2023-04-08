import Blog from '../../Share/Components/BlogsAd/BLog/Blog'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import './blogDetail.css'

const fakeRelatedBlogs = [
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
]

const fakeBlogDetail = {
  title: 'Hello Baybe, Are you Oke?',
  thumbnail: 'assets/images/image-10.png',
  content: `Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé.Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé.`,
}

export default function BLogDetail() {
  return (
    <div className='blog-detail'>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <div className='blog-detail-wrap'>
              <div className='blog-detail-image' style={{ background: `url('${fakeBlogDetail.thumbnail}')` }}>
              </div>
              <div className='blog-detail-title'>
                {fakeBlogDetail.title}
              </div>
              <hr />
              <div className='blog-detail-content'>
                {fakeBlogDetail.content}
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='blog-detail-ad'>
              {fakeRelatedBlogs.map((item, index) => (
                <Blog data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
