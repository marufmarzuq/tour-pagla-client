import React from 'react';
import './Footer.css'
import logo from '../../../Images/logo.png'
import paymentImg from '../../../Images/creditcard-logo.png'

const Footer = () => {
     return (
          <footer>
               <div className="container">
                    <div className="footer-body">
                         <div className="row row-cols-1 row-cols-md-4 g-4 py-5">
                              <div className="col">
                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, excepturi. Nostrum et quaerat deserunt, temporibus sequi delectus quibusdam veritatis quam.</p>
                                   <img src={ logo } className="w-100" alt="" />
                              </div>
                              <div className="col">
                                   <h4 className="text-white">Contact Us</h4>
                                   <ul>
                                        <li>+01852-1265122 <br />
                                             +01852-1265122</li>
                                        <li>info@example.com <br />
                                             support@example.com</li>
                                        <li>2752 Willison Street <br />
                                             Eagan, United State</li>
                                   </ul>
                              </div>
                              <div className="col">
                                   <h4 className="text-white">Contact Us</h4>
                                   <ul>
                                        <li>Contact Us</li>
                                        <li>About Us</li>
                                        <li>Destinations</li>
                                        <li>Our Blogs</li>
                                        <li>Package</li>
                                   </ul>
                              </div>
                              <div className="col">
                                   <h4 className="text-white">Pay Safely</h4>
                                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, quasi.</p>
                                   <img src={ paymentImg } alt="" />
                              </div>
                         </div>
                    </div>
                    <div className="footer-bottom">
                         <p className="m-0">&copy; Copyright 2021 | Maruf Marzuq all rights reserved</p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;