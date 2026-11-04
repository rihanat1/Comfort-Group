import { FiArrowRight } from "react-icons/fi";
import Button1 from "./Button1";

// The big blue button at the bottom of each donate step, with an arrow.
// Props:
//   text     - the words on the button
//   onClick  - runs when the button is clicked
//   disabled - true = faded and can't be clicked
//   arrow    - false = hide the arrow
const StepButton = ({ text, onClick, disabled = false, arrow = true }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`mx-auto mt-8 block w-full max-w-[480px] ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <Button1
        text={
          <span className="flex items-center justify-center gap-3">
            {text} {arrow && <FiArrowRight />}
          </span>
        }
        extraStyling="!py-2.5 !text-base"
      />
    </button>
  );
};

export default StepButton;
