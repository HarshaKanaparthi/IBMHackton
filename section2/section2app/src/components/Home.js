import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../images/pic1Main.png'
import pic2 from '../images/pic2Main.png'
import pic3 from '../images/pic3Main.png'
import logoMedico from '../images/new_newest_logo.png'
import communications from '../images/communication.png'
import chat from '../images/3d.png'
import bussiness from '../images/business.png'
import './Home.css'
import gifmedicco from '../images/videoGif.mp4'
import {useHistory} from 'react-router-dom'
const Home = ()=>{
  const history = useHistory();
    return (
        <>
        <div className="getstarted-btn">
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
      height="600vh"
    />
    
    <Carousel.Caption >
        <div className="logsign-btn">
        <div className="gs" onClick={()=>{history.push('/Login')}}>
        <button className="main-top-buttons" id="getS">Get Started</button>
        </div>
        <div className="ca" onClick={()=>{history.push('/signup')}}>
        <button className="main-top-buttons">Create account</button>
        </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
      height="600vh"
    />

    <Carousel.Caption>
      <div className="logsign-btn">
        <div className="gs" onClick={()=>{history.push('/Login')}}>
        <button className="main-top-buttons" id="getS">Get Started</button>
        </div>
        <div className="ca" onClick={()=>{history.push('/signup')}}>
        <button className="main-top-buttons" id="createA">Create account</button>
        </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
      height="600vh"
    />

    <Carousel.Caption>
     <div className="logsign-btn">
        <div className="gs" onClick={()=>{history.push('/Login')}}>
        <button className="main-top-buttons" id="getS">Get Started</button>
        </div>
        <div className="ca" onClick={()=>{history.push('/signup')}}>
        <button className="main-top-buttons">Create account</button>
        </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 </div>
 <div className="div2-secondrow">
    <div className="breif-app">
        <div className="compng">
            <img src={communications} alt="" id="png-icon" />
        </div>
        <div className="content-matter">
            <img src={logoMedico} alt="" />
            <h1>Medico is future</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque commodi <div> earum corrupti quae cum! Rem numquam quis odio assumenda molestias eum blanditiis deserunt? </div>Veniam labore optio excepturi quo sequi.</p>
        </div>
        <div className="chatpng">
            <img src={chat} alt="" id="png-icon" />
        </div>
    </div>
 </div>
 <hr />
 <div className="div3-thirdrow">
     <div className="cen-3div">
        <h1>MEDICO gives you</h1>
     </div>
     <div className="contentBrief-matter">
         <div className="bus-pic">
             <img src={bussiness} alt="" />
         </div>
         <div className="bus-matter">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, saepe. Asperiores mollitia nesciunt unde cupiditate sapiente eveniet similique ipsa, non suscipit odio laudantium id repellendus, beatae quas tempore quis nulla?
             Cupiditate odit provident, voluptas exercitationem sit sint officiis, quasi architecto voluptates, soluta corrupti rerum cumque quia repudiandae veritatis adipisci. Tenetur fugiat eum veritatis modi! Dolore aperiam vitae molestias explicabo minima.
             Repudiandae voluptas quas quod mollitia, autem ipsam consequuntur nisi. Accusantium magni iste cupiditate neque, tenetur ab odio dolore quidem fugiat doloribus adipisci doloremque dolorum voluptatibus perferendis voluptas. Accusantium, cum autem.
             Sunt error voluptatibus id, libero cumque blanditiis eaque, nostrum consequatur iusto, facilis saepe velit quaerat nobis pariatur provident ex. Esse qui earum perspiciatis odio ea accusamus libero. Voluptas, quibusdam facere.
             Sequi voluptates, nihil aliquam provident earum voluptatum eligendi nobis facilis distinctio, optio, officia repellendus! Natus maiores, nostrum molestiae amet rerum repellendus delectus sed deserunt ad consequuntur iure nisi laudantium dolor!</p>
         </div>
     </div>
 </div>
 <hr />
 <div className="div4-fourthrow">
            <h1>What we provide you</h1>
     <div className="features-medico">

     
     <div className="text-what-weGive">
        <div className="bulletpoint-matter">
             <ul>
                 <li>Medico is a platform which provides you with all the functionality and operations easily.</li>
                 <li>Medico is a platform which provides you with all the functionality and operations easily.</li>
                 <li>Medico is a platform which provides you with all the functionality and operations easily.</li>
             </ul>
        </div>
  
     <div className="gif-video-TWWG">
          </div>
                <video width="50%" height="500" loop autoPlay muted>
      <source src={gifmedicco}type="video/mp4"/>
</video>
   </div>
     </div>
     </div>
      <div className="footer-main">
          <h1>Medico</h1>
      </div>
 </>
    )
}

export default Home