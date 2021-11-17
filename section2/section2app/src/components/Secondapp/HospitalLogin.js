import React,{useState} from "react";
import './HospitalLogin.css'
import mainContainer from '../../images/MobilewallpaperView.png'
import { Redirect } from "react-router";
import { useHistory } from "react-router";
const HospitalLogin = () =>{
    const history = useHistory();
    const[selectProfession,setSelectedProfession] = useState(true);

    
    if(selectProfession==false){
        return(
      <>
       <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
      <div className="totalpageHos-login">
            <div className="hosdetailsLog">
                <img src={mainContainer} alt="" className="mainPic"/>
               <div class="centered-main">
                    <button onClick={()=>{history.push('/Doctorportal')}}>Doctor</button>
                    <button onClick={()=>{history.push('/Adminportal')}}>Admin</button>
                    <button onClick={()=>{history.push('/PatientPortal')}}>Patient</button>
               </div> 
            </div>
      </div>
 </>
        )
    }
    
    if(selectProfession){
    return(
      <>
       <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
      <div className="totalpageHos-login">
            <div className="hosdetailsLog">
                <img src={mainContainer} alt="" className="mainPic"/>
               <div class="centered-main">
                   <h1 id="mainmatterLog">Login</h1>
               </div> 
                <div class="bottom-left">
                    <h2>Hospital ID:</h2>
                    <input type="text" name="" id="HospitalID" />
                    <h2>Password:</h2>
                    <input type="password" name="" id="HospitalPassword" />
                </div>
                 <div class="centered-main" id="Centered"  >
                   <button onClick={()=>{setSelectedProfession(false)}}>Login</button>
               </div> 
            </div>
      </div>
      </>
    )
      }

}

export default HospitalLogin