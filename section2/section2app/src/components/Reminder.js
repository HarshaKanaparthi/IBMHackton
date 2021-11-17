import React from 'react'
import reminderpic from '../images/Reminderbg.png'
import './Reminder.css'
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import 'rc-time-picker/assets/index.css';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Dropdown  from 'react-bootstrap/Dropdown';
import Button  from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import Rempic from '../images/urban-928.png'
import { useHistory } from "react-router";

const Reminder =()=>{
    const [priority,setPriority] = useState("Priority");
     const history = useHistory();
        return(
            <>
           <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
           <img src={reminderpic} alt="" className="ReminderBG"/>
            <div className="totalrem">
            <div className="total-1rem">
           <div className="rem-2ndrow">
               <h1>Enter medicine name</h1> 
               <div className="totalmed-reminder">
               <div className="medRem">
               <TextField id="filled-basic" label="Medicine name" variant="filled" />
                <Dropdown as={ButtonGroup}>
  <Button variant="success">{priority}</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>setPriority("one")}>1</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPriority("two")}>2</Dropdown.Item>
    <Dropdown.Item onClick={()=>setPriority("three")}>3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
               <TimePicker className="TIME-selector"/>
               <button className="addRem">ADD</button>
               <div className="tableCheck">
               <h2 >Check</h2>
               </div>
</div>
           </div>
           </div>
           <div className="total2-rem">
           <img src={Rempic} alt="" className="phonerem"/>
           </div>
           </div>
           </>
        )
}

export default Reminder