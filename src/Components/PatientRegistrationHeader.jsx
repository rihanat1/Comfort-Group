import React from 'react'

const PatientRegistrationHeader = () => {
  return (
    <div className="border-b-2 sm:px-3 md:px-5 lg:px-12">
          <div className="flex mx-auto h-16  items-center justify-between  sm:gap-2  py-2 ">
          <div className="flex items-center">
            <img
             src={Logo}
             alt="logo"
             className="h-10 w-10 object-contain sm:h-10 sm:w-10"
           />
           <span className="text-sm font-bold text-primary min-[360px]:text-base min-[400px]:text-xl sm:text-2xl">
             <span className="text-green">Comfort</span>Group
           </span>
          </div>
         <MdKeyboardArrowLeft className="mr-2 sm:mr-0 text-[30px] cursor-pointer text-primary font-bold border-2 border-black " />
         </div>
        </div>
  )
}

export default PatientRegistrationHeader