import React from 'react';
import Nav from '../Components/NavBar/NavBar';
//import LoginSignup from '../Components/LoginSignUp/LoginSignup';
import Login from '../Components/LoginSignUp/login';
import './home-page.css'



const HomePage = () => {
  return (
    <div className="home-page">
      <Nav/>
      <Login/>
    </div>
  );
};

export default HomePage;