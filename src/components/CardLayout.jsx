import React,{useState} from 'react'
import {CardsData} from "../Constants"
const CardLayout = () => {
    const [list,setList]=useState(CardsData)
  return (
 
      <div className=''>
<div className='border flexx justify-between'>

{
        list.map((item,index)=>{
          return <div className='' key={index}>
          <h3 className='pb-6 font-semibold'>{item.heading}</h3>
          <small className=''>{item.paragraph}</small>
          </div>
        })
      }



</div></div>
 
  )
}

export default CardLayout
