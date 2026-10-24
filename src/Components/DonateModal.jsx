import React, { useEffect } from "react";
import Button1 from "./Button1";
import { IoCloseSharp } from "react-icons/io5";

const DonateModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md md:max-w-lg p-6 sm:p-8 relative"
      >
        <IoCloseSharp
          onClick={onClose}
          className="text-buttonPrimary text-3xl font-semibold absolute right-3 top-3 cursor-pointer hover:text-green"
        />

        <div className="flex flex-col gap-4 mt-2">
          <div>
            <h2 className="text-xl font-semibold text-primary">
              Donate to <span className="text-green">Comfort</span>Group
            </h2>
           
          </div>

          <div className="flex flex-col">
            <label htmlFor="fullname" className="text-secondary">
              Fullname
            </label>
            <input
              id="fullname"
              type="text"
              className="border py-2 px-2 outline-none rounded-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-secondary">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border py-2 px-2 outline-none rounded-sm"
            />
          </div>

          <Button1 text="Proceed to payment →" />

          <button
            type="button"
            onClick={onClose}
            className="text-sm text-buttonPrimary hover:underline"
          >
            Already donated? Access your dashboard →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;