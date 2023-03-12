import React from "react";
import Buttons from "./Buttons";
import Group from "../assets/Group.png";
import HeroImg from "../assets/HeaderIllustration.png";
const Hero = () => {
  return (
    <div className=" flexx flex-col md:flex-row justify-between py-5 ">
      <div className="  md:w-3/5 w-9/12 left flex flex-col space-y-4  ">
        <h1 className="md:text-start text-center text-transparent  bg-clip-text bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867] md:text-6xl text-2xl font-semibold">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-md text_color pt-5 md:pr-44 pr-5 md:w-full w-80">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex md:justify-start justify-center ">
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="  md:w-80 p-4  md:ml-0 -ml-6 rounded-l-lg outline-0  md:p-3 md:text-base text-xs "
          />
          <Buttons type="primary" size="oneside" className=" ">
            <span className="text-xs "> Subscribe</span>
          </Buttons>
        </div>
        <div className="flex flex-col pt-5 md:flex-row justify-start">
          <img src={Group} alt="" className=" h-11 w-40" />
          <small className="md:p-5 p-2  text_color text-xs md:w-96 ">
            1,600 people requested access a visit in last 24 hours
          </small>
        </div>
      </div>
      <div className=" md:w-2/5 md:py-0 py-10">
        <img src={HeroImg} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Hero;
