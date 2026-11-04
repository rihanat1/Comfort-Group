import { FiCheck } from "react-icons/fi";
import Button2 from "./Button2";

// Step 4: the "thank you" screen.
// (There was no design for this step, so this is a simple version.)
// Props:
//   form    - what the donor chose
//   onReset - runs when they click "Make another donation"
const DonateConfirmStep = ({ form, onReset }) => {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-green text-4xl text-white">
        <FiCheck />
      </span>

      <h2 className="mt-6 text-2xl font-semibold text-secondary/70">
        Thank you for your donation!
      </h2>
      <p className="mt-2 max-w-[420px] text-secondary/60">
        Your {form.frequency.toLowerCase()} of ₦{Number(form.amount).toLocaleString()} for{" "}
        {form.purpose} has been received. You are helping a patient get the care
        they need.
      </p>

      <div className="mt-8 w-full max-w-[320px]">
        <button type="button" onClick={onReset} className="block w-full">
          <Button2 text="Make another donation" extraStyling="!py-2.5 !text-base" />
        </button>
      </div>
    </div>
  );
};

export default DonateConfirmStep;
