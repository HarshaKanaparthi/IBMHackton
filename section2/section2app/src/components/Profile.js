import React from 'react';
import { useHistory } from "react-router";
import userphoto from '../images/Userlogo.png';
import './Profile.css'
const Profile = () =>{
    const history = useHistory();
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <br /> <br />
        <h1>Profile:</h1>
        <div className="userprofile-Info">
            <div className="userlogo-photo">
                <img src={userphoto} alt="" />
            </div>
            <div className="user-name-profile">
              <h1> <b> Harsha Vardhan</b> </h1>
            </div>
        </div>
        <hr />
        <h1><b>Dashboard</b></h1>
        <div className="dashboard">
        
            <div className="payments">
                <h1>Payment</h1>
            </div>
            <div className="Appointments-booked">
                <h1>Appointments</h1>
            </div>
            <div className="Goals">
                <h1>Goals</h1>
            </div>
            <div className="TrackProfile">
                <h1>Track</h1>
            </div>

        </div>

        </>
 
    )
}

export default Profile;