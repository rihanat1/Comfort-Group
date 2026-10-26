import { useRef } from "react";

// Six boxes for a verification code, one digit per box.
// Props:
//   code     - a list of 6 items, for example ["1", "2", "", "", "", ""]
//   onChange - runs with the new list when the user types or deletes
//   onPaste  - runs with the pasted text when the user pastes into a box
const OtpBoxes = ({ code, onChange, onPaste }) => {
  // inputs.current[0] is the first box, [1] is the second ... so we can jump between them
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    // keep only the last digit typed, ignore letters
    const digit = e.target.value.replace(/\D/g, "").slice(-1);

    const newCode = [...code];
    newCode[index] = digit;
    onChange(newCode);

    // after typing a digit, jump to the next box
    if (digit && index < code.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Backspace on an empty box = go back to the box before it
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    onPaste(e.clipboardData.getData("text"));
  };

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-6">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          type="text"
          inputMode="numeric"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="h-14 w-full rounded-xl bg-[#d9d9d9] text-center text-2xl font-semibold text-primary outline-none focus:ring-2 focus:ring-buttonPrimary sm:h-[72px]"
        />
      ))}
    </div>
  );
};

export default OtpBoxes;
