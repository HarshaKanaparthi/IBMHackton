import React from 'react';
import bgPic from '../images/BGappointment-online.png'
import Dropdown  from 'react-bootstrap/Dropdown';
import './OnlineBooking.css'
import { Redirect } from 'react-router';
import { useState } from 'react';
import { useHistory } from "react-router";
const OnlineBooking =()=>{
    
    const history = useHistory();
   
    return (
        <>
        <p id="back" onClick={()=>{history.push('/TypeOfOnline')}}>Back</p>
          <img src={bgPic} alt="" className="Picgb-Onlineappointment"/>
            <div className="selectonlineAppointment-field">
                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{history.push('/SelectDoctor')}}>Neurologist</Dropdown.Item>
    <Dropdown.Item onClick={()=>{history.push('/SelectDoctor')}}>Pulmonogist</Dropdown.Item>
    <Dropdown.Item onClick={()=>{history.push('/SelectDoctor')}}>Opthalmologist</Dropdown.Item>
    <Dropdown.Item onClick={()=>{history.push('/SelectDoctor')}}>ENT</Dropdown.Item>
    <Dropdown.Item onClick={()=>{history.push('/SelectDoctor')}}>Dentist</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
            </div>
        </>
    )
}

export default OnlineBooking;