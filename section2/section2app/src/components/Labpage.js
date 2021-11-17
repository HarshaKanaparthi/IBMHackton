import React from 'react';
import { useHistory } from "react-router";
import './Labpage.css'
import Sbar from '../images/SBar.png'
import bg from '../images/LabBg.png'
import LabTest from '../images/LabTest.jpg'
import Labnearby from '../images/hospitalsNearby.jpg'

const Labpage = () => {
    const history = useHistory();
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <br />
        <br />

        <div className="text-SearchLAb">
            <div className="SLInput">
        <input type="text" name="" id="sb" />
        </div>
        <div className="icon-serach">
            <img src={Sbar} alt="" id="Search-png" />
        </div>
        </div>
        <img src={bg} alt="" id="Bg-Background" />
        <h1 id="LabTitle">Lab</h1>
        <div className="containerLab-options">
            <div className="lab-Test" onClick={()=>{history.push('/Labtest')}}>
                <img src={LabTest} alt="LabPic" id="Labtest-pic" />
                <h2>Lab Test</h2>
            </div>
            <div className="Lab-Report" onClick={()=>{history.push('/HospitalNearme')}}>
                <img src={Labnearby} alt="LabReport" id="Labnearby-pic" />
                <h2>Near-By <br /> Hospital</h2>
            </div>
        </div>

        </>
        
    )
}

export default Labpage;