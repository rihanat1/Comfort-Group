import React, { useState } from "react";
import { AiOutlineProfile, AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoReceiptOutline, IoTimeOutline, IoWalletOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const SideBarContents = () => {
  const [activeItem, setActiveItem] = useState("New Orders");

  const sideBarItems = [
    { name: "New Orders", icon: <IoReceiptOutline /> },
    { name: "Order History", icon: <IoTimeOutline /> },
    { name: "Donation History", icon: <MdHistory /> },
    { name: "Wallet", icon: <IoWalletOutline /> },
    { name: "Settings", icon: <FiSettings /> },
    { name: "Support", icon: <AiOutlineQuestionCircle /> },
  ];

  return (
    <div className="mt-10 w-full px-3">
      <ul className="flex flex-col gap-2">
        {sideBarItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] cursor-pointer transition-colors duration-200 ${
                isActive
                  ? "bg-green/95 text-white font-medium"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarContents;