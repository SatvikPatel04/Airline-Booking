import React, { useState } from 'react';
import './LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:8000/", {
          email,
          password,
        });
  
        if (response.status === 200) {
          if (response.data === "exist") {
            history("/options");
          } else if(response.data === "booked"){
            history("/options2");
          }
          else if (response.data === "notexist") {
            alert("User doesn't exist");
          } else if (response.data === "invalid") {
            alert("Invalid email or password");
          }
        } else {
          alert("Server error. Please try again later.");
        }
      } catch (error) {
        console.error(error);
        alert("Error during login");
      }
    }
  

  return (
    <div>
      <form action="POST">
        <div className="heading"><h1>Maverick Airlines</h1></div>

        <div className="container">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" name="email" placeholder="Email ID"onChange={(e) => {setEmail(e.target.value);}} required/>
            </div>
            <div className="input">
              <img src={pass_icon} alt="" />
              <input type="password" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value);}} required/>
            </div>
          </div>
          <div className="forgot-pass">New User ?<span><Link to="/signup" className="custom-link">Sign Up</Link></span></div>
          <div className="sub-cont">
            <div className="sub"><input type="submit" onClick={submit} value="LOGIN" className='inp'/></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
