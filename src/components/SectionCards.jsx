import React,{useState} from 'react'
import {FutureData} from '../Constants'
const SectionCards = () => {
    const [list,setList]=useState(FutureData)
  return (
    <div className="flex flex-col  ">
    {
         list.map((item,index)=>{
           return (<div className='flex py-4 ml-12' key={index}>
           <h1 className='text_heading w-40  font-semibold'>{item.heading} </h1>
 <small className=' pl-32 w-2/3 '>{item.paragraph}</small>
 
           </div>)
         })
       }
      
     </div>
  )
}

export default SectionCards
