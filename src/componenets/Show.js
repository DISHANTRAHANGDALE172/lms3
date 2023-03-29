import React from "react"
import Showitem from './Showitem';


export default function Show(props) {
	

	return (
		<div className='container my-3'>
			<div className='container my-3 '>
				<h1 className="text-center" style={{ margin: '20px 45px' }}>TOP TRENDING SHOWS</h1>
				
				<div className="row">
				{props.shows.map((element) => (
						<div className="col-md-4" key={element.show.id}>
							<Showitem title={element.show.name} des={element.show.language} u={element.show.url} image={element.show.image} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
