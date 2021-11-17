import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoMedico from '../images/new_newest_logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import userLog from '../images/Userlogo.png'
import {useHistory} from 'react-router-dom'

const Header = ({signup , handleClose , handleShow, show}) => {
     const history = useHistory();
     const switchProfile=()=>{
       history.push('/Profile')
     }
  if(!signup){
        return(
                 <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img src={logoMedico} width="60" height="60" className="d-inline-block align-top" alt="React Bootstrap logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link eventKey={2}  href="/Signup"> SignUp  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
     </div>
        )
    }
     else{
         return(
             <div>
       <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Medico.</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                  <h2>Hello <span id="User-detail">User,</span></h2>
                  <div className="userProfile-1"><img src={userLog} width="200" height="200" className="userLogo" alt="React Bootstrap logo"/></div>
              <div className="button-optionsUser">

                    <h2 id="option1" onClick={switchProfile}>Profile</h2>
                    <h2 id="option1">Order</h2>
                    <h2 id="option1">Customer care</h2>
                    <h2 id="option1" >Log Out</h2>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Features"><h1>Medico</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
              <Nav>
            {/* <NavDropdown title="For Women" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Obstetrician</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Other issues</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Women portal</NavDropdown.Item>
            </NavDropdown> */}
              <Navbar.Brand onClick={handleShow}><img src={userLog} width="50" height="50" className="userLogo" alt="React Bootstrap logo"/></Navbar.Brand>
    
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   </div>
         )
     }  
}



const Navbar1 = ({signup,setSignup}) => {
  
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const setUserProfile = ()=>{
      setSignup(true);
    }
    return (
  <Header signup={signup} handleClose={handleClose} handleShow={handleShow} show={show} />
    )
        
}
export default Navbar1