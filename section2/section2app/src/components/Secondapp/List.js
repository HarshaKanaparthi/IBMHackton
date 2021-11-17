import React from 'react';
import { useHistory } from 'react-router';
const List = () =>{
    const history = useHistory()
    return(
        <>
        <p id="back" onClick={()=>{history.push('/DoctorPortalLogedIn')}}>Back</p>
        <div className="totallist">
            <div className="patient-1" onClick={()=>{history.push('/Patientpage')}}>
                <h1 id="RC">Ram charan</h1>
                <h2 id="ha">Cause:  Heart attack</h2>
                <div className="personalinfo">
                    <div className="age">
                        <h3>Age:36</h3>
                    </div>
                    <div className="Gender">
                        <h3>Gender: Male</h3>
                    </div>
                </div>
                <button className="Button-check" >Check</button>
            </div>
            <div className="patient-1">
                
            </div>
            <div className="patient-1">
                
            </div>

            <div className="patient-1">
                
            </div>
            <div className="patient-1">
                
            </div>
            <div className="patient-1">
                
            </div>
            
        </div>
        </>
    )
}

export default List