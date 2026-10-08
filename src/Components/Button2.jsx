import React from 'react'

const Button2 = ({text,extraStyling}) => {
  return (
    <div className={`w-full text-center py-3 rounded-lg text-lg hover:bg-buttonPrimary hover:text-white  border-2 border-buttonPrimary text-buttonPrimary cursor-pointer transition:hover ease-in-out ${extraStyling}`}>{text}</div>
  )
}

export default Button2