import React from "react";
import v2 from "../assets/Vector.png";

const Card = (props) => {
  return (
    <div className="card px-5 py-3 w-full pt-10 md:w-[25%] text-center">
      {!props.img ? <img src={v2} alt="" className="m-auto" /> : props.img}

      <div className="">
        <h2 className="py-3">{props.name}</h2>
        <p className="text-sm">{props.body}</p>
      </div>
    </div>
  );
};

export default Card;
