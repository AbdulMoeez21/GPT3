import React from "react";
import Buttons from "./Buttons";
import Group from "../assets/Group.png";
import HeroImg from "../assets/HeaderIllustration.png";
const Hero = () => {
  return (
    <div className=" flexx flex-col md:flex-row justify-between py-5">
      <div className=" border w-3/5 left flex flex-col space-y-4">
        <h1 className="text_heading md:text-6xl text-3xl font-semibold">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-md text_color pt-5 md:pr-44">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex md:justify-start justify-center ">
          {" "}
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="  md:w-80 w-40  md:ml-0 rounded  md:p-3 md:text-base text-xs bg-transparent"
          />
          <Buttons type="primary" size="oneside" className=" ">
            <span className="text-xs "> Subscribe</span>
          </Buttons>
        </div>
        <div className="flexx">
          <img src={Group} alt="" />
          <small className="p-5 text_color ">
            1,600 people requested access a visit in last 24 hours{" "}
          </small>
        </div>
      </div>
      <div className="border w-2/5">
        <img src={HeroImg} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Hero;
