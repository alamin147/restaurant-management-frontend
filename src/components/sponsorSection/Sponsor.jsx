import React from "react";
import "./sponsor.css";

const Sponsor = ({ sponsor }) => {
  return (
    <div className="col">
      <div className="">
        <img src={sponsor.img} className="imag card-img-top" alt="..." />
      </div>
    </div>
  );
};

export default Sponsor;
