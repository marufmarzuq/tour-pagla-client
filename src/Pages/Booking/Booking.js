import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
     const [tour, setTour] = useState({})
     const { id } = useParams('id');
     const { user } = useAuth();
     useEffect(() => {
          fetch(`http://localhost:5000/tours/${id}`)
               .then(res => res.json())
          .then(result=> setTour(result))
     }, [])
     const { tour_name, imgURL, price, rating, duration } = tour;
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = data => {
          data.tour_name = tour_name;
          data.tourImg = imgURL;
          data.price = price;
          
          fetch('http://localhost:5000/all-booking', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(result => {
                    if(result.insertedId) {
                         alert('Booking submit successfully')
                    }
                    reset();
               });
     };
     return (
          <main id="booking" className="py-5">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mb-5">
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
                              <h2 className="mb-4">Book this package</h2>
                              <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                                   <input type="text" defaultValue={user.displayName} placeholder="name" {...register("name", {required: true, maxLength: 100})} />
                                   <input type="email" defaultValue={user.email} placeholder="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                                   <input type="tel" placeholder="mobile-number" {...register("mobile-number", {required: true, maxLength: 12})} />
                                   <select className="ticket-type" {...register("ticket-type", { required: true })}>
                                   <option value="">Ticket Type</option>
                                   <option value="Travel with bus">Travel with bus</option>
                                   <option value="Travel with plane">Travel with plane</option>
                                   </select>
                                   <select className="select-adult" name="Adult" {...register("adult", { required: true })}>
                                   <option value="">Adult</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   </select>
                                   <select className="select-child" name="Child" {...register}>
                                   <option value="">Child</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   </select>
                                   <input type="date" placeholder="date" {...register("date", {required: true})} />
                                   <textarea className="booking-message" placeholder="Message..." {...register("message", {})} />
                                   <input className="booking-submit" type="submit" />
                              </form>
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default Booking;