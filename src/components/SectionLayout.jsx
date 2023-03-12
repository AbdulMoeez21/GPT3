import React, { useState } from "react";
import SectionCards from "./SectionCards";

const SectionLayout = (props) => {
  return (
    <div className=" flex flex-col md:flex-row justify-between px-4 gap-x-12">
      <div className=" right md:w-4/6  pr-20 ">
        <h1 className="md:text-3xl text-2xl  font-semibold py-6 text-transparent  bg-clip-text bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <small className="text_pech md:text-normal text-xs">Request Early Access to Get Started</small>
      </div>
      <div className="left">
        <SectionCards />
      </div>
    </div>
  );
};

export default SectionLayout;
