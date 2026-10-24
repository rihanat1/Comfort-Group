import React, { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AllPaths from "../Routes/AllPaths";

const Header = ({ onDonateClick }) => {
  const navigate = useNavigate();

  const headerList = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "How it works", id: "how-it-works" },
    { label: "Support Provided", id: "our-support" },
    { label: "FAQs", id: "faqs" },
  ];

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleLink(id, index) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(index);
    setToggle(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 w-screen items-center justify-between px-1 md:px-3 xl:w-[90vw]">
 
        <div className="flex items-center gap-1.5 sm:gap-2">
          <img src={Logo} alt="logo" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          <span className="text-sm font-bold text-primary min-[360px]:text-base min-[400px]:text-xl sm:text-2xl">
            <span className="text-green">Comfort</span>Group
          </span>
        </div>


        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-8 xl:gap-10">
            {headerList.map((item, i) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLink(item.id, i)}
                  className={`relative cursor-pointer whitespace-nowrap py-2 text-[15px] font-medium tracking-wide transition-colors ${
                    active === i ? "text-green" : "text-primary hover:text-green"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded bg-green transition-transform duration-300 ${
                      active === i ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>


        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigate(AllPaths.patientLogin)}
            className="whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-green sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get Support
          </button>

          <button
            onClick={onDonateClick}
            type="button"
            className="hidden whitespace-nowrap rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Donate
          </button>

          <button
            type="button"
            onClick={handleToggle}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-primary sm:h-10 sm:w-10 lg:hidden"
          >
            {toggle ? <IoMdClose className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      
      <div
        className={`bg-white transition-all duration-300 lg:hidden ${
          toggle ? "block border-t" : "hidden"
        }`}
      >
        <ul className="px-4 pb-2 pt-1 md:px-6">
          {headerList.map((item, i) => (
            <li key={item.id} className="border-b last:border-b-0">
              <button
                onClick={() => handleLink(item.id, i)}
                className={`block w-full text-left cursor-pointer py-3 text-base font-medium transition-colors active:bg-gray-50 ${
                  active === i ? "text-green" : "text-primary"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;