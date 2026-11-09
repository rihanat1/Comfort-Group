import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

const VendorHeader = () => {
  return (
    <header className="sticky top-0 z-30 bg-gray-50 pt-3 pb-2">
             <div className="border flex justify-between items-center py-3 rounded-full px-2 lg:pl-5 shadow-lg bg-white">
               <div className="flex gap-4 items-center">
                 <div onClick={handleSideBar} className="cursor-pointer lg:hidden">
                   <RxHamburgerMenu className="text-primary text-[20px] ml-2" />
                 </div>
                 <div className="flex flex-col leading-[18px]">
                   <p className="text-green font-semibold text-[16px]">
                     Darrel Steward
                   </p>
                   <p className="text-secondary text-[13px]">
                     Thank you for helping patients get the care they deserve!
                   </p>
                 </div>
               </div>
               <div className="flex gap-2 items-center mr-2">
                 <IoMdNotificationsOutline
                  className="text-green text-2xl font-semibold" />
                 <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                   <img
                     src={image}
                     alt="Profile"
                     className="w-full h-full object-cover object-top"
                   />
                 </div>
               </div>
             </div>
           </header>
  )
}

export default VendorHeader