import './blog.css'

export default function Blog({ data }) {
  const {
    slug,
    thumbnail,
    title,
    description,
    created_at,
  } = data

  return (
    <div className="blog">
      {data && (
        <>
          <a href={`/blogdetail`}>
            <div className="blog-image" style={{ background: 'url(' + thumbnail + ')' }}>

            </div>
          </a>
          <div className="blog-date">
            {created_at}
          </div>
          <h4 className="blog-title">
            {title}
          </h4>
          <p className="blog-description">
            {description}
          </p>
        </>
      )}
    </div>
  )
}
