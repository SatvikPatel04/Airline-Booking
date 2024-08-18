import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom'

function Nav(){
    return <nav>
    <img src="/logo.png" alt="Logo" />
    <div className="nav-links">
      <ul>
        <li><Link to="/" className="link-style">HOME</Link></li>
        <li><Link to="/about" className="link-style">ABOUT</Link></li>
        <li><Link to="/" className="link-style">LOGOUT</Link></li>
      </ul>
    </div>
  </nav>
}

export default Nav;