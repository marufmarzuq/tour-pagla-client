import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css'
import MySingleBooking from './MySignleBooking/MySingleBooking';
const MyBooking = () => {
     const [myBooking, setMyBooking] = useState([])
     const [control, setControl] = useState(false);
     const { user } = useAuth();
     useEffect(() => {
          fetch(`http://localhost:5000/all-booking/${user.email}`)
               .then(res => res.json())
          .then(result=> setMyBooking(result))
     }, [control])
     return (
          <main id="all-booking" className="my-5">
               <div className="container">
                    <h1>My Booking</h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                         {
                              myBooking.slice(0).reverse().map(booking => <MySingleBooking
                                   key={booking._id}
                                   booking={booking}
                                   setControl={setControl}
                                   control={control}
                              ></MySingleBooking>)
                         }
                    </div>
              </div>
          </main>
     );
};

export default MyBooking;