import React from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div className="card  lg:max-w-96 bg-base-100 shadow-xl text-white">
        <figure className="px-10 pt-10">
          <img src={service.img} alt="Shoes" className="rounded-xl h-17" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{service.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
