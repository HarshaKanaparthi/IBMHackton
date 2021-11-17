import React from 'react';
import {useHistory} from 'react-router-dom'
import './SignUpNew.css'
import registerlogo from '../images/new_newest_logo.png'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const SignUpNew = () =>{
    const history= useHistory();
    return(
        <>
          <div className="containersignIn">
              <div className="MedicologoPlustext">
                                 <img src={registerlogo} alt="" id="LogoMedico" />
              </div>
             <div className="boxbackground">
                 <h1 id="Register">Register</h1>
                 <form >
                     <div className="completename">
                         <div className="fn">
                     <label htmlFor="">First Name</label> <br /> 
                     <input type="text" name="" id="" />
                  </div>
                  <div className="ln">
                     <label htmlFor="">Last Name</label>
                     <input type="text" name="" id="" />
                     </div>
                    </div>
                     <div className="completename">
                         <div className="fn">
                     <label htmlFor="">Phone Number</label> <br /> 
                     <input type="tel" name="" id="" />
                  </div>
                  <div className="ln">
                     <label htmlFor="">Email</label>
                     <input type="email" name="" id="" />
                     </div>
                    </div>
                    <div className="completename">
                         <div className="fn">
                     <label htmlFor="">Password</label> <br /> 
                     <input type="password" name="" id="" />
                  </div>
                  <div className="ln">
                     <label htmlFor="">Conform Password</label>
                     <input type="password" name="" id="" />
                     </div>
                    </div>
                    
                        <div className="check-box">
                <Form.Check type="checkbox" label="" />
                <Form.Text className="text-muted" id="conditions">
                       I agree to <span id="condition-text">Terms and Conditions</span> and to the <span id="condition-text">privacy policy</span>
                </Form.Text>
                        </div>
                         <Button variant="primary" onClick={() => {
                  history.push('/Login') }}>Register</Button>{' '}
   
                 </form>
             </div>
          </div>
        </>
    )
}

export default SignUpNew;