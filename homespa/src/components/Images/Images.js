import React ,{useState} from 'react';
import '../Images/Images.css';
import Wedding2 from '../Images/images/makeup.jpg';
import Bridal from '../Images/images/Bridal1.jpg';
import Massage from '../Images/images/back12.jpg';



function Images(){

    return(
        <>
        <div className='Gallery'>
            <div className='Img'>
                <img className='Wedding2' src='https://i.pinimg.com/236x/8c/ba/30/8cba309d0202ca5a7c106bc0844a6946.jpg'/>
                <h6 className='Service'>Dreadlocs Installation and Styling</h6>
            </div>
            <div className='Img'>
            <img className='Wedding2' src={Wedding2}/>
                <h6 className='Service'>Make Up</h6>
            </div>
            <div className='Img'>
        <img className='Wedding2' src={Massage}/>
                <h6 className='Service'>Massage Therapy</h6>
            </div>
            <div className='Img'>
                <img className='Wedding2' src='https://i.pinimg.com/236x/a8/f1/19/a8f1195df039827af94a9efbc4b84f73.jpg'/>
                <h6 className='Service'>Braiding </h6>
            </div>
            <div className='Img'>
                <img className='Wedding2' src='https://i.pinimg.com/564x/63/88/5f/63885f1ffcdd9346ce68835538b9c089.jpg'/>
                <h6 className='Service'>Nail Art</h6>
            </div>
            <div className='Img'>
                                <img className='Wedding2' src={Bridal}/>
                 <h6 className='Service'>Bridal Makeup</h6>
            </div>
               <div className='Img'>
                <img className='Wedding2' src='https://i.pinimg.com/236x/fa/4e/2e/fa4e2ece1f56e34a1b76db1e848bc9ca.jpg'/>
                <h6 className='Service'>Hair Cuts</h6>
            </div>
            <div className='Img'>
                                <img className='Wedding2' src='https://i.pinimg.com/236x/09/ef/59/09ef591bc7274b41fceab1b91ca3be52.jpg'/>
                 <h6 className='Service'>Hina and Tatoo drawing</h6>
            </div>

            <div className='Img'>
                <img  className='Wedding2' src='https://i.pinimg.com/564x/69/90/f9/6990f912ed9421684d6f5698153d1213.jpg'/>
                <h6 className='Service'>Waxing</h6>
            </div>
        </div>
 <div className='Safety'>
     <h3 className='Safety'>Covid-19 Safety Procedures</h3>
     <h6 className='Safety1'>Your health and safety are our absolute priority at this time,
         so to protect you and your beauty professional we have introduced enhanced hygiene and safety
         protocols for all at home beauty services. You can now relax knowing that your Home Spur vetted and
         tested beauty professional will look after you in the safest way possible.<br />
          Our artists will wear a mask if asked or required.
         Clients, of course, cannot wear a mask when having their makeup services
         performed and may not be able to wear a mask for some hairstyles. <br />
         Once entering your homes,
         we will immediately escort you to wash your hands. After every service, our staff takes extra time to
         thoroughly sanitize the bridal trial rooms and all implements used during the service.
         <br /><br /><br />
         KEEP SAFE!!



</h6>
 </div>
        </>
    )
}
export  default Images;