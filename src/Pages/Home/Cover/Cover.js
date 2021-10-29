import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner-1.png'
import banner2 from '../../../Images/banner-2.png'
import banner3 from '../../../Images/banner-3.png'

const Cover = () => {
     return (
          <section id="cover">
               <Carousel fade indicators={false}>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src={banner1}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                         <h3 className="display-2 fw-bold">Amazing Tour In Hampshire</h3>
                              <h3>7 days / 8 night tour</h3>
                              <button className="btn btn-primary">Book Now</button>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src={banner2}
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold">Amazing Tour In madagascar</h3>
                              <h3>7 days / 8 night tour</h3>
                              <button className="btn btn-primary">Book Now</button>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src={banner3}
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold">Amazing Tour In Indonesia </h3>
                              <h3>7 days / 8 night tour</h3>
                              <button className="btn btn-primary">Book Now</button>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};

export default Cover;