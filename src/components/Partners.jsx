import React,{useState} from 'react'
import {partnersList} from "../Constants"

const Partners = () => {
  const [list,setList]=useState(partnersList)
  return (

   
      <div className=' flexx flex-wrap gap-5 justify-center md:space-x-9'>
      {
        list.map((item,index)=>{
          return <div className='' key={index}>
          <img src={item.img} alt="" />
          </div>
        })
      }
     

      </div>
    
  )
}

export default Partners
