import React, { useEffect, useState } from 'react';
import './ControlAllBooking.css'
import SingleBooking from './SingleBooking/SingleBooking';
const ControlAllBooking = () => {
     const [allBooking, setAllBooking] = useState([])
     useEffect(() => {
          fetch('http://localhost:5000/all-booking')
               .then(res => res.json())
          .then(result=> setAllBooking(result))
     }, [])
     return (
          <main id="all-booking" className="my-5">
               <div className="container">
                    <h1>Controll All Booking</h1>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                         {
                              allBooking.slice(0).reverse().map(booking => <SingleBooking key={booking._id} booking={booking}></SingleBooking>)
                         }
                    </div>
              </div>
          </main>
     );
};

export default ControlAllBooking;