import React from 'react';
import Vcall from '../images/VC.png'
import './TypeOfOnline.css'
import Acall from '../images/ACall.png'
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from "react-router";
const TypeOfOnline = ()=>{
     const history = useHistory();
    
    return(
        <>
        <p id="back" onClick={()=>{history.push('/appointment')}}>Back</p>
        <div className="typeOfonlinemodee">
            <div className="videocalltype">
                <div className="video-button">
                    <button onClick={()=>{history.push('/OnlineBooking')}}>Video call</button>
                </div>
                <div className="videopic">
                    <img src={Vcall} alt="" />
                </div>
            </div>
            <div className="audiocalltype">
                <div className="audio-button">
                        <button onClick={()=>{history.push('/OnlineBooking')}}>Audio call</button>
                </div>
                <div className="audiopic">
                        <img src={Acall} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default TypeOfOnline