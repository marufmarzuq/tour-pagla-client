import React from 'react';
import Rating from 'react-rating';

const Tour = ({ tour }) => {
     const { tour_name, rating, price, imgURL, duration } = tour;
     console.log(tour)
     return (
          <>
               <div className="col">
                    <div className="card h-100">
                         <img src={imgURL} className="card-img-top w-100" alt="..."/>
                         <div className="card-body">
                              <h5 className="card-title">{tour_name}</h5>
                              <div className="d-flex justify-content-between align-items-center">
                                   <span><i className="fas fa-calendar-alt"></i> {duration}</span>
                                   <span className="fw-bolder fs-5">${price}</span></div>
                              <div className="d-flex justify-content-between align-items-center mt-2">
                                   <button className="btn btn-primary"><i className="fas fa-location-arrow"></i> Book Now</button>
                                   <Rating
                                        className="rating"
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Tour;