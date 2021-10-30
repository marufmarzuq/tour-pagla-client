import React from 'react';

const SingleBooking = ({ booking, setControl, control }) => {
     const { date, name, price, tourImg, tour_name, _id, status } = booking;
     const handleUpdateBooking = id => {
          booking.status = true;
          fetch(`http://localhost:5000/all-booking/${id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body:JSON.stringify(booking)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         setControl(!control);
                       } else {
                         setControl(false);
                       }
               })
     }
     const handleDeleteBooking = (id) => {
          fetch(`http://localhost:5000/all-booking/${id}`, {
               method: 'DELETE'
          })
               .then(res => res.json())
               .then(data => {
                    alert("Are you sure, you want to cancel?")
                    if (data.deletedCount) {
                         setControl(!control);
                       } else {
                         setControl(false);
                       }
               })
     }
     return (
          <div className="col">
               <div class="card mb-3" style={{"maxWidth": "540"}}>
               <div class="row g-0">
               <div class="col-md-5">
                    <img src={tourImg} class="img-fluid h-100 rounded-start" alt="..." style={{"objectFit": "cover"}}/>
               </div>
               <div class="col-md-7">
                    <div class="card-body">
                         <h5 class="card-title">{ tour_name}</h5>
                         <div class="card-text">Cost: ${ price }</div>
                         <div class="card-text">Booked by { name }</div>
                         <span class="card-text"><small class="text-muted">Booked time: {date}</small></span>
                                   <div>
                                        {
                                             status? <div className="w-50 d-inline-block">Approved</div>:<button
                                   className="btn btn-outline-dark w-50"
                                   onClick={() => handleUpdateBooking(_id)}
                              >Approve</button>
                                        }
                              <button
                                   onClick={() => handleDeleteBooking(_id)}
                                   className="btn btn-danger w-50"
                              >Remove</button>
                         </div>
                    </div>
               </div>
               </div>
               </div>
          </div>
     );
};

export default SingleBooking;