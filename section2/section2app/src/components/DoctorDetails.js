import  React from 'react';
import docmainpage from '../images/DoctorInfo.png'
import './DoctorDetails.css'
import Achievement from '../images/achievements-BG.png'
import { useState } from 'react';
import { Redirect } from 'react-router';
const DoctorDetails =()=>{
    const[back,setback]=useState(true);
    if(!back){
        return <Redirect to='/SelectDoctor' />
    }
    return(
        <>
                <p className="backlink" onClick={()=>setback(false)}>Back</p>
        <img src={docmainpage} alt="" className="docingopicbg"/>

        <div className="detailsdiv">
            <div className="detailsheading">
                <h1 className="Details-tag">Details</h1>
            </div>
            <div className="detailsmatter">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minima laborum eveniet ex, ratione cumque eum quia natus accusamus repellendus sed a. Sit magnam numquam ipsum modi eligendi? Alias, qui.
                Culpa quaerat cum, sequi eaque quam doloremque, quibusdam corrupti, impedit ullam excepturi voluptatum necessitatibus ducimus cumque. Nostrum, omnis provident odio sequi suscipit voluptatum laboriosam officia dolore et molestias, molestiae hic.
                Iusto similique sunt excepturi ipsum distinctio impedit quasi minus! Magnam, cupiditate? Aliquam qui nihil possimus eius magnam odit necessitatibus delectus. Minus voluptas maiores provident debitis numquam, reiciendis distinctio quae magni.</p>
            </div>
        </div>
        <div >
                <img src={Achievement} alt="" className="achivmentdoc" />
        </div>
        </>
    )
}

export default DoctorDetails