import React from "react";
import doctorportalbg from '../../images/background-art.jpg'
import nLogo from '../../images/new_newest_logo.png'
import './DoctorPortal.css'
import { useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router";
const DoctorPortal = () =>{
    // const[Doctorlogin2,setDoctorlogedin2] = useState(true);
    // if(Doctorlogin2==false){
    //     return <Redirect to='/Logedindoctor' />
    // }
    const history = useHistory()

    return(
        <>
        <p id="back" onClick={()=>{history.push('/HospitalLogin')}}>Back</p>
        <div className="totalDp">
       
        <div className="doctor-loginForm">
            <div className="medicologo-Doc">
                <img src={nLogo} alt="" className="medicologo3"/>
            </div>
            <div className="formLog-doc">
                <h1>Login</h1>
                <form >
                <h2>Doctor ID:</h2>
                <input type="text" name="" id="" />
                <h2>Password</h2>
                <input type="password" name="" id="" /> <br /> <br />
                     <button onClick={()=>{history.push('/DoctorPortalLogedIn')}} > Login </button>
                </form>
                
               
            </div>
        </div>
        </div>
    </>
    )
}

export default DoctorPortal;