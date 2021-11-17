import React from 'react'
import BG9 from '../../images/Portalbg.png'
import './DoctorLogin.css'
import { useHistory } from "react-router";
const DoctorLogin = () => {
    
    const history = useHistory();
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <img src={BG9} className='Docbg'></img>
        <div className="doc-breif">
            <div className="noOfpatients"  onClick={()=>{history.push('/List')}}>
                <h1 className="np">10</h1>
                <h2>Number of patients</h2>
            </div>
            <div className="noOfpendingpatients">
   <h1 className="np">15</h1>
                <h2>Number of pending appointmnet</h2>
            </div>
        </div>
        <div className="doctor-selectionOptions">
            <div className="patientDetails3">
                <h1>Patient details</h1>
                <div className="btnDoc">
                    <button id="BuTTon-enter" onClick={()=>{history.push('/List')}}>Click Here</button>
                </div>
            </div>
            <div className="todays-Schedule" onClick={()=>{history.push('/Schedule')}}>
                <h1>Schedule</h1>
                 <div className="btnDoc" >
                    <button id="BuTTon-enter">Click Here</button>
                </div>
            </div>
            <div className="on-dutyDoctors" onClick={()=>{history.push('/OnDutyDoctor')}}>
                <h1>On-Duty Doctor</h1>
                 <div className="btnDoc">
                    <button id="BuTTon-enter">Click Here</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default DoctorLogin