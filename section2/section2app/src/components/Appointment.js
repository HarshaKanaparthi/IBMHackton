import React from 'react';
import Appointmentbg from '../images/bgAppointment.png'
import './Appointment.css'
import OnlineAppointment from '../images/Appointment-pic.jpg'
import offlineappointment from '../images/OfflineAppointment.jpg'
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router";
const Appointment =()=>{
   
    const history = useHistory();
    
        return (
            <>
            <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
            <img src={Appointmentbg} alt=""  className="Appointmentbg"/>
            <div className="appointbook-button">
                <h1>Type of Appointment</h1>
                <div className="totaltypes">
                <div className="onlineMode">
                    <div className="onlinebutton">
                        <button onClick={()=>{history.push('/TypeOfOnline')}}>Online booking</button>
                    </div>
                    <div className="onlinepicmode">
                        <img src={OnlineAppointment} alt="" className="selectOption" />
                    </div>
                </div>
                  <div className="offlineMode">
                    <div className="offlinepicmode">
                          <img src={offlineappointment} alt="" className="selectOption" />
                    </div>
                    <div className="offlinebutton">
                         <button onClick={()=>{history.push('/Offlinebooking')}}>Offline booking</button>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
}

export default Appointment;