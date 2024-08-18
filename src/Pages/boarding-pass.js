import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Nav from '../Components/NavBar/NavBar';
import './boarding-pass.css';

function BrdPass()
{
  const id = "aaa@gm.com";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getUserInfo",{
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"userData");
      setData(data.data)
    })
  },[])


    return <div class="boarding-pass">
    <div class="bp-header">
        <h1>BOARDING PASS</h1>
        <div className="underline"></div>
    </div>
    
    <div className='blank-space'></div>
    {data.map(i=>{
      return(
        <div class="flight-info">
          <div class="flight-details">
              <p>Flight: {i.flight_no}</p>
              <p>Date  : {i.date}</p>
              <p>Gate  : {i.gate}</p>
              <p>From: {i.from}</p>
              
          </div>
          <div class="passenger-info">
              <p>Name : {i.name}</p>
              <p>Seat : {i.seat}</p>
              <p>Class: {i.selectedClass}</p>
              <p>To: {i.to}</p>
          </div>
    </div>
      )
    })}
    
    <div className='blank-space'></div>
    <div className='heading'>
      <p>Thank You For Choosing Maverick Arilines</p>
      <p>Have a safe journey</p>
      </div>
</div>
}

const BoardPass = () => {
  return (
    <div className="boarding-pass-page">
      <Nav/>
      <div className='blank-space'></div>
      <BrdPass/>
    </div>
  );
};

export default BoardPass;