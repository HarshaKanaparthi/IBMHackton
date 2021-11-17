import React from 'react';
import { useHistory } from "react-router";
import './LabHospitalList.css'
const LabHospitalList = () =>{
    const history = useHistory();
    return(
        <>
         <p id="back" onClick={()=>{history.push('/Labpage')}}>Back</p>
         <br /><br />
        <div className="containerlabList">
            <div className="lab-1" onClick={()=>{history.push('/Booklab')}}>
                <h1><b>Apollo Labs</b></h1>
                <h2>Near Old Check post</h2>
                <div className="labinformation">
                    <div className="labrating">
                        <p>rating:4.8/5 </p>
                    </div>
                    <div className="labtimings">
                        <p>Timings:9 to 5</p>
                    </div>
                </div>
            </div>
            <div className="lab-1">
                <h1><b>Apollo Labs</b></h1>
                <h2>Near Old Check post</h2>
                <div className="labinformation">
                    <div className="labrating">
                        <p>rating:4.8/5 </p>
                    </div>
                    <div className="labtimings">
                        <p>Timings:9 to 5</p>
                    </div>
                </div>
            </div>
            <div className="lab-1">
                <h1><b>Apollo Labs</b></h1>
                <h2>Near Old Check post</h2>
                <div className="labinformation">
                    <div className="labrating">
                        <p>rating:4.8/5 </p>
                    </div>
                    <div className="labtimings">
                        <p>Timings:9 to 5</p>
                    </div>
                </div>
            </div>
            <div className="lab-1">
                <h1><b>Apollo Labs</b></h1>
                <h2>Near Old Check post</h2>
                <div className="labinformation">
                    <div className="labrating">
                        <p>rating:4.8/5 </p>
                    </div>
                    <div className="labtimings">
                        <p>Timings:9 to 5</p>
                    </div>
                </div>
            </div>
            <div className="lab-1">
                <h1><b>Apollo Labs</b></h1>
                <h2>Near Old Check post</h2>
                <div className="labinformation">
                    <div className="labrating">
                        <p>rating:4.8/5 </p>
                    </div>
                    <div className="labtimings">
                        <p>Timings:9 to 5</p>
                    </div>
                </div>
            </div>
            <div className="lab-1">
                <h1><b>Apollo Labs</b></h1>
                <h2>Near Old Check post</h2>
                <div className="labinformation">
                    <div className="labrating">
                        <p>rating:4.8/5 </p>
                    </div>
                    <div className="labtimings">
                        <p>Timings:9 to 5</p>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default LabHospitalList