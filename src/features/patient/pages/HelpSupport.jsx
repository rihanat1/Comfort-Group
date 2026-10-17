import { FaWhatsapp } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { MdKeyboardArrowUp, MdOutlineMail } from "react-icons/md";
import questions from "../Faq.js";
import { useState } from "react";

const HelpSupport = () => {
  const contents = [
    {
      title: "Contact Support",
      subtitle: "Chat with oursupport team for quick help",
      linkText: "Chat Now →",
      icon: <FaWhatsapp />,
    },
    {
      title: "Call Us",
      subtitle: "Speak with our support team directly",
      linkText: "+234xxxxxxx",
      icon: <IoIosCall />,
    },
    {
      title: "Email Us",
      subtitle: "Send us an we will get back to you within 24 hours",
      linkText: "support@comforthealth.com",
      icon: <MdOutlineMail />,
    }
  ];

  const [accordion, setAccordion] = useState(null);

  function handleAccordionIndex(index) {
    setAccordion(index == accordion ? null : index);
  }
  return (
    <section className="mx-2 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-16">
        {contents.map((content) => (
          <div
            key={content.title}
            className="border flex items-center gap-3 p-2 py-4 rounded-xl shadow-md"
          >
            <div className="text-green text-2xl bg-green/10 p-3 h-fit rounded-full">
              {content.icon}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-primary font-semibold text-[15px] sm:text-[17px] md:text-[18px] xl:text-[18px]">
                {content.title}
              </p>
              <p className="text-secondary text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px]">
                {content.subtitle}
              </p>
              <p className="text-green/90 hover:text-green hover:font-semibold text-[15px]  md:text-[16px] xl:text-[16px] cursor-pointer">
                {content.linkText}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border rounded-xl shadow-[0_0_10px_#0002] p-4 xl:p-6 xl:flex xl:flex-row xl:gap-8 xl:items-start ">
        <div className="flex gap-3 pb-6 border-b xl:border-b-0 whitespace-nowrap xl:border-gray-200 xl:pr-8 xl:w-[30%] xl:flex-col xl:gap-4 xl:pb-0">
          <div className="shrink-0 w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center text-green text-2xl bg-green/10 rounded-full">
            <GrNotes />
          </div>
          <div className="flex flex-col gap-1 xl:gap-2">
            <p className="text-primary text-[17px] sm:text-[18px] xl:text-[22px] font-semibold leading-tight">
              Frequently Asked Questions
            </p>
            <p className="text-secondary text-[13px] sm:text-[14px] xl:text-[15px] leading-relaxed">
              Quick answers to common questions
            </p>
          </div>
        </div>

        <div className="mt-4 xl:mt-0 xl:w-[70%] h-[446px] flex flex-col gap-3 overflow-y-scroll [scrollbar-width:thin] [scrollbar-color:#0b2a66_#f3f4f6] pr-2">
          {questions.map((q, i) => (
            <div
              key={i}
              onClick={() => handleAccordionIndex(i)}
              className="flex flex-col border border-gray-200 border-r-4 border-r-buttonPrimary rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-center gap-3">
                <p className="font-semibold text-[14px] sm:text-[15px] xl:text-[16px] text-primary">
                  {q.title}
                </p>
                <MdKeyboardArrowUp
                  className={`shrink-0 text-buttonPrimary text-xl transition-transform duration-300 ${
                    accordion === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {accordion === i && (
                <div className="mt-2 text-secondary text-[14px] sm:text-[15px] xl:text-[16px] leading-relaxed">
                  <p>{q.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;
