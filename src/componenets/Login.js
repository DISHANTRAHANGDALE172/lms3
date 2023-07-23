import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleClick = () => {
    const { email, password } = user;

    if (email && password) {
      axios.post('http://localhost:8000/login', user)
        .then(function (res) {
          alert(res.data);
          window.location.href = '/courses'; 
         

          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Application<br /> Login Page</h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" name='email' value={user.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name='password' value={user.password} onChange={handleChange} />
              </div>
              <button type="button" onClick={handleClick} className="btn btn-black">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
