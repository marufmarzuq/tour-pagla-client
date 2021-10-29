import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner-1.png'
import banner2 from '../../../Images/banner-2.png'
import banner3 from '../../../Images/banner-3.png'

const Cover = () => {
     return (
          <section>
               <Carousel fade>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src={banner1}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <div className="container">
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </div>
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
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};

export default Cover;