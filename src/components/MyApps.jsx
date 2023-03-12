import React from "react";
import imgFeature from "../assets/FeatureImage.png";
const MyApps = () => {
  return (
    <div className="flex items-center flex-col md:flex-row  md:px-12 md:space-x-32 pb-32">
      <div className="right ">
        <img src={imgFeature} alt="" />
      </div>

      <div className=" left md:w-4/6 w-11/12 md:pr-20  pt-10">
        <small className="">Request Early Access to Get Started</small>
        <h1 className="text-3xl font-semibold py-6 md:pr-28 pr-20 text-transparent  bg-clip-text bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867]">
         The possibilities are beyond your imagination
        </h1>
        <small className="">
          Yet bed any for travelling assistance indulgence unpleasing. Not 
          thoughts all exercise blessing. Indulgence way everything joy 
          alteration boisterous the attachment. Party we years to order  allow
          asked of.
        </small>
        <p className="text_pech text-xs py-7">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default MyApps;
