import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

// One input box with the label sitting on the border.
// Props: label, type, value, onChange
// If type is "password" it also shows an eye icon to show/hide the text.
const InputField = ({ label, type = "text", value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  // if the eye was clicked, show the password as normal text
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative">
      <label className="absolute -top-3 left-6 bg-white px-2 text-sm font-semibold text-secondary/60">
        {label}
      </label>

      <input
        type={inputType}
        value={value}
        onChange={onChange}
        className="h-14 w-full rounded-lg border border-secondary/50 px-5 pr-14 text-primary outline-none focus:border-buttonPrimary"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-secondary/60"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
};

export default InputField;
