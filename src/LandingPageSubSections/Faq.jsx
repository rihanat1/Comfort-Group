import React, { use, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Faq = () => {
  const content = [
    {
      title: "What is the purpose of your organization?",
      subtitle:
        "Our organization is dedicated to providing support and assistance to patients in need, helping them access medical care, medications, and other essential resources.",
    },
    {
      title: "Who can apply for support?",
      subtitle:
        "Eligible patients who meet the organization's requirements can apply or be referred through a partner hospital.",
    },
    {
      title: "What type of support is available?",
      subtitle:
        "Support may include medication, food, and other approved essential needs.",
    },
    {
      title: "How long does verification take?",
      subtitle: "It takes a day to review patient's information",
    },
    {
      title: "Can I see how my donation helps?",
      subtitle:
        "Donors can view available impact updates through their dashboard in their account.",
    },
    {
      title: "How can I donate?",
      subtitle:
        "You can donate through our website by clicking on the 'Donate' button and following the instructions.",
    },
    {
      title: "Is my information safe?",
      subtitle:
        "Personal and patient information should only be accessed by authorized personnel.",
    },
    {
      title: "Can I volunteer?",
      subtitle:
        "Absolutely! We welcome volunteers. Please visit our 'Get Involved' page for more information on how to sign up.",
    },
  ];

  const [accordion, setAccordion] = useState(null);
  function handleAccordionindex(index) {
    setAccordion(index === accordion ? null : index);
  }
  return (
    <div className="mt-10 lg:mt-20 xl:mt-28 mb-5 md:px-2 md:flex md:flex-row  md:justify-between lg:px-4 xl:w-[95%] xl:mx-auto">
      <div className="mb-4 md:mt-20 md:w-[40%] lg:w-[30%]">
        <p className="text-green uppercase">FAQ</p>
        <p className="text-2xl text-primary font-semibold my-2 md:text-3xl lg:text-4xl">
          Questions? <br className="hidden md:block" />We've Got Answers.
        </p>
      </div>
      <div  className=" md:px-4 md:w-[60%] lg:w-[70%]">
        {content.map((item,i) => (
          <div onClick={() => handleAccordionindex(i)} key={item.title} className="mb-4 border border-r-4 border-r-buttonPrimary rounded-lg p-4">

            <div className="flex justify-between items-center">
              <h3 className="text-[16px] font-medium text-primary">{item.title}</h3>
          
                  <TiArrowSortedDown onClick={() => handleAccordionindex(i)} className={`text-buttonPrimary hover:text-blue-700 transition-transform duration-300 ${accordion === i ? 'rotate-180' : 'rotate-0'}`}  />
         
            </div>

            {accordion === i && (
              <div className="mt-2 text-secondary">
                <p>{item.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
