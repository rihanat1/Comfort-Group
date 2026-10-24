import React, { useState } from "react";
import Logo from "../assets/Images/Logo.png";
import SideBarContents from "../DonorDashboardContents/SideBarContents";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import image from "../assets/Images/image.png";

const DonorMainGrid = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const handleSideBar = () => setToggleSideBar(!toggleSideBar);

  return (
    <div className="min-h-screen bg-gray-50 grid grid-cols-1 md:grid-cols-[240px_1fr]">
   
      {toggleSideBar && (
        <div
          onClick={handleSideBar}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

 
      <aside
        className={`fixed md:sticky md:top-0 inset-y-0 left-0 z-50 w-60 md:w-full h-screen
          px-2 rounded-tr-[3rem] bg-buttonPrimary
          transform transition-transform duration-300
          md:translate-x-0
          ${toggleSideBar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 mt-6">
          <img
            src={Logo}
            alt="logo"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="text-sm font-bold text-white min-[360px]:text-base min-[400px]:text-xl sm:text-2xl">
            <span className="text-green">Comfort</span>Group
          </span>
        </div>

        <SideBarContents />
      </aside>


      <div className="flex flex-col px-2">
        <header className="sticky top-5 z-30 border flex justify-between items-center mt-3 py-3 rounded-full px-2 shadow-lg">
          <div className="flex gap-4 items-center">
            <div onClick={handleSideBar} className="cursor-pointer md:hidden">
              <RxHamburgerMenu className="text-primary text-[20px] ml-2" />
            </div>
            <div className="flex flex-col leading-[18px]">
              <p className="text-green font-semibold text-[16px]">
                Darrel Steward
              </p>
              <p className="text-secondary text-[13px]">
                Thank you for helping patients get the care they deserve!
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center mr-2">
            <IoMdNotificationsOutline className="text-green text-2xl font-semibold" />
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </header>

        <main className="mt-4 h-[2000px]">
       Content 
        </main>
      </div>
    </div>
  );
};

export default DonorMainGrid;