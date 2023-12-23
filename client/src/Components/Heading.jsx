import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{props.name} </h2>
    </div>
  );
};

export default Heading;
