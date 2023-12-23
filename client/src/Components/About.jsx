import React from "react";
import Heading from "./Heading";
import Aimg from "../assets/about-us.jpg";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <div className="my-10"></div>
      <div className="flex md:flex-row items-center flex-col-reverse justify-between">
        <div className="">
          <img src={Aimg} alt="" />
        </div>
        <div className="flex-1 text-center">
          <Heading
            name={
              <div className="">
                About <span className="text-btn">Us</span>
              </div>
            }
          />
          <p className="my-10 md:tracking-wider md:w-[80%] w-full m-auto">
            {props.name}
          </p>{" "}
          <Link to="/about">
            <button className="ml-3 bg-btn text-background px-5 py-2 rounded-full mb-5 leading-[30px] ">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
