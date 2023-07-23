import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './componenets/Navbar';
//import {Link, BrowserRouter , Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Display from './componenets/Display';
import Login from './componenets/Login';
import Signup from './componenets/Signup';
import Courses from './componenets/Courses';
import Pleaselogin from './componenets/Pleaselogin';

function App() {
	 const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	// const handleChildData = (dataFromChild) => {
	// 	setIsLoggedIn(true);
	//   };
	
  return (
	<>
	 <Router>
      <div>
		
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}
<Navbar/>
        <Route exact path="/" component={Display} />
        <Route path="/signup" component={Signup} />
		<Route path="/login" component={Login} />
		
		 {/* <Route
        path="/login"
        render={(props) => <Login {...props} sendDataToParent={handleChildData} />}
      /> */}
		{/* {   isLoggedIn ? <Route path="/courses" component={Courses} /> : <Route path="/courses" component={Pleaselogin}/>}  */}
		<Route path="/courses" component={Courses } />
      </div>
    </Router>

   
	
	
	</>
  );
}

export default App;
