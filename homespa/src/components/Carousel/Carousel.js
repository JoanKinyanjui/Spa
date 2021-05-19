import React from 'react';
import {Carousel} from 'react-bootstrap';
function CarouselContainer (){
    return(
        <Carousel>
  <Carousel.Item interval={2000} pause={false}>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0023/9648/7716/files/trip_cc3fb104-7492-4f9d-bfa6-1081bea84a03_large.jpg?v=1556174681"
      alt="HomeSpur"
    />
    <Carousel.Caption>
      <h3>Complete Make Up Kit</h3>
      <p>Get 10% Discount</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000} pause={false}>
    <img
      className="d-block w-100"
      src="https://d12prgon3aw7l1.cloudfront.net/8477744_img-20200502-203302_826x912.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Skin Care Products</h3>
      <p>Get 10% Discount</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000} pause={false}>
    <img
      className="d-block w-100"
      src="https://www.perfumebestbuy.com/media/2019/06/Designer-Perfumes-2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Designer Perfumes</h3>
      <p>Perfume:A cocktail of Memories And Emotion</p>
    </Carousel.Caption>
  </Carousel.Item>
            <Carousel.Item interval={2000} pause={false}>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzQ1mpwFdg63xHjR3_e-16dCBS8-cIfLkxA&usqp=CAU"
      alt="Home spur"
    />

    <Carousel.Caption>
      <h3>Nail Polish</h3>
      <p>Color Your Life</p>
    </Carousel.Caption>
  </Carousel.Item>
          <Carousel.Item interval={2000} pause={false}>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/236x/62/81/e5/6281e5e2e09a42547e8c11dc1cedccd8.jpg"
      alt="Home Spur"
    />
    <Carousel.Caption>
      <h3>Weaves and Wigs</h3>
      <p>Get 10% Discount</p>
    </Carousel.Caption>
          </Carousel.Item>
</Carousel>
    )
}





export default  CarouselContainer;
