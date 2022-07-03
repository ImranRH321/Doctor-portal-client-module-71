import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import ServiceBook from "./ServiceBook";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [teatMent, setTeatMent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-success font-bold text-xl">
        Your have selected: {format(date, "PP")}.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(service => (
          <ServiceBook
            id={service._id}
            service={service}
            setTeatMent={setTeatMent}
          ></ServiceBook>
        ))}
      </div>
      {teatMent && (
        <BookingModal
          date={date}
          teatMent={teatMent}
          setTeatMent={setTeatMent}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
