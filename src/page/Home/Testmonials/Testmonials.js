import React from "react";
import quote from "../../../assets/icons/quote.svg";
import preple1 from "../../../assets/images/people1.png";
import preple2 from "../../../assets/images/people2.png";
import preple3 from "../../../assets/images/people3.png";
import Review from "../Revivew/Review";

const Testmonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      reviews: "",
      location: "California",
      img: preple1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      reviews: "",
      location: "California",
      img: preple2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      reviews: "",
      location: "California",
      img: preple3,
    },
  ];
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary font-bold text-uppercase">Testimonial</p>
          <h3>What Our Patients Says</h3>
        </div>
        <div>
          <img className="lg:w-[180px] w-[100px]" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-rows-1 lg:grid-cols-3 gap-5 mt-5">
        {reviews.map(review => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testmonials;
