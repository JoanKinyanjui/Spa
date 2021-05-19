import React from 'react';
import '../Footer/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron} from 'react-bootstrap';
import Logo1 from '../Navbar/images/best1.png';
import {Button} from 'react-bootstrap';
function Footer(){
    return(
        <div className='footer'>
           <Jumbotron fluid>
               <ul className='list'>
                   <li className='item'>
                         <h6 className='head'>About Us</h6>
                       <p>We offer expert beauty & makeup services
                           in Nairobi,Thika and surrounding areas . Whatever you need,
                            we’ll create your stress-free experience.</p>
                    </li>
                   <li className='item'>
                         <h6 className='head'>Visit Us</h6>
                       <p>Visit our Beauty Bars all Located around Thika & Nairobi.
                           Use the webapp to book your appointment prior</p>
                       <Button>Book Now</Button>
                    </li>
                   <li className='item'>
                          <h6 className='head'>Join Us</h6>
                       <p>Want to be a part of the amazing
                          Team that delivers high
                          quality service.Do you have the skill?
                           <a href='#' className='link'>Join Us</a>
                       </p>
                   </li>
               <li>
               < img className='img' src={Logo1}/>
               <br/>
               <p className='motto'>We Come To You<br /></p>
               <p>@Copyright 2021
               </p>
                   </li>
    </ul>
</Jumbotron>
        </div>
    );
}


export default Footer;