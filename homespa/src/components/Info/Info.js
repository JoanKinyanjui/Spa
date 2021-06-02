import React from 'react';
import '../Info/Info.css';
function Info() {
  return (
    <>
      <div className='Information mb-5'>
        <h3 className='How ml-3'>How It Works:</h3>
        <div className='How-lists row'>
          <li className='How-lists-items col-sm-12 col-md-4'>
            <div className='Numbers'>1</div>
            <p className='Numbers-state text-muted text-center'>
              Choose Your Service Choose from our range of expert hair,beauty
              and wellness services.
            </p>
          </li>
          <li className='How-lists-items col-sm-12 col-md-4'>
            <div className='Numbers'>2</div>
            <p className='text-muted text-center'>
              Pick A Day And Time Appointments available on-demand 7 days a
              week,(7a.m-6p.m){' '}
            </p>
          </li>
          <li className='How-lists-items col-sm-12 col-md-4'>
            <div className='Numbers'>3</div>
            <p className='text-muted text-center'>
              Make A deposit(50%) Which is refundable incase the service is
              cancelled 12hrs before the service Day
            </p>
          </li>
        </div>

        <ul className='Socials'>
          <li href='#' className='Social-accounts'>
            <i className='fab fa-facebook'></i>
          </li>
          <li href='#' className='Social-accounts'>
            <i className='fab fa-instagram'></i>
          </li>
          <li href='#' className='Social-accounts'>
            <i className='fab fa-twitter-square'></i>
          </li>
        </ul>

        <ul className='Socials'>
          <li href='#' className='Social-accounts'>
            1,000
            <br />
            CUSTOMER REVIEWS
          </li>
          <li href='#' className='Social-accounts'>
            2,500
            <br />
            SERVICES COMPLETED
          </li>
          <li href='#' className='Social-accounts'>
            4.8
            <br />
            AVERAGE RATING
          </li>
        </ul>
      </div>
    </>
  );
}

export default Info;
