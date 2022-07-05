import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ teatMent, date, setTeatMent ,refetch}) => {
  const formattedDate = format(date, 'PP')
  const { name, slots, _id } = teatMent;
  const [user] = useAuthState(auth);

  const handleSubmit = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const data = {
      treatmentId: _id,
      treatment: name, 
      slot,
      date: formattedDate,
      patientName: user.displayName,
      patient: user.email
    }
  // console.log('booking', booking);
   fetch('http://localhost:5000/booking', {
    method: 'POST', 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data)
   })
   .then(res => res.json())
   .then(result => {
    console.log(result);
     if(result.success){
       toast(`Appointment book--->  ${formattedDate} on ${slot} `)
     } else{
      toast.error(`all ready have appointment book ${result.user.date} on ${result.user.slot}`)
     }
     refetch()
    setTeatMent(null)
   })

  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-success  text-2xl text-center">
            {name}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 justify-items-center my-5"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              disabled
              name="name"
              type="text"
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              disabled
              name="email"
              type="email"
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-success  w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
