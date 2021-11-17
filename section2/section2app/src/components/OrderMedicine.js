import React from 'react';
import Medicinebg from '../images/Bookmedicines.png'
import './OrderMedicine.css'
import chatPicmedicine from '../images/chatMedicine.png'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { useHistory } from "react-router";

const OrderMedicine = () =>{
    const history = useHistory();
    const[Adress,setAdress] =useState(true);
    if(!Adress)
    return(
        <>
        <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>

            <img src={Medicinebg} alt="" className="bgmedicine"/>
            

            <div className="downMedicine">
                
                <h1>Enter Medicine Name</h1>
                <hr />
                <div className="chat-medicine">
            
               <div className="form-adress">
                   <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridNumber">
      <Form.Label>Number</Form.Label>
      <Form.Control type="number" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Andhara Pradhesh</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Pincode</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
               </div>
            </div>
            </div>

            </>
    )

    if(Adress)
        return(
            <>
            <p id="back" onClick={()=>{history.push('/Features')}}>Back</p>
            <img src={Medicinebg} alt="" className="bgmedicine"/>
            

            <div className="downMedicine">
                
                <h1>Enter Medicine Name</h1>
                <hr />
                <div className="chat-medicine">
                <div className="formAction-Medicine">
                <form action="">
                    <label htmlFor="MN">Medicene Name:</label>
                    <input type="text" name="MN" id="MN" />
                    <br />
                    <label htmlFor="QP">Quantity:</label>
                    <input type="number" name="QP" id="QP" placeholder="Quantity" />
                    <br />
                   
                </form>
                 <button onClick={()=>{setAdress(false)}}>Continue</button>
                </div>
                <div className="chat-medicinepic">
                    <img src={chatPicmedicine} alt="" />
                </div>
            </div>
            </div>

            </>
        )
}

export default OrderMedicine;