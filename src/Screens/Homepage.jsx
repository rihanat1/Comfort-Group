import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Button1 from '../Components/Button1'
import Button2 from '../Components/Button2'
import SupportInfo from '../Components/SupportInfo'
import AboutUs from '../HompageSubSections/AboutUs'
import OurSupport from '../HompageSubSections/OurSupport'
import HowItWorks from '../HompageSubSections/HowItWorks'
import ForPatients from '../HompageSubSections/ForPatients'
import ForDonors from '../HompageSubSections/ForDonors'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <div className="relative top-16 pt-5 lg:pt-0 px-4 md:px-6 lg:px-8 xl:px-16 border-2 border-purple-500">
            <div className="border-2 border-rose-500  flex flex-col gap-2">
                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:w-full xl:w-[95%] xl:mx-auto xl:h-screen">
                     <Carousel/>
                <div className="">
                    <h1 className="text-4xl sm:text-5xl sm:leading-[52px] mt-6 md:max-w-[90%] font-semibold text-primary"><span className="text-green">Helping Patients </span>Get the Care They Deserve</h1>
                <p className="text-[16px] sm:text-[18px] sm:w-[90%] w-[98.9%] tracking-wide text-secondary mt-2 mb-3">We help patients in Nigeria access essential support such as medication, food, and other healthcare needs.</p>
               <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full md:w-[70%] lg:w-[90%] lg:gap-2">
                 <Button1 text="Get Patient Support" />
                 <Button2 text="How It Works"/>
               </div>
               <p className="hidden lg:block text-primary text-[18px] font-semibold mt-4">Supporting patients. Empowering communities. Creating lasting impact.</p>
                </div>
                </div>

               <div className="w-full lg:w-fit lg:mx-auto xl:mt-11  bg-cardBg  mt-6 lg:mt-9 rounded-lg py-4 grid grid-cols-2 md:grid-cols-4 md:mt-6 gap-5 lg:gap-7 lg:py-3 justify-center lg:px-8 lg:shadow-md">
                <SupportInfo number="20,000+" text="Patients Supported"/>
                <SupportInfo number="200+" text="Donors"/>
                <SupportInfo number="₦1,700,000+" text="Support Provided"/>
                <SupportInfo number="1" text="Hospital"/>
               </div>

               <AboutUs/>
               <OurSupport/>
               <HowItWorks/>
               <ForPatients/>
               <ForDonors/>
            </div>
        </div>
    </div>
  )
}

export default Homepage