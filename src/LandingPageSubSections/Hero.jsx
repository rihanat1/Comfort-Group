import React from 'react'
import Carousel from '../Components/Carousel'
import Button1 from '../Components/Button1'
import Button2 from '../Components/Button2'
import SupportInfo from '../Components/SupportInfo'
import { FaCheck } from 'react-icons/fa'


const content = ['Verified patients', 'Transparent support', 'Tracked impact']

const Hero = () => (
  <section className="overflow-hidden px-4 pb-10 pt-5 md:px-6 lg:px-8 lg:pb-14 lg:pt-0 xl:px-16">
   

  
    <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 xl:mx-auto xl:w-[95%] xl:h-[80dvh]">


      <div className="hero-fade relative lg:w-1/2 [animationDelay: '.1s']" >
        <div className="absolute inset-0 hidden translate-x-4 translate-y-4 rounded-3xl border-2 border-green lg:block" />
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cardBg sm:aspect-[16/10] lg:aspect-auto lg:h-[30rem] lg:rounded-3xl xl:h-[34rem]">
          <div className="absolute inset-0">
            <Carousel />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex max-w-sm items-center gap-3 rounded-2xl bg-white p-3 shadow-lg sm:bottom-5 sm:left-5 sm:right-auto sm:p-4 lg:-left-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green text-lg text-white">✓</span>
          <p className="text-xs leading-snug text-secondary sm:text-sm">
            <span className="block font-semibold text-primary">Every patient is verified</span>
            before support is approved and provided.
          </p>
        </div>
      </div>

 
      <div className="lg:w-1/2">
        <p className="hero-fade mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-green sm:text-sm lg:mt-0">
          Healthcare support in Nigeria
        </p>

        <h1 className="hero-fade mt-3 text-4xl font-semibold leading-[1.1] text-primary sm:text-5xl md:max-w-[90%] xl:text-6xl" style={{ animationDelay: '.1s' }}>
          <span className="text-green">Helping Patients</span> Get the Care They Deserve
        </h1>

        <p className="hero-fade mb-3 mt-4 w-full text-base leading-relaxed text-secondary sm:w-[90%] sm:text-lg" style={{ animationDelay: '.2s' }}>
          We help patients in Nigeria access essential support such as medication,
          food, and other healthcare needs.
        </p>

        <div className="hero-fade mt-5 flex w-full flex-col gap-3 sm:flex-row sm:gap-4 md:w-[70%] lg:w-[90%] lg:gap-2" style={{ animationDelay: '.3s' }}>
          <Button1 text="Get Patient Support" />
          <Button2 text="How It Works" />
        </div>

        <ul className="hero-fade mt-6 hidden flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-primary lg:flex" style={{ animationDelay: '.4s' }}>
          {content.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green text-[11px] text-white"><FaCheck /></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>


    <div className="mt-8 grid w-full grid-cols-2 gap-5 rounded-lg bg-cardBg  py-4 md:mt-6 md:grid-cols-4 lg:mx-auto lg:mt-9 lg:w-fit lg:gap-7 lg:px-8 lg:py-3 lg:shadow-md xl:mt-0">
      <SupportInfo number="20,000+" text="Patients Supported" />
      <SupportInfo number="200+" text="Donors" />
      <SupportInfo number="₦1,700,000+" text="Support Provided" />
      <SupportInfo number="1" text="Hospital" />
    </div>
  </section>
)

export default Hero