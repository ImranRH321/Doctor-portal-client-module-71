import React from "react";

const InfoCard = ({ img, title, bgclassName }) => {
  return (
    <div className={`card lg:card-side  shadow-xl text-white  ${bgclassName}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <p className="card-title text-white ">{title}</p>
        <p className="text-white">
          Click the button to listen on Spotiwhy app.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
