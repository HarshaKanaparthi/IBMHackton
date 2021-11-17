import React from 'react'
import './Feature.css'
import building from '../images/mainphone.png'
import { useState } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from "react-router";

const Feature =()=>{
    const history = useHistory();
    
        return(
            <>
            <div className="total-mainpage">
                <div className="topRow">
                <div className="klu-photo">
                    <h2>MEDICO <br></br>  Healthcare app </h2>
                    <p>A small change can bring a big difference</p>
                </div>
                <div className="hosbuild-pic">
                    <img src={building} alt="" className="Mainpic"/>
                    <div className="colorbg"></div>
                </div>
                </div>
            </div>
            <div className="functionality">
                    <h1>Our Features</h1>

                    <div className="functionality-options">
                     
                        <div className="home-remidies">
                            <h1 >Home Remidies</h1>          

                            <div className="btn-click">
                                <button className="btnClick" onClick={()=>{history.push('/homeremidies')}} >Click here</button>    
                            </div>                
                        </div>
                        
                        <div className="reminder">
                               <h1>Reminders</h1>          

                            <div className="btn-click">
                                <button className="btnClick" onClick={()=>{history.push('/reminders')}} >Click here</button>    
                            </div>  
                        </div>
                        <div className="appointment">
                                <h1>Appointment</h1>          

                            <div className="btn-click">
                                <button className="btnClick" onClick={()=>{history.push('/appointment')}} >Click here</button>    
                            </div>  
                        </div>
                        <div className="chat">
                            <h1>Chat</h1>          

                            <div className="btn-click">
                                <button className="btnClick" onClick={()=>{history.push('/chat')}}>Click here</button>    
                            </div>  
                        </div>
                        <div className="medicines-book">
                                <h1>Book a medicine</h1>          

                            <div className="btn-click2">
                                <button className="btnClick1" onClick={()=>{history.push('/medicine')}}>Click here</button>    
                            </div>  
                        </div>
                    </div>
            </div>
             <h1>Important features</h1>
            <div className="mainThings">
                <div className="containerMainthings">
                       <div className="track" onClick={()=>{history.push('/Track')}}>
                            <h1>Track</h1>
                       </div>
                       
                       <div className="Lab"  onClick={()=>{history.push('/Labpage')}}>
                            <h1>Lab</h1>
                       </div>
                       <div className="Admitted" onClick={()=>{history.push('/HospitalLogin')}}>
                            <h1>Admitted</h1>
                       </div>
                       <div className="COVID" onClick={()=>{history.push('/Corona')}}>
                            <h1>Covid</h1>
                       </div>
                       
                </div>
                
            </div>
            <div className="womenportal-separate" onClick={()=>{history.push('/WomenPortal')}}>
                <div className="women">
                    <div >
                           <h1 id="text-women">Only for Women</h1>
                           </div>
                </div>
            </div>
            <div className="coustomerHelp">
                
                <div className="bookTablets" onClick={()=>{history.push('/medicine')}}>
                    <h1>Book Tablets</h1>
                </div>
                <div className="bookTablets">
                    <h1>Read article</h1>
                </div>
                <div className="bookTablets">
                    <h1>Customer care</h1>
                </div>
            </div>

            </>
        )
}

export default Feature