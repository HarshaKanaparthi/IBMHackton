import React, { useState } from 'react';
import './Bookslot.css'
import slotBookbg from '../images/selectTimebg.png'
import DatePicker from 'react-date-picker';
import { useHistory } from "react-router";
const Bookslot = () =>{
    const history = useHistory();
    const [value, onChange] = useState(new Date());
        return(
            <>
             <p id="back" onClick={()=>{history.push('/SelectDoctor')}}>Back</p>
                <img src={slotBookbg} alt="" className="Slotbg" />
                <div className="slottime">
                    <h1>Select the Date:</h1>
                    <div className="td-selector">
                        <DatePicker
        onChange={onChange}
        value={value}
      />
      <button>Register</button>
                    </div>
                </div>
            </>
        )
}

export default Bookslot;