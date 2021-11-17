import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import BG1 from '../images/WomenPortalBg1.png'
import BG2 from '../images/WomenPortalBg2.png'
import BG3 from '../images/WomenPortalBg3.png'

const WomentPortal = () =>{
    return(
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BG1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BG2}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BG3}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </>
    )
}

export default WomentPortal;