import React from "react";

const ServicesCart = ({ service }) => {
  return (
    <div>
      <div class="card lg:max-w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={service.img} alt="Shoes" class="rounded-xl h-17" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{service.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
