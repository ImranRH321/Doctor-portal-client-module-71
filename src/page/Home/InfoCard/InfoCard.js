import React from "react";

const InfoCard = ({ img, title, bgClass}) => {
  return (
    <div className={`card lg:card-side  shadow-xl text-white  ${bgClass}`}>
      <figure  className="pl-5">
        <img  src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
