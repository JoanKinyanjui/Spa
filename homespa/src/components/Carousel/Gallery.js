import React from 'react';
import '../Carousel/Carousel.css';
function SellBuy(){
    return(
        <>
            <div className='Thee'>
            <h2>
                    <a> <i className="fas fa-shopping-cart fa-lg"></i></a>Buy! BUY! BUY! and Save Upto 10%</h2>
        <div className='Products'>

            <div className='Buy'>
                <img className='Products-img'  src='https://d12prgon3aw7l1.cloudfront.net/8477744_img-20200502-203302_826x912.jpg'/>
                <h6 className='Products-name'>Skin care</h6>
            </div>
            <div className='Buy'>
                <img className='Products-img'  src='https://i.pinimg.com/564x/c8/cc/11/c8cc110bcc5750a358203df4649581d1.jpg'/>
                <h6 className='Products-name'>Wigs</h6>
            </div>
            <div className='Buy'>
                <img className='Products-img'  src='https://cdn.shopify.com/s/files/1/0023/9648/7716/files/trip_cc3fb104-7492-4f9d-bfa6-1081bea84a03_large.jpg?v=1556174681'/>
                <h6 className='Products-name'>Make Up Kits</h6>
            </div>
            <div className='Buy'>
                <img className='Products-img'  src='https://i.pinimg.com/236x/05/6b/a2/056ba208ea2dbe00f1734448daba6991.jpg'/>
                <h6 className='Products-name'>Body Oils</h6>
            </div>
            <div className='Buy'>
                <img className='Products-img'  src='https://i.pinimg.com/236x/0b/8a/da/0b8ada757145e0e85e7e36b96ff0c962.jpg'/>
                <h6 className='Products-name'>Nail Polish</h6>
            </div>
            <div className='Buy'>
                <img className='Products-img'  src='https://i.pinimg.com/236x/1f/60/0a/1f600a50bb0d99357587169a05e2249e.jpg'/>
                <h6 className='Products-name'>Perfumes</h6>
            </div>

        </div>

            </div>
        </>
    );
}
export default SellBuy;