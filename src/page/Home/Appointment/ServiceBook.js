import React from "react";

const ServiceBook = ({ service, setTeatMent }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-success font-bold text-xl">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-error">Try Another date </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "spaces Not"} Available
        </p>
        <div className="card-cations text-center">
          <label
            disabled={slots.length === 0}
            className="btn bg-success text-white"
            onClick={() => setTeatMent(service)}
            htmlFor="booking-modal"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default ServiceBook;
