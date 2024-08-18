import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./booking.css";
import Nav from '../Components/NavBar/NavBar';
import axios from 'axios';

function BookingForm() {

    const history = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhNo] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(Date.now);
    const [selectedClass, setClass] = useState('ECONOMY'); // Default to 'economy'

    async function submit(e) {
        e.preventDefault();
      
        try {
          await axios.post("http://localhost:8000/booking", {
            name,email,phno,from,to,date,selectedClass
          })
          .then(res => {
            if(res.data === "exist"){
                history("/options2")
            }
            else if(res.data === "notexist"){
                alert("Wrong email!")

            }
            else if(res.data === "booked"){
                alert("Already booked!")
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

    return (
        <div>
            <div className="bk-heading">
                <h1>Flight Booking</h1>
            </div>
            <form className="bk-container">
                <div className="bk-inputs">
                    <div className='bk-input'>
                        <label htmlFor="name">Name:*</label>
                        <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} required />
                    </div>

                    <div className='bk-input'>
                        <label htmlFor="email">Email-ID:*</label>
                        <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required />
                    </div>

                    <div className='bk-input'>
                        <label htmlFor="phno">Mobile Number:*</label>
                        <input type="tel" id="phno" name="phno" placeholder='+91' onChange={(e) => {setPhNo(e.target.value)}} required />
                    </div>

                    <div className="blank-space"></div>

                    <div className='from-to'>
                        <div className='bk-input'>
                            <label htmlFor="from">From:*</label>
                            <input type="text" id="from" name="from" onChange={(e) => setFrom(e.target.value)} required />
                        </div>

                        <div className='bk-input'>
                            <label htmlFor="to">To:*</label>
                            <input type="text" id="to" name="to" onChange={(e) => setTo(e.target.value)} required />
                        </div>
                    </div>

                    <div className='bk-input'>
                        <label htmlFor="departure">Departure Date:*</label>
                        <input type="date" id="departure" name="departure" onChange={(e) => setDate(e.target.value)} required />
                    </div>

                    <div className='bk-input'>
                        <label htmlFor="class">Class:*</label>
                        <select
                            id="class"
                            name="class"
                            value={selectedClass}
                            onChange={(e) => setClass(e.target.value)}
                            required
                        >
                            <option value="ECONOMY CLASS">Economy  + $0</option>
                            <option value="FIRST CLASS">First Class + $10</option>
                            <option value="BUSINESS CALSS">Business + $50</option>
                        </select>
                    </div>

                    <div className='bk-sub-cont'>
                        <input type="submit" value="Book Now" onClick={submit} className='bk-sub' />
                    </div>
                </div>
            </form>
        </div>
    );
}

function Booking() {
    return (
        <div className='bk-page'>
            <Nav />
            <BookingForm />
        </div>
    );
}

export default Booking;
