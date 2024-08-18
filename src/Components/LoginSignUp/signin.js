import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import axios from 'axios';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pass_icon from '../Assets/password.png'



function SignUp() {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/signup",{
                email, password
            })
            .then(res => {
                if(res.data === "exist"){
                    alert("User Already exists")
                }
                else if(res.data === "notexist"){
                    history("/options")

                }
            })
            .catch(e => {
                alert("Invalid email or password")
                console.log(e)
            })
        }
        catch(e){
            console.log(e);
        }
    }
    
    return (
        <div>
            <form action="POST" >
            <div class = "heading">
                <h1>Maverick Airlines</h1>
            </div>
        <div className='container'>

            <div className='header'>
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                
                <div className="input">
                    <img src={email_icon} alt=''/>
                    <input type='email' name='email' placeholder='Email ID' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={pass_icon} alt=''/>
                    <input type='password' name='password' placeholder='New Password' onChange={(e) => setPassword(e.target.value)} required/>
                </div>
            </div> 
            <div className="forgot-pass">Already a User ?<span><Link to = "/" className='custom-link'> Login</Link></span></div>           

            <div className='sub-cont'>
                <div className='sub'><input type='submit' onClick={submit} value='SIGN IN' className='inp'/></div>
            </div>
        </div>
        </form>
        </div>
    )
}

export default SignUp;