import React,{useState} from "react";
import './Signup.css'
import SignupPic from '../images/SignUp.png'
import Form from 'react-bootstrap/Form';
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const SignUp = ({setSignup})=>{
  
  
  
//   const submitHandler = ()=>{
//     const addUser = ({username, password}) => {
//   const newArr = [...userList, {name: username, pwd: password}]
//   setUserList(newArr)
// // }
//   }
  const history= useHistory();
    return (
      <>
      
        <div className="signupMedica">
            <h1 id="sign-up-title">Login In</h1>
            <div className="container-signup">
                
                <div className="signupLogo">
                    <img src={SignupPic} alt="Pic"  />
                </div>
                <div className="form">
                {/* <Form onSubmit={submitHandler}> */}
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="hv-title">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="hv-title">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

  </Form.Group>
          <Button variant="primary" onClick={() => {
    alert("Succssfully Loged In");
  setSignup(true)

  history.push('/features')
}}>Login</Button>{' '}

  
</Form>

</div>
            </div>
        </div>
        </>
    )
}

export default SignUp