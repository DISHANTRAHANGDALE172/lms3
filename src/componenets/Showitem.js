import React from 'react'
import {
	
	Link,
  } from "react-router-dom";
export default function Showitem(props) {
	return (
		<div>
			<div className="card" >
				<img src={props.image === null ? '#' : props.image.original} className="card-img-top" alt="no" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.des}</p>
					<div className="d-flex justify-content-around">
						<a href={props.u} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
						{/* <Link className="nav-link active"  to="/summary">Summary</Link> */}
						{/* <a href={props.u} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Summary</a> */}
					</div>
				</div>
			</div>
		</div>
        
	)
}
