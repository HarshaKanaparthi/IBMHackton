import React from 'react';
import './PatientProgress.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import HospitalMoniter from '../../images/HospitalMoniter.mp4'
import { useHistory } from 'react-router';

const PatientProgress = () => {
    const history = useHistory()
    return(
        <>
        <p id="back" onClick={()=>{history.push('/List')}}>Back</p>
        <br /><br />
       <h1>Ram charan</h1>
       <h2>Cause: Heart Attack</h2>
        <div className="infoInside">
            <div className="Doc1-age">
                <h3>Age:35</h3>
            </div>
            <div className="Doc-gender">
             <h3>Gender: Male</h3>
            </div>
            
        </div>

        <hr />
        <div className="type-List">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Present Details">
                         <video width="100%" height="500" loop autoPlay muted>
                            <source src={HospitalMoniter}type="video/mp4"/>
                        </video>
                        <h1>Problem</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam iste, suscipit dolorum voluptatum commodi nemo eum eius reprehenderit nulla. Vero dolore doloribus beatae magnam cupiditate voluptate deserunt corporis minus hic.
                        Explicabo, assumenda quae consectetur blanditiis sunt dicta dolorum eum, sit beatae temporibus culpa, non totam minima provident corrupti. Itaque iusto repellat minus eum eos sunt tempora ipsa officia, autem blanditiis?
                        Adipisci tempora enim magnam, illum est id dolor quidem corrupti et quas asperiores dolores ad consequatur? Fuga laborum asperiores unde, suscipit quae adipisci itaque, eos pariatur enim ratione alias aliquid.
                        Nesciunt quaerat iure nostrum ipsam neque laudantium nemo autem magnam, temporibus blanditiis, quidem repellendus non quam ipsa dolorem error nulla asperiores nobis? Blanditiis, itaque rem? Tenetur maiores dicta similique earum?</p>
                        <h1>Medication</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi veniam autem in praesentium, aliquam possimus incidunt dolorem odit assumenda vero impedit quaerat ducimus, eius mollitia iure recusandae repellendus quis excepturi?
                            Natus hic voluptatum delectus iusto sint eligendi necessitatibus unde dolorem laudantium consequuntur quae doloribus possimus libero magni aliquam incidunt reiciendis minus expedita debitis blanditiis quisquam nesciunt amet, corrupti animi! Inventore!
                        </p>
                        <h2 className="h2-od">Operation date:</h2>
                        <div className="h3-od">
                        <h3>15th November 2021</h3>
                        </div>
                </Tab>
               <Tab eventKey="profile" title="Profile">
                    <h1>Past Operations:</h1>
                      <div className="h3-od">
                        <h3>None</h3>
                        </div>
                </Tab>
            </Tabs>
        </div>
       </>
    )
}

export default PatientProgress;