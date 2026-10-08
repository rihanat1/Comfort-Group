import React from "react";
import Button1 from "../Components/Button1";
import patient from "../assets/Images/patient.png"

const ForPatients = () => {

  const content = [
    {
      title: "Support Is Provided",
      subtitle: "Submit your request.",
    },
    {
      title: "Get Verified",
      subtitle: "We review your information.",
    },
    {
      title: "Receive Support",
      subtitle: "Approved support is provided through donated funds.",
    },
  ];
  return (
    <div className="border-2 border-purple-600 my-6 lg:flex lg:gap-6 lg:items-center lg:justify-between lg:px-4 lg:py-4 rounded-lg xl:w-[95%] xl:mx-auto">
        <div className="hidden md:block w-full  rounded-xl overflow-hidden xl:w-[50%] ">
            <img src={patient} alt="" className="w-full h-full" />
        </div>
      <div className="xl:w-[50%] ">
        <div className="flex flex-col gap-1">
        <p className="text-green text-[16px] mt-4">FOR PATIENTS</p>
        <p className="text-2xl text-primary font-semibold my-2">
          Need Support With Your Healthcare Journey?
        </p>
        <p className="text-[15px] text-secondary">
          As a patient or a loved one of a patient, you can apply for support and follow the progress of
          your application from your account.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-5 mb-4">
        {
            content.map((item)=>
            <div key={item.title} className="border border-green flex flex-col rounded-md p-4 ">
                <p className="font-semibold text-primary text-[16px]">{item.title}</p>
                <p className="text-secondary text-[15px]">{item.subtitle}</p>
            </div>
            )
        }
      </div>
      <Button1 text="Apply for Support" extraStyling="md:w-[30%] lg:w-[50%]"/>
      </div>
    </div>
  );
};

export default ForPatients;
