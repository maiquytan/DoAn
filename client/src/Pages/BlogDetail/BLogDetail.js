import { useDispatch } from 'react-redux'
import Blog from '../../Share/Components/BlogsAd/BLog/Blog'
import NewsLetter from '../../Share/Components/NewsLetter/NewsLetter'
import './blogDetail.css'
import { getBlog } from '../../reducers/app'
import { useEffect } from 'react'
import { useState } from 'react'
import { getBlogs } from '../../lib'

const fakeBlogDetail = {
  title: 'Mùa đông mặc gì?',
  thumbnail: 'assets/images/image-10.png',
  content: `
  Áo khoác da
  Bạn muốn thêm chút cá tính vào trang phục của mình? Hãy mặc một chiếc áo khoác da. Nó không chỉ giữ ấm mà còn rất thời trang.

  Khăn quàng cổ
  Khăn quàng cổ sẽ giữ ấm và giúp cho trang phục của bạn trở nên thêm phong cách hơn. Nếu bạn thích phong cách vintage, hãy chọn một chiếc khăn quàng cổ len dài, hoặc nếu bạn muốn sự thoải mái và phong cách, hãy chọn một chiếc khăn quàng cổ bằng cotton.

  Áo khoác dù
  Nếu bạn sống ở một khu vực có tuyết và mưa thường xuyên, áo khoác dù là một sự lựa chọn tuyệt vời. Chúng bảo vệ bạn khỏi nước mưa và gió lạnh, và được thiết kế kiểu dáng hiện đại và phong cách.

  Găng tay và khăn len
  Để bảo vệ tay và cổ của bạn khỏi gió lạnh, hãy đeo găng tay và khăn len. Chúng sẽ giữ cho bạn ấm áp trong suốt cả ngày.

  Áo khoác chống nước
  Nếu bạn thường xuyên phải di chuyển bằng xe đạp hoặc xe máy, hãy chọn một chiếc áo khoác chống nước. Chúng giữ cho bạn khô ráo và thoải mái trong khi điều khiển phương tiện của mình.

  Những gợi ý trên đều là những lựa chọn tuyệt vời cho mùa đông. Hãy lựa chọn những món đồ phù hợp với phong cách của bạn và mang lại sự ấm áp và thời trang cho bản thân.

   Vì thế, mùa đông mặc nhiều áo mỏng sẽ ấm hơn mặc một chiếc áo dày. Bởi khi ấy sẽ có nhiều lớp không khí ở giữa các áo hơn. Mà không khí lại dẫn nhiệt rất kém. Do đó, cứ cách một lớp áo mỏng là các lớp không khí dẫn nhiệt kém nên sẽ giữ ấm cho cơ thể tốt hơn. Hy vọng qua bài chia sẻ trên, bạn sẽ biết được mùa đông nên mặc một áo dày hay nhiều áo mỏng sẽ ấm hơn rồi nhé. Giờ thì mùa đông đã gần kề rồi, bạn hãy mau mau chuẩn bị cho mình nhiều chiếc áo mỏng để giữ ấm cho cơ thể thật tốt nha. Và đừng quên bổ sung thêm các thực phẩm giàu vitamin, các thức uống bổ dưỡng như nước yến, mật ong để bồi bổ sức khoẻ nhé. `,
   a: `Đa số các công ty còn lại đều không còn quá khắt khe trong trang phục của nhân viên mà chỉ yêu cầu lịch sự, chỉn chu là được. Đây chính là cơ hội để các tín đồ thời trang được diện theo những phong cách mà mình yêu thích và tự tin thể hiện nét đẹp của riêng mình.
   Thời trang công sở nam được yêu thích nhất
   - Những chiếc áo sơ mi thanh lịch
   Áo sơ mi công sở nam là một trong những món đồ quan trọng nhất trong trang phục công sở, cũng là món đồ được sử dụng nhiều nhất. Bởi đây là chiếc áo vừa mang được phong cách lịch sự, chỉn chu vừa phù hợp với mọi vóc dáng, mọi độ tuổi.
   - Những chiếc quần tây hiện đại
   Thay cho những chiếc quần tây đen cổ điển, những chiếc quần tây nam hàng hiệu ngày nay đã được các nhà thiết kế chăm chút với nhiều mẫu mã vô cùng sành điệu. Không chỉ ngày càng đa dạng nhiều màu sắc khác nhau mà còn được cho ra nhiều mẫu với thiết kế sành điệu như kẻ sọc hay ống lửng. Tùy vào phong cách và cả vóc dáng khác nhau mà các chàng có thể chọn được cho mình chiếc quần âu phù hợp nhất.
   Thời trang công sở nữ cao cấp
    - Những chiếc đầm công sở nữ điệu đà
    Khi đã nhắc đến thời trang công sở nữ thì không thể nào bỏ qua những chiếc đầm nữ công sở điệu đà. Những chiếc đầm sẽ giúp các nàng nổi bật hẳn bởi sự nữ tính, uyển chuyển. Không những vậy, đầm công sở cũng có nhiều mẫu mã vừa kín đáo vừa cuốn hút bởi những thiết kế mới lạ, độc đáo cho các nàng tha hồ biến hóa, thể hiện gu ăn mặc của mình nơi làm việc.
    - Những chiếc chân váy đa năng
    Cũng tương tự những chiếc đầm, những chiếc chân váy cũng mang đến sự nữ tính, điệu đà cho các nàng nơi công sở. Nhưng với chiếc chân váy các nàng có thể thỏa sức biến hóa đa dạng với nhiều set đồ sành điệu hơn những chiếc đầm. Các nàng có thể chọn mix cùng áo sơ mi để diện cho mình một vẻ ngoài thanh lịch, hiện đại. Còn không thì nàng có thể phối cùng những chiếc áo thun mang vẻ đẹp năng động hoặc những chiếc áo kiểu sành điệu, phá cách.
   `,
}

export default function BLogDetail() {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  const sendRequestBlog = async () => {
    const res = await getBlogs();
    dispatch(getBlog(res))
    if (res) {
      setBlogs(res);
    }
  }

  useEffect(() => {
    sendRequestBlog();
  }, []);

  useEffect(() => {
    if (!selectedBlog) {
      setSelectedBlog(fakeBlogDetail);
    }
  }, []);

  return (
    <div className='blog-detail'>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            {selectedBlog ? (
              <div className='blog-detail-wrap'>
                <div className='blog-detail-image' style={{ background: `url('${selectedBlog.thumbnail}')` }}>
                </div>
                <div className='blog-detail-title'>
                  {selectedBlog.title}
                </div>
                <hr />
                <div className='blog-detail-content'>
                  {selectedBlog.content}
                </div>
              </div>
            ) : (
              <div>No blog selected</div>
            )}
          </div>
          <div className='col-3'>
            <div className='blog-detail-ad'>
              {blogs.map((item, index) => (
                <div onClick={() => handleBlogSelect(item)} key={index} >
                  <Blog data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
