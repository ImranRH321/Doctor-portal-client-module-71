import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
      </div>
      <div className="flex justify-center items-center gap-7 py-4">
        <div>
          <img className="w-[75px]" src={review.img} alt="" />
        </div>
        <div>
          <h2>{review.name}</h2>
          <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
