import React from 'react';
import Nav from '../Components/NavBar/NavBar';
import "./options.css"
import { Link } from 'react-router-dom'


function Opt(){
    return(
        <div className='contain'>
        <div className='opt'>
            <ul>
                <li><Link to="/booking" className="opt-style">BOOK FLIGHT</Link></li>
            </ul>
        </div>
        </div>
    )
}

function Options() {
  return (
    <div className='options'>
        <Nav/>
        <Opt/>
    </div>
  )
}

export default Options