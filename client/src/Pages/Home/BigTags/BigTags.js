import './tags.css'

export default function BigTags({ dataList }) {

	return (
		<div className="tags">
			<div className="part">
				<div className="container">
					<div className="row" style={{ margin: "0 -12px" }}>
						{dataList?.map((item, index) => (
							<a href={`/${item.slug}`} className="col-4 tag-wrap" key={index}>
								<div className="tag" style={{ background: 'url(' + item.image + ')' }}>
									<div className="mask-tag center-box">
										<div className="btn-tag">
											{item.name}
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
