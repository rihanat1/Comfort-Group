import React from 'react'
import aboutUsImg from "../assets/Images/aboutUsImg.png"
import Button1 from '../Components/Button1'
const AboutUs = () => {
  return (
    <div className=' mt-4 lg:my-9 lg:mt-12 xl:w-[93%] xl:mx-auto'>
             <p className="text-[16px] lg:hidden text-greenDark uppercase tracking-wider  py-4 ">About Us</p>
       <div className="lg:flex lg:flex-row lg:gap-5 lg:items-center">
         <div className="rounded-lg overflow-hidden lg:w-fit lg:h-96">
            <img src={aboutUsImg} alt="" className="lg:w-[100%] lg:h-96" />
        </div>
       <div className="lg:w-[55%]">
         <p className="text-[16px] hidden lg:block text-greenDark uppercase tracking-wider ">About Us</p>
         <div className="border-l-4 border-buttonPrimary my-5 px-2">
            <h2 className="text-primary text-4xl lg:text-5xl font-semibold"><span className="text-green">Comfort</span>Group</h2>
        </div>
        <p className="text-secondary text-[18px] w-[90%] leading-tight mb-6 my-4">We connect donors to hospital patients who cannot afford medical bills or food through donated funds.</p>
        <Button1 text="Learn More" extraStyling="md:w-[30%] "/>
       </div>
       </div>
    </div>
  )
}

export default AboutUs