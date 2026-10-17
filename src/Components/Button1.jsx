import React from "react";

const Button1 = ({ text, extraStyling, onClick, type = "button", ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-buttonPrimary text-white text-center py-3 rounded-lg text-lg hover:bg-green cursor-pointer transition ease-in-out ${extraStyling}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button1;