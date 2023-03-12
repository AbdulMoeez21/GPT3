import React from 'react'

const Buttons = (props) => {

  const buttonStyles = {
    'secondary': "bg-gray-50 text-gray-800",
    'primary': " text-white buttons",
    

}
const buttonSizes = {
  'medium': " py-3 px-2 rounded",

'oneside':' md:py-3 md:px-3 py-2 px-1 rounded-r-xl'
}

  return (
    <button
        className={`min-w-[8rem] max-w-fit text-center py-2 text-sm flex items-center justify-center space-x-4 scroll-px-48
       
    ${buttonStyles[props.type]} ${buttonSizes[props.size]}
    
    `}
    >

        <span className=""> {props.children}</span>
    </button>
  )
}

export default Buttons
