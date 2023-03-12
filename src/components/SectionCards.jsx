import React,{useState} from 'react'
import {FutureData} from '../Constants'
// import Dash from './Dash'
const SectionCards = () => {
    const [list,setList]=useState(FutureData)
  return (
    <div className="flex flex-col  ">
  
    {
         list.map((item,index)=>{
         
           return ( <div>  
            <div className='flex py-4 md:ml-12 p-4' key={index}>
            <span className='w-10 h-1  -mt-2 bg-gradient-to-r from-[#AE67FA]  via-[#F49867]  to-[#F49867]'></span>
        <div className="main flex -ml-5">
           <h1 className='text-white md:w-40 w-40 font-semibold '>{item.heading} </h1>
 <small className=' md:pl-32 pl-10 md:w-2/3 w-2/4  '>{item.paragraph}</small>
 </div>
           </div></div>)
         })
       }
      
     </div>
  )
}

export default SectionCards
