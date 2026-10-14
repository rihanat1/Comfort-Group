import React, { useState, useEffect } from "react";

import { PiNoteLight, PiCheckCircleFill } from "react-icons/pi";
import Button1 from "../Components/Button1";
import PatientRegistrationHeaderNoArrow from "../Components/PatientRegistrationHeaderNoArrow";

const VerificationSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setIsSubmitting(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-white">
      <PatientRegistrationHeaderNoArrow />

      <div className="flex-1 flex justify-center items-center h-fit -mt-24 md:mt-0  p-4">
        <div className="w-[80%]  flex flex-col items-center justify-center text-center  sm:h-fit  rounded-2xl p-6 sm:px-8 md:px-10 bg-cardBg/50 shadow-sm -mt-24 md:mt-0 py-28">
    
          <div className="bg-white p-4 sm:p-6 text-3xl sm:text-4xl md:text-5xl rounded-full shadow-sm">
            {isSubmitting ? (
              <PiNoteLight className="cursor-pointer text-buttonPrimary" />
            ) : (
              <PiCheckCircleFill className="text-green" />
            )}
          </div>

          <div className="flex flex-col items-center mt-6">
            {isSubmitting ? (
              <>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-buttonPrimary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-buttonPrimary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-buttonPrimary rounded-full animate-bounce"></span>
                </div>

                <p className="text-green  text-lg sm:text-xl md:text-2xl font-semibold mt-4 lg:text-3xl">
                  Submitting Information for Verification...
                </p>
                <p className="text-secondary/70 text-sm sm:text-base mt-1">
                  Please wait while we process your submission
                </p>
              </>
            ) : (
              <>
                <p className="text-green text-lg sm:text-xl md:text-2xl font-semibold lg:text-3xl">
                  Information Submitted!
                </p>
                <p className="text-secondary/70 text-sm sm:text-base mt-1">
                  You can now view your dashboard
                </p>

                <Button1 text="Go to my dashboard" extraStyling="mt-7"/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSubmit;
