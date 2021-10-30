import React from 'react';
import './AddPlan.css'
import { useForm } from 'react-hook-form';

const AddBooking = () => {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
     console.log(errors);
     return (
          <main className="my-5">
               <div className="container">
                    <div className="add-tour-form-container">
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <input type="text" placeholder="tour_name" {...register("tour_name", {required: true, maxLength: 80})} />
                              <input type="number" placeholder="price" {...register("price", {required: true, min: 100, maxLength: 100000})} />
                              <select {...register("duration", { required: true })}>
                              <option value="duration">duration</option>
                              <option value="2 Days / 3 Nights">2 Days / 3 Nights</option>
                              <option value="3 Days / 4 Nights">3 Days / 4 Nights</option>
                              <option value="4 Days / 5 Nights">4 Days / 5 Nights</option>
                              <option value="5 Days / 6 Nights">5 Days / 6 Nights</option>
                              <option value="6 Days / 7 Nights">6 Days / 7 Nights</option>
                              </select>
                              <select {...register("rating", { required: true })}>
                              <option value="Rating">Rating</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              </select>
                              <input type="url" placeholder="imgURL" {...register("imgURL", {required: true})} />
                              <input type="submit" />
                         </form>
                    </div>
               </div>
          </main>
     );
};

export default AddBooking;