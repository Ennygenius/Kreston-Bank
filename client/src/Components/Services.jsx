import React from "react";
import Heading from "./Heading";
import Aimg from "../assets/about-us.jpg";
import { Link } from "react-router-dom";
import Card from "./Card";
import v2 from "../assets/Vector.png";

const Services = () => {
  return (
    <div className=" my-12">
      <div className=""></div>
      <Heading
        name={
          <div className="">
            Our <span className="text-btn">Services</span>
          </div>
        }
      />
      <div className="my-10">
        <p>
          Lets know moreel necessitatibus dolor asperiores illum possimus sint
          voluptates incidunt molestias nostrum laudantium. Maiores porro cumque
          quaerat.
        </p>
      </div>
      <div className="flex md:flex-row flex-wrap gap-2 flex-col items-center justify-between">
        {/* <div className="grid grid-cols-3"> */}
        <Card
          //   img={<img src="" alt="props" />}
          name={"Money Transfer"}
          body={"Paragraph of text beneath the heading to explain the heading."}
        />

        <Card
          name={"Multi Currency"}
          body={"Paragraph of text beneath the heading to explain the heading."}
        />

        <Card
          name={"Exchange Currencys"}
          body={"Paragraph of text beneath the heading to explain the heading."}
        />

        <Card
          name={"Fixed Deposit"}
          body={"Paragraph of text beneath the heading to explain the heading."}
        />

        <Card
          name={"Apply Loan"}
          body={"Paragraph of text beneath the heading to explain the heading."}
        />

        <Card
          name={"Payment Request"}
          body={"Paragraph of text beneath the heading to explain the heading."}
        />
      </div>
    </div>
  );
};

export default Services;
