import React from 'react';
import Dropdown  from 'react-bootstrap/Dropdown';
import { useHistory } from "react-router";

const Lablist = () =>{
    const history = useHistory();
    return(
        <div className="lablistcontiner">
            <p id="back" onClick={()=>{history.push('/Labtest')}}>Back</p>
            <br /> <br />
            <h1 id="underLine">Select the Type of Test:</h1>
            <div className="drop-downBox">
    <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
                Select One
            </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{history.push('/lab/hospitalList')}}>Type of test 1</Dropdown.Item>
            <Dropdown.Item onClick={()=>{history.push('/lab/hospitalList')}}>Type of test 2</Dropdown.Item>
            <Dropdown.Item onClick={()=>{history.push('/lab/hospitalList')}}>Type of test 3</Dropdown.Item>
            <Dropdown.Item onClick={()=>{history.push('/lab/hospitalList')}}>Type of test 4</Dropdown.Item>
            <Dropdown.Item onClick={()=>{history.push('/lab/hospitalList')}}>Type of test 5</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</div>
        </div>
    )
}

export default Lablist;