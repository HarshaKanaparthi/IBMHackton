import React from 'react';
import CoronaBG from '../images/CoronaBG.jpg'
import './CoronaPage.css'
import { useHistory } from "react-router";
const CoronaPage = () => {
    const history = useHistory();
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
        <img src={CoronaBG} alt="" id="coronabg" />
        <h1>Options:</h1>
         <div className="features-corona">
             <div className="photoOf-feature">
                 <img src="" alt="Vacination" />
                 <h2>Vaccination</h2>
             </div>
             <div className="photoOf-feature">
                 <img src="" alt="Test" />
                 <h2>Hello</h2>
             </div>
             <div className="photoOf-feature">
                 <img src="" alt="Food-package" />
                 <h2>Hello</h2>
             </div>
         </div>
        </>
    )
}

export default CoronaPage;