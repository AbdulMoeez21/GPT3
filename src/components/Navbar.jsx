import React from 'react'
import Buttons from './Buttons';
const navbar = () => {
const navItems=[
    {
        link:'Home',
    },
    {
        link:'What is GPT?',
    },
    {
        link:'Open AI',
    },
    {
        link:'Case Studies',
    },
    {
        link:'Library',
    },

    
]


  return (
    <div className=" flex-col md:flex-row flex items-center justify-between py-4">
      <div className=" self-center text-3xl md:text-3xl font-semibold whitespace-nowrap dark:text-white"> GPT-3</div>
      <div className="flexx justify-center md:py-10 py-5 w-full space-x-4 ">
      {navItems.map((item, index) => {
           return (
             <div className='flex items-center  md:ml-4 text-xs    space-x-2 pr-2  py-2 pl-2  text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-500 md:dark:hover:text-dark dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent' key={index}>
             <span >{item.link}</span>    
             </div>
           )
        
         })
       }
      </div>
   
      <div className="flex items-center justify-end space-x-5">
     <Buttons>Sign in</Buttons> 

     <Buttons type="primary" size='medium'>Start Free</Buttons>     
     </div>
    </div>
  )
}

export default navbar
