import React,{useState} from "react";
 import {BlogsData} from "../Constants"

const Blogs = () => {
 const [list,setList]=useState(BlogsData)
  return (
    <div className="py-20">
      <h1 className="text-3xl font-semibold p-4 text-transparent  bg-clip-text bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867]">
        A lot is happening, <br />
        We are blogging about it.
      </h1>


     

     <div className="text-white flex flex-wrap space-x-10 space-y-10  p-8 justify-center md:-ml-0 -ml-8">

{
        list.map((item,index)=>{
          return <div className='one mt-10 md:ml-0 ml-10 flex flex-col  flex-wrap justify-center items-center' key={index}>
          <div className="img "><img src={item.img} className="w-72 h-40" alt="" /></div>
         <div className="card bg_blog p-5 w-72">
          <small >{item.date}</small>
          <h3 className='py-5 font-semibold text-lg'>{item.paragraph}</h3>
          <small className='hover:underline cursor-pointer'>{item.read}</small>
          </div></div>
        })
      }


     </div>
  </div>);
};
export default Blogs;
