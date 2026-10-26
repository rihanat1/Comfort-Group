import { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import PatientRegistrationHeader from "../Components/PatientRegistrationHeader";
import OtpBoxes from "../Components/OtpBoxes";
import Button1 from "../Components/Button1";

const SecurityVerification = () => {
  // the 6 boxes, all empty to start
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [agreed, setAgreed] = useState(false);
  const [seconds, setSeconds] = useState(10); // resend countdown

  // counts down 10, 9, 8 ... 0 (runs again whenever "seconds" changes)
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  // the code as one string, for example "123456"
  const codeText = code.join("");
  // Confirm only works when all 6 digits are filled AND the box is ticked
  const ready = codeText.length === 6 && agreed;

  // runs when the user types in a box
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    console.log({ code: newCode.join(""), agreed });
  };

  // takes pasted text, keeps only the digits and fills the boxes
  const fillFromText = (text) => {
    const digits = text.replace(/\D/g, "").slice(0, 6);
    const newCode = code.map((_, i) => digits[i] || "");
    setCode(newCode);
    console.log({ code: newCode.join(""), agreed });
  };

  // the green "Paste" button reads the clipboard
  const handlePasteButton = async () => {
    try {
      const text = await navigator.clipboard.readText();
      fillFromText(text);
    } catch (error) {
      console.log("Could not read the clipboard", error);
    }
  };

  const handleAgree = (e) => {
    setAgreed(e.target.checked);
    console.log({ code: codeText, agreed: e.target.checked });
  };

  const handleResend = () => {
    if (seconds > 0) return; // still counting down
    setSeconds(10);
    console.log("Resend code");
    // later: ask the backend to send a new code
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing
    console.log("Verify:", { code: codeText, agreed });
    // later: send the code to the backend
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PatientRegistrationHeader />

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-[662px] flex-1 flex-col justify-center px-4 py-3"
      >
        <h1 className="text-3xl font-semibold text-secondary/70">
          Security verification
        </h1>

        <h2 className="mt-6 text-lg font-semibold text-secondary/60">Email</h2>
        <p className="mb-4 mt-1 text-sm text-secondary/60">
          Enter the verification code received via your email
          (pet****@gmail.com).
        </p>

        <OtpBoxes
          code={code}
          onChange={handleCodeChange}
          onPaste={fillFromText}
        />

        {/* Paste + Resend */}
        <div className="mt-3 flex items-center justify-between text-lg font-medium text-green">
          <button type="button" onClick={handlePasteButton}>
            Paste
          </button>
          <button
            type="button"
            onClick={handleResend}
            className={seconds > 0 ? "cursor-default opacity-60" : ""}
          >
            Resend{seconds > 0 ? `(${seconds} s)` : ""}
          </button>
        </div>

        {/* Terms box: turns green when ticked */}
        <label
          className={`mt-5 flex cursor-pointer items-center gap-6 rounded-lg border px-7 py-4 text-sm text-secondary/70 ${
            agreed ? "border-green bg-green/10" : "border-secondary/30"
          }`}
        >
          <input
            type="checkbox"
            checked={agreed}
            onChange={handleAgree}
            className="hidden"
          />
          {/* our own checkbox square */}
          <span
            className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-md border text-xl text-white ${
              agreed ? "border-green bg-green" : "border-secondary/50 bg-white"
            }`}
          >
            {agreed && <FiCheck />}
          </span>
          I agree to the ComfortGroup Terms and Conditions and Privacy Policy.
        </label>

        {/* Confirm button (faded until the code is complete and the box is ticked) */}
        <button
          type="submit"
          disabled={!ready}
          className={`mt-5 block w-full ${
            ready ? "" : "cursor-not-allowed opacity-50"
          }`}
        >
          <Button1 text="Confirm" />
        </button>

        <div className="mt-4 flex flex-col gap-1 text-sm text-secondary/60">
          <a href="#" className="underline">
            Didn't receive the Email verification code?
          </a>
          <a href="#" className="underline">
            Send verification code to number.
          </a>
        </div>
      </form>
    </div>
  );
};

export default SecurityVerification;
