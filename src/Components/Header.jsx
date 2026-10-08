import React, { useState } from 'react'
import Logo from '../Assets/Images/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
    const headerList = ["Home", "About Us", "How it works", "Support"]
    const [toggle, setToggle] = useState(false)
    function handleToggle(){
        setToggle(!toggle)
    }
  return (
    <div className="bg-white z-50 fixed inset-x-0 border-b px-3 lg:px-4 xl:px-12">
       <div className=" flex  justify-between  items-center  border-2 border-black ">
        <div className=" z-40 flex items-center">
            <img src={Logo} alt="logo" className="h-16 w-16" />
        <h2 className="text-primary mt-2 text-2xl font-bold"><span className="text-green">Comfort</span>Group</h2>
        </div>
        <div className=" flex gap-2 ">
            {
                toggle ?  <IoMdClose onClick={handleToggle} className="h-6 w-6 font-semibold flex z-40 md:hidden" /> :  <RxHamburgerMenu onClick={handleToggle} className="h-6 w-6 font-semibold flex z-40 md:hidden" />
            }
           
           
            <div className={`absolute md:static md:block inset-x-0 top-16 border-b px-4  ${toggle ? "block" : "hidden"
               }`}>
               <ul className="flex flex-col bg-white gap-2 pb-2 pt-9 pl-4 md:flex-row md:gap-8 md:-mt-5 md:bg-transparent   ">
                {
                   headerList.map((li,i)=>
                <li key={i} className={`text-sm md:text-[17px] tracking-wide border-b cursor-pointer py-2 transition-hover ${i==0 ? 'text-green ' : 'hover:text-green'} ${i==headerList.length-1 ? "border-b-0" : ""} md:border-none`}>{li}</li>)
                }
               </ul>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header