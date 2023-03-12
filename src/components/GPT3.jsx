import React from "react";
import CardLayout from "./CardLayout";

const GPT3 = () => {
  return (
    <div className="bg_blog p-10 ">
      <div className="upper flex md:flex-row flex-col  md:w-full w-80  pr-5">
        <span className="w-10 h-1 -mt-2  bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867]"></span>

        <h1 className="text-white font-semibold md:-ml-8 md:w-2/5 md:pb-0 pb-5">
          What is GPT-3?
        </h1>
        <p className="md:w-3/4 md:text-base text-sm">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on.
        </p>
      </div>
      <div className="lower  md:w-full w-96 ">
        <div className="flexx justify-between py-16 ">
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867] md:text-2xl text-lg md:w-96 w-60 font-semibold">
            The possibilities are beyond your imagination
          </h1>
          <small className="text_pech md:text-sm text-xs md:mt-0 mt-10  ">Explore The Library</small>
        </div>

        <CardLayout />
      </div>
    </div>
  );
};

export default GPT3;
