import React from "react";

const InfoCard = ({ img, title, bgClass}) => {
  return (
    <div class={`card lg:card-side  shadow-xl text-white  ${bgClass}`}>
      <figure  className="pl-5">
        <img  src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <p class="card-title">{title}</p>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
