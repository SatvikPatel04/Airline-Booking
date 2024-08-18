import React from 'react';
import Nav from '../Components/NavBar/NavBar';
import "./options.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Opt2(){

    const history = useNavigate();

    async function cancel(){

        try {
            await axios.delete("http://localhost:8000/cancel")
            .then(res => {
              if(res.data === "cancelled"){
                  history("/");
                  alert("Ticket Cancelled")
              }
              else if(res.data === "notexist"){
                  alert("Something went wrong")
  
              }
              })
              .catch(e => {
                  alert("something went wrong")
                  console.log(e)
              })
      }
      catch(e){
          console.log(e);
      }
}

    return(
        <div className='contain'>
        <div className='opt'>
            <ul>
                <li><Link to="/boarding-pass" className="opt-style">CHECK-IN</Link></li>
                <li ><div className="opt-style" onClick={cancel}>CANCEL FLIGHT</div></li>
            </ul>
        </div>
        </div>
    )
}

function Options2() {
  return (
    <div className='options'>
        <Nav/>
        <Opt2/>
    </div>
  )
}

export default Options2