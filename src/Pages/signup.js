import React from 'react';
import Nav from '../Components/NavBar/NavBar';
//import LoginSignup from '../Components/LoginSignUp/LoginSignup';
//import Login from '../Components/LoginSignUp/login';
import SignUp from '../Components/LoginSignUp/signin';
import './home-page.css'



const SignIn = () => {
  return (
    <div className="home-page">
      <Nav/>
      <SignUp/>
    </div>
  );
};

export default SignIn;