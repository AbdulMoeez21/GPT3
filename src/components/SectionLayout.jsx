import React,{useState} from 'react'
import SectionCards from './SectionCards'

const SectionLayout = (props) => {
    
  return (
    <div className='flexx flex-col md:flex-row justify-between px-4 gap-x-12'>
    <div className="right w-4/6 pr-20 ">
        <h1 className='text-3xl font-semibold py-6'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
    <small className='text_pech'>Request Early Access to Get Started</small>
    </div>
    <div className="left">
<SectionCards/></div>
    <div className={`${props.layoutStyle==="left"?
      "" : "order-first"} `}>
      <img src={props.img} alt="" />

      </div>

  </div>
  )
}

export default SectionLayout
