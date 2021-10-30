import React from 'react';

const SingleBooking = ({ booking }) => {
     console.log(booking)
     const { date, name, price, tourImg, tour_name } = booking;
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
                              <button className="btn btn-outline-dark w-50">Approve</button>          
                              <button className="btn btn-danger w-50">Delete</button>          
                         </div>
                    </div>
               </div>
               </div>
               </div>
          </div>
     );
};

export default SingleBooking;