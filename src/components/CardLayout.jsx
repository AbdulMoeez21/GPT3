import React,{useState} from 'react'
import {CardsData} from "../Constants"
const CardLayout = () => {
    const [list,setList]=useState(CardsData)
  return (
 
      <div className=''>
<div className='md:space-x-28 space-y-4 flex items-center flex-col md:flex-row justify-between'>


{
        list.map((item,index)=>{
          return <div className='flex md:items-start items-center flex-col md:flex-col w-3/4' key={index}>
          
         
          <h3 className='py-6 font-semibold text-white'>{item.heading}</h3>
          <small className='text-justify'>{item.paragraph}</small>
          </div>
        })
      }



</div></div>
 
  )
}

export default CardLayout
