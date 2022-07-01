import { format } from "date-fns";
import React from "react";

const BookingModal = ({teatMent, date, setTeatMent}) => {
    const {name, slots, _id} = teatMent;
  
    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value; 
        console.log(_id, name, slot);
        setTeatMent(null)
    }


  return (
    <div>
   
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-success  text-2xl text-center">
           {name}
          </h3>
           <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 justify-items-center my-5">
           <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
           <select name="slot" className="select select-bordered w-full max-w-xs">
             {slots.map(slot =>  <option>{slot}</option>)}
          </select>
           <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
           <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
           <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
           <input type="submit" value="submit" className="btn btn-success  w-full max-w-xs" />
           </form>
          <div className="modal-action">
            <label for="booking-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
