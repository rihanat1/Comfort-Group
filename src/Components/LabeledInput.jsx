import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

// An input with the label ABOVE the box (used on the registration pages).
// Props: label, name, type, placeholder, value, onChange
// If type is "password" it also shows the eye icon to show/hide the text.
const LabeledInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="w-full">
      <label className="mb-2 block text-[15px] text-secondary/70">{label}</label>

      <div className="relative">
        <input
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-[55px] w-full rounded-lg border border-secondary/50 px-4 pr-12 text-primary outline-none placeholder:text-secondary/30 focus:border-buttonPrimary"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-secondary/60"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default LabeledInput;
