import React from 'react'

const SupportInfo = ({number,text}) => {
  return (
    <div className='flex flex-col lg:px-4 xl:px-6  items-center justify-center'>
        <div className="lg:hidden w-8 h-8 rounded-full bg-green"> </div>
        <p className="text-green mt-3">{number}</p>
        <p className="text-sm text-primary font-light">{text}</p>
    </div>
  )
}

export default SupportInfo