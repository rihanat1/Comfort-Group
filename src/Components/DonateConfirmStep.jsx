import { FiCheck, FiClock, FiDownload } from "react-icons/fi";
import Button1 from "./Button1";
import Button2 from "./Button2";

// Step 4: the "thank you" screen.
// Props:
//   form      - what the donor chose
//   receipt   - { id, date } made when the donation was confirmed
//   firstName - the donor's first name
//   onReset   - runs when they click "Return to Dashboard"
const DonateConfirmStep = ({ form, receipt, firstName, onReset }) => {
  const amount = `₦${Number(form.amount).toLocaleString()}`;

  // the rows of the green box
  const rows = [
    { label: "Donation Amount", value: amount, big: true },
    { label: "Purpose", value: form.purpose },
    { label: "Frequency", value: form.frequency },
    { label: "Transaction ID", value: receipt.id },
    { label: "Date", value: receipt.date },
  ];

  // makes a small text file and downloads it
  const downloadReceipt = () => {
    const lines = ["DONATION RECEIPT", ""];
    rows.forEach((row) => lines.push(`${row.label}: ${row.value}`));

    const file = new Blob([lines.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = `receipt-${receipt.id}.txt`;
    link.click();
  };

  return (
    <div className="mt-10 flex flex-col items-center text-center">
      {/* big tick with a ring around it */}
      <span className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-green p-2">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-green text-5xl text-white">
          <FiCheck />
        </span>
      </span>

      <h2 className="mt-6 text-4xl font-bold text-green">Thank You, {firstName}!</h2>
      <p className="mt-2 text-secondary/60">
        Your generosity brings hope and better health to those in need
      </p>

      {/* green box with the details */}
      <div className="mt-8 w-full max-w-[560px] rounded-2xl bg-green/10 px-6 py-3 text-left sm:px-10">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex items-center justify-between gap-4 py-3 text-sm text-secondary/60 ${
              index < rows.length - 1 ? "border-b border-secondary/20" : ""
            }`}
          >
            <span>{row.label}</span>
            <span
              className={`text-right font-semibold text-secondary/70 ${
                row.big ? "text-xl" : ""
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* buttons */}
      <div className="mt-8 flex w-full max-w-[400px] flex-col gap-3">
        <button type="button" onClick={downloadReceipt} className="block w-full">
          <Button1
            text={
              <span className="flex items-center justify-center gap-3">
                <FiDownload /> Download Receipt
              </span>
            }
            extraStyling="!py-2.5 !text-base"
          />
        </button>
        <a href="#" className="block w-full">
          <Button2
            text={
              <span className="flex items-center justify-center gap-3">
                <FiClock /> View Donation History
              </span>
            }
            extraStyling="!py-2.5 !text-base"
          />
        </a>
        {/* later: go to the dashboard (needs routing). For now it starts again. */}
        <button type="button" onClick={onReset} className="mt-2 text-sm text-secondary/60">
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DonateConfirmStep;
