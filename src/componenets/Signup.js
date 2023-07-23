import React from 'react'
import axios from 'axios';
import { useState } from "react";
export default function Signup() {
    
        const [user, setuser] = useState({
            email: "",
            password: "",
            cpassword: ""

        });
        const handlechange=(e)=>{
            console.log(e.target.value);
            const{name,value}=e.target;
            setuser({
                ...user,
                [name]:value

            })
            
        }
        const handleclick=()=>{
            const{email,password,cpassword}=user;
            
            if(email&& password && (password===cpassword)){
               axios.post('http://localhost:8000/signup',user)
                .then(function (res) {
                    alert(res.data);
                    window.location.href = '/courses'; 
                //   console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
            else{
               alert("invalid");
            }
           }
        return (
            <>
                <div>
                    <div className="sidenav">
                        <div className="login-main-text">
                            <h2>Application<br /> Signup Page</h2>
                            <p>Register from here to access.</p>
                        </div>
                    </div>
                    <div className="main">
                        <div className="col-md-6 col-sm-12">
                            <div className="login-form">
                                <form>
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input type="email" className="form-control" placeholder="Email" name='email' value={user.email} onChange={handlechange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name='password' value={user.password} onChange={handlechange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name='cpassword' value={user.cpassword} onChange={handlechange} />
                                    </div>
                                    <button type="submit" className="btn btn-black" onClick={handleclick}>Signup</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
