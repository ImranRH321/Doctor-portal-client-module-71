import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        title="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        title=" Our Location"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        title="Contact us "
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
