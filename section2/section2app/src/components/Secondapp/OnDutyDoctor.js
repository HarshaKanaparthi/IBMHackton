import React from "react";
import './OnDutyDoctor.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useHistory } from "react-router";

const OnDutyDoctor = () => {
     const history = useHistory()
        return(
            <>
            <p id="back" onClick={()=>{history.push('/DoctorPortalLogedIn')}}>Back</p>
            <br /><br />
            <h1>On Duty Doctors</h1>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="On-Duty Doctors List">
                     <div className="totalList-Doc">
                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3><b>Pavan</b></h3>
                            <p>Experience:<b>10 years</b></p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                    <div className="cardtag">
                    <div className="con-onduty">
                        <div className="docpic-2">

                        </div>
                        <div className="docmatter-2">
                            <h3>Name:Pavan</h3>
                            <p>Experience:10 years</p>
                        </div>
                        
                    </div>
                    <p className="tp">Assigned to : Harsha <br />
                        Cause : Heart attack
                    </p>
                    </div>

                </div>
                </Tab>
            <Tab eventKey="profile" title="Messages">
                   <h1>Messesnger</h1>
                   <hr />
                   <div className="message_locate">
                       <h1>You have no messages.</h1>
                   </div>
                 </Tab>
             </Tabs>
               


            </>
        )
}

export default OnDutyDoctor;