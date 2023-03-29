import React, { useState, useEffect } from 'react'

import './App.css';
import Navbar from './componenets/Navbar';
import Show from './componenets/Show';
import Summary from './componenets/Summary';

import {
	BrowserRouter,
	Routes,
	Route,
	
} from "react-router-dom";

function App() {
	const [shows, setshows] = useState([]);
	
	useEffect(() => {
		const updateshows = async () => {
			const url = "https://api.tvmaze.com/search/shows?q=all";
			const data = await fetch(url);
			const parseddata = await data.json();
			
			// parseddata.pop()
	// parseddata.forEach(element => {
	// 	console.log(element.show.summary);
		
	// });
			setshows(parseddata);
		}

		updateshows();

	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Show   shows={shows}/>} />
				<Route path="/home" element={<Show  shows={shows}/>} />
				<Route path="/summary" element={<Summary data={shows} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
