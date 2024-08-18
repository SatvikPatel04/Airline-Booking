import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';


import axios from 'axios';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pass_icon from '../Assets/password.png'



const LoginSignup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            console.log('All fields are required');
            return;
          }

        try {
          const response = await axios.post('http://localhost:5000/api/signup', formData);
          console.log(response.data);
        } catch (error) {
          console.error('Error signing up:', error.message);
        }
        navigate('/Options');
      };

    const [action, setAction] = useState("Sign Up");

    return (
        <div>
            <form action="POST" onSubmit={handleSubmit}>
            <div class = "heading">
                <h1>Maverick Airlines</h1>
            </div>
        <div className='container'>

            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=''/>
                    <input type='text' name='username' placeholder='Name' onChange={handleChange} required/>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt=''/>
                    <input type='email' name='email' placeholder='Email ID' onChange={(e) => {{setEmail(e.target.value)}}} required/>
                </div>
                <div className="input">
                    <img src={pass_icon} alt=''/>
                    <input type='password'name='password' placeholder='Password' onChange={(e) => {{setPassword(e.target.value)}}} required/>
                </div>
            </div>
            {action === "Sign Up"? <div></div> : <div className="forgot-pass">Forgot Password? <span>Click Here!</span></div>}
            

            <div className="submit-container">
                <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

            <div className='sub-cont'>
                <button className='btn' type='submit'><div className='sub'>Continue</div></button>
            </div>
        </div>
        </form>
        </div>
    )
}

export default LoginSignup;