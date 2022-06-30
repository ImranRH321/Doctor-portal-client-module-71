import React from "react";
import Service from "../Service/Service";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      description: "",
      img: cavity,
    },
    {
      _id: 2,
      title: "Cavity Filling",
      description: "",
      img: fluoride,
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="mt-32">
      <div className="text-center my-5">
        <h2 className="text-success font-bold	text-1xl">Our services </h2>
        <h2 className="text-5xl	bg-primary">Services We Provide </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
