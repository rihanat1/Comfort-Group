import React from 'react'

const Button1 = ({text,extraStyling}) => {

  return (
    <div className={`w-full bg-buttonPrimary text-white text-center py-3 rounded-lg text-lg hover:bg-green cursor-pointer transition:hover ease-in-out ${extraStyling}`}>{text}</div>
  )
}

export default Button1