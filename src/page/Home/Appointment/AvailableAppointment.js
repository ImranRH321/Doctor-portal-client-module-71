import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Sheared/Loading";
import BookingModal from "./BookingModal";
import ServiceBook from "./ServiceBook";

const AvailableAppointment = ({ date }) => {
  const [teatMent, setTeatMent] = useState(null);

  const formattedDate = format(date, "PP");
  /* ================================================== */
  const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center text-success font-bold text-xl">
        Your have selected: {format(date, "PP")}.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map(service => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
