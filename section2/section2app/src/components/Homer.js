import React from "react";
import bghr from "../images/mainHrbg.png"
import './Homer.css'
import Dropdown  from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { useHistory } from "react-router";
const Homer =()=>{
    const history = useHistory();
    const[Type,setType]=useState("Selectone");
    if(Type=='Headache')
    return(
      <>
      <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachpain")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
      <h1>Remidies for headache</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum quidem amet, aspernatur iste laboriosam nemo voluptates atque explicabo optio dicta consequuntur. Sint accusantium magnam voluptatibus aliquid necessitatibus voluptates molestiae?
      Possimus, porro ex? Laudantium, ea. Laudantium ipsam rerum, quas sapiente repudiandae ipsa culpa ullam delectus velit facere deserunt, accusamus deleniti! Nemo qui quis veniam magni, sapiente nulla? Dolore, saepe. Dolores.
      Nesciunt pariatur distinctio odio illo. Culpa ratione iste temporibus ducimus at impedit omnis nihil praesentium illo corrupti, consequuntur, cupiditate ut. Sapiente blanditiis consequuntur dolores earum illum cupiditate molestias asperiores iste!</p>
      <h2>Medication:</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque mollitia qui aspernatur nesciunt ducimus, quos perspiciatis harum atque culpa veniam dolor consectetur temporibus quidem, fuga ipsa! Omnis, ducimus eaque?</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque mollitia qui aspernatur nesciunt ducimus, quos perspiciatis harum atque culpa veniam dolor consectetur temporibus quidem, fuga ipsa! Omnis, ducimus eaque?</li>
      </ul>
      </>
    )
     if(Type=='Stomachpain')
    return(
      <>
      <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachpain")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
      <h1>Remidies for Stomach - pain</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum quidem amet, aspernatur iste laboriosam nemo voluptates atque explicabo optio dicta consequuntur. Sint accusantium magnam voluptatibus aliquid necessitatibus voluptates molestiae?
      Possimus, porro ex? Laudantium, ea. Laudantium ipsam rerum, quas sapiente repudiandae ipsa culpa ullam delectus velit facere deserunt, accusamus deleniti! Nemo qui quis veniam magni, sapiente nulla? Dolore, saepe. Dolores.
      Nesciunt pariatur distinctio odio illo. Culpa ratione iste temporibus ducimus at impedit omnis nihil praesentium illo corrupti, consequuntur, cupiditate ut. Sapiente blanditiis consequuntur dolores earum illum cupiditate molestias asperiores iste!</p>
      <h2>Medication:</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque mollitia qui aspernatur nesciunt ducimus, quos perspiciatis harum atque culpa veniam dolor consectetur temporibus quidem, fuga ipsa! Omnis, ducimus eaque?</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque mollitia qui aspernatur nesciunt ducimus, quos perspiciatis harum atque culpa veniam dolor consectetur temporibus quidem, fuga ipsa! Omnis, ducimus eaque?</li>
      </ul>
      </>
    )
    if(Type=='Cold and Cough')
    return(
      <>
      <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachpain")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
      <h1>Remidies for Cold and Cough</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum quidem amet, aspernatur iste laboriosam nemo voluptates atque explicabo optio dicta consequuntur. Sint accusantium magnam voluptatibus aliquid necessitatibus voluptates molestiae?
      Possimus, porro ex? Laudantium, ea. Laudantium ipsam rerum, quas sapiente repudiandae ipsa culpa ullam delectus velit facere deserunt, accusamus deleniti! Nemo qui quis veniam magni, sapiente nulla? Dolore, saepe. Dolores.
      Nesciunt pariatur distinctio odio illo. Culpa ratione iste temporibus ducimus at impedit omnis nihil praesentium illo corrupti, consequuntur, cupiditate ut. Sapiente blanditiis consequuntur dolores earum illum cupiditate molestias asperiores iste!</p>
      <h2>Medication:</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque mollitia qui aspernatur nesciunt ducimus, quos perspiciatis harum atque culpa veniam dolor consectetur temporibus quidem, fuga ipsa! Omnis, ducimus eaque?</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque mollitia qui aspernatur nesciunt ducimus, quos perspiciatis harum atque culpa veniam dolor consectetur temporibus quidem, fuga ipsa! Omnis, ducimus eaque?</li>
      </ul>
      </>
    )
    // if(Type=='Selectone')
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
       <img src={bghr} alt="" className="hrBg1" />
       <div className="drop-downBox">
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"  size="lg">
   {Type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{setType("Headache")}}>Headache</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Stomachpain")}}>Stomach pain</Dropdown.Item>
    <Dropdown.Item onClick={()=>{setType("Cold and Cough")}}>Cold and Cough</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
</>
    )
}

export default Homer