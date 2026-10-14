import React from 'react'
import Button1 from '../Components/Button1'
import Button2 from '../Components/Button2'
import { IoMdCheckmark } from 'react-icons/io'
import donor1 from "../assets/Images/donor1.png"
import donor2 from "../assets/Images/donor2.png"
import donor3 from "../assets/Images/donor3.png"
import donor4 from "../assets/Images/donor4.png"

const ForDonors = () => {
  const images = [donor1, donor2, donor3, donor4]

  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:gap-10 mt-10 h-fit my-4 xl:w-[93%] xl:mx-auto">

      <div className="flex flex-col gap-2 lg:w-[40%]">
        <p className="text-green uppercase">For donors</p>
        <p className="text-2xl text-primary font-semibold">
          Your Giving Can Help Someone Keep Going
        </p>
        <p className="text-secondary text-[16px] mb-3">
          Your donation, even as small as 500 naira, can help provide essential support to patients in need.
        </p>

        <div className="flex flex-col gap-2 md:flex-row lg:w-full">
          <Button1 text="Donate Now" extraStyling="md:w-[20%] lg:w-[50%]" />
          <Button2 text="See Our Impact" extraStyling="md:w-[20%] lg:w-[50%]" />
        </div>

        <div className="grid grid-cols-3 mt-3 md:w-[65%] lg:w-full gap-2">
          <p className="flex items-center gap-1 text-secondary text-[15px]">
            <span className="text-green"><IoMdCheckmark /></span>Secure giving
          </p>
          <p className="flex items-center gap-1 text-secondary text-[15px]">
            <span className="text-green"><IoMdCheckmark /></span>Transparent
          </p>
          <p className="flex items-center gap-1 text-secondary text-[15px]">
            <span className="text-green"><IoMdCheckmark /></span>Impact updates
          </p>
        </div>
      </div>

     
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:w-[60%]">
        {images.map((image, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl ${
              i % 2 === 1 ? 'lg:translate-y-6' : ''
            }`}
          >
            <img
              src={image}
              alt={`Donor ${i + 1}`}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForDonors