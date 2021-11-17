import React from 'react';
import { useHistory } from "react-router";
import bglabtest from '../images/LabTestBg.png'
import './Labbook.css'
const Labbook = () =>{
    const history = useHistory();
    return(
        <>
        <p id="back" className="back5" onClick={()=>{history.push('/Labpage')}}>Back</p> 
        <img src={bglabtest} alt="" id="labtesBg"  />
        <h1>Book your slot</h1>
        <input type="date" name="" id="" /> 
        <input type="time" name="" id="" />
        <button>Register</button>
        </>
    )
}   

export default Labbook;