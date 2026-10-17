import React from "react";

const Button2 = ({ text, extraStyling , onClick, type = "button", ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full text-center py-3 rounded-lg text-lg hover:bg-buttonPrimary hover:text-white border-2 border-buttonPrimary text-buttonPrimary cursor-pointer transition ease-in-out ${extraStyling}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button2;