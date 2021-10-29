import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
     const [tour, setTour] = useState({})
     const {id} = useParams('id');
     useEffect(() => {
          fetch(`http://localhost:5000/tours/${id}`)
               .then(res => res.json())
          .then(result=> setTour(result))
     }, [])
     const { tour_name, imgURL, price, rating, duration } = tour;
     console.log(id)
     return (
          <main id="booking" className="py-5">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8">
                              <div className="tour-cover-img">
                                   <img className="w-100" src={imgURL} alt="" />
                              </div>
                              <div className="d-flex justify-content-between align-items-center pt-3">
                                   <span className="fw-bolder fs-2">{tour_name}</span>
                                   <span className="fw-bolder fs-2">${price}</span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                   <span><i className="fas fa-calendar-alt"></i> { duration }</span>
                                   <Rating
                                        className="rating"
                                        initialRating={rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                   />
                              </div>
                         </div>
                         <div className="col-md-4">
                              <h1>Here order from will added</h1>
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default Booking;