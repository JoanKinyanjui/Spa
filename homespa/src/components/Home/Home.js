import React from 'react';
import '../Home/Home.css';
import {Button} from 'react-bootstrap';
import Logo from  '../Navbar/best.png';


function Home(){
    return(
        <>
        <div className='Home'>
            <p className='box'>
            <h2 className='heading5'>
                 Get Expert hair,beauty and massage
            </h2>
            <h2 className='heading2'>
               FROM HOME
            </h2>
                <h2 className='heading5'>And Purchase all Beauty Products at Affordable Prices</h2>

                <img  className='Logo1' src={Logo}/>
                <br />
                 <Button>Book Now</Button>
            </p>
        </div>

</>
    )
}
export default Home;