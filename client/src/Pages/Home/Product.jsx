import React from "react";
import Heading from "../../Components/Heading";

const Product = () => {
  return (
    <div className="my-10 pt-10 text-center md:text-left">
      <Heading
        name={
          <>
            Our <span className="text-btn">Product</span>
          </>
        }
      />
      <div className="flex md:flex-row flex-col items-center justify-between py-5 ">
        <p>
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </p>
        <div className="bg-overlay p-4 rounded-full flex my-5">
          <button className="ml-3 bg-btn text-background px-5 py-2 rounded-full text-sm">
            For Individuals
          </button>
          <button className="ml-3  text-sm">For Businesses</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
