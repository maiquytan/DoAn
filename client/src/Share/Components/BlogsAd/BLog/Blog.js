import { NavLink } from 'react-router-dom'
import './blog.css'

export default function Blog({ data }) {

  return (
    <div className="blog">
      {data && (
        <>
          <NavLink to="/blogdetail">
            <div className="blog-image" style={{ background: 'url(' + data.thumbnail + ')' }}>

            </div>
          </NavLink>
          <div className="blog-date">
            {data.created_at}
          </div>
          <h4 className="blog-title">
            {data.title}
          </h4>
          <p className="blog-description">
            {data.description}
          </p>
        </>
      )}
    </div>
  )
}
