import React from 'react';
import whyUs1 from '../../../Images/tour-guide.png'
import whyUs2 from '../../../Images/trust.png'
import whyUs3 from '../../../Images/experience.png'
import whyUs4 from '../../../Images/traveller.png'

const WhyUs = () => {
     return (
          <div>
               <section id="why-us">
                    <div className="container bg-silver text-center text-white my-5">
                         <div className="row row-cols-1 row-cols-md-4 g-4 ">
                              <div className="col">
                                   <div className="card h-100 bg-mycolor">
                                        <img src={ whyUs1 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">2000+ Our worldwide guide</h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card h-100 bg-mycolor">
                                        <img src={ whyUs2 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">100% trusted travel agency</h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card h-100 bg-mycolor">
                                        <img src={ whyUs3 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">10+ year of travel experience</h5>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card h-100 bg-mycolor">
                                        <img src={ whyUs4 } className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                             <h5 className="card-title">90% of our traveller happy</h5>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default WhyUs;