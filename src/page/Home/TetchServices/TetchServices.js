import React from "react";
import tetchment from '../../../assets/images/treatment.png' 

const TetchServices = () => {
  return (
    <div className="hero min-h-screen my-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={tetchment}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="p-10">
          <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default TetchServices;
