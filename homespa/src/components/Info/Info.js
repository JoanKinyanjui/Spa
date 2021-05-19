import React from 'react';
import '../Info/Info.css';
function Info(){
    return(
        <>
<div className='Information'>
                <h3 className='How'>How It Works:</h3>
                <ul className='How-lists'>
                     <li className='How-lists-items'>
                         <div className='Numbers'>
                             1
                         </div>
                         <h6 className='Numbers-state'>Choose Your Service
                         Choose from our range of expert hair,beauty and wellness services.</h6>

                      </li>
                      <li  className='How-lists-items'>
                        <div className='Numbers'>
                             2
                         </div>
                          <h6>Pick A Day And Time

                              Appointments available on-demand 7 days a week,(7a.m-6p.m) </h6>
                       </li>
                       <li className='How-lists-items'>
                              <div className='Numbers'>
                             3
                         </div>
                           <h6>Make A deposit(50%)
                           Which is refundable incase the service is cancelled 12hrs before the service Day
                           </h6>
                        </li>
                </ul>

    <ul className='Socials'>
        <li href='#' className='Social-accounts'>
            <i className="fab fa-facebook"></i>
        </li>
        <li href='#' className='Social-accounts'>
            <i className="fab fa-instagram"></i>
        </li>
        <li href='#'className='Social-accounts'>
            <i className="fab fa-twitter-square"></i>
        </li>
    </ul>

<ul className='Socials'>
        <li href='#' className='Social-accounts'>
            1,000<br />
CUSTOMER REVIEWS
        </li>
        <li href='#' className='Social-accounts'>
2,500<br />
SERVICES COMPLETED
        </li>
        <li href='#'className='Social-accounts'>
4.8<br />
AVERAGE RATING
        </li>
    </ul>

</div>

            </>
    )

}

export default Info ;
