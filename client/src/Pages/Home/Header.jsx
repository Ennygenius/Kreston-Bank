import React from "react";
import sub from "../../assets/Subtract.png";
import g2 from "../../assets/g2.png";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className=" md:text-left text-center">
      {" "}
      <div className="flex md:justify-around justify-center md:flex-row flex-col items-center">
        <div className="">
          <div className=" bg-overlay w-[100%] md:w-[50%] text-center items-center justify-center rounded-full flex py-2 md:my-5">
            <img src={sub} alt="" className="pl-5" />
            <p className="px-2 ">No LLC Required, No Credit Check.</p>
          </div>
          <div className="md:w-[80%] md:m-0 m-auto ">
            <h1 className="sm:text-3xl text-4xl md:text-5xl uppercase font-bold tracking-wider leading-[3rem] my-20 md:my-36 ">
              Welcome to Krestion Empowering Your{" "}
              <span className="text-btn">
                {" "}
                <Typewriter
                  options={{
                    strings: ["Financial Journey", "Value"],
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="">
          <img src={g2} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
