import { FiInfo } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";
import PaymentMethodHeader from "./PaymentMethodHeader";
import StepButton from "./StepButton";

// TEMPORARY account details, replace with the real ones
const bankDetails = {
  bankName: "Access Bank",
  accountName: "ComfortGroup NGO",
  accountNumber: "0123456789",
};

const instructions = [
  "Open your bank app or go to the bank branch.",
  "Transfer the amount to the account details above.",
  "Take a screenshot of the payment receipt.",
  'Tap "Confirm Donation" and upload the receipt.',
];

// Payment screen for "Bank Transfer".
// Props:
//   donorName - the name to put in the reference
//   onBack    - go back to the summary
//   onDone    - the donor has paid, go to the thank you step
const BankTransferScreen = ({ donorName, onBack, onDone }) => {
  return (
    <div>
      <PaymentMethodHeader
        icon={<MdAccountBalance />}
        title="Bank Transfer"
        text="Make a direct bank transfer from your bank account to our bank details below."
        onBack={onBack}
      />

      {/* the bank details box */}
      <div className="mt-8 overflow-hidden rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
        <div className="flex items-center gap-2 bg-green/10 px-4 py-3 text-lg font-semibold text-secondary/70">
          <MdAccountBalance className="text-2xl text-green" />
          Our Bank Details
        </div>
        <div className="px-5 py-2 text-sm text-secondary/60">
          <div className="flex justify-between border-b py-3">
            <span>Bank Name</span>
            <span className="font-semibold text-secondary/70">{bankDetails.bankName}</span>
          </div>
          <div className="flex justify-between border-b py-3">
            <span>Account Name</span>
            <span className="font-semibold text-secondary/70">{bankDetails.accountName}</span>
          </div>
          <div className="flex justify-between border-b py-3">
            <span>Account Number</span>
            <span className="font-semibold text-secondary/70">{bankDetails.accountNumber}</span>
          </div>
          <div className="flex justify-between py-3">
            <span>Reference</span>
            <span className="font-semibold text-secondary/70">Donation - {donorName}</span>
          </div>
        </div>
      </div>

      {/* green note */}
      <div className="mt-6 flex items-start gap-3 rounded-xl bg-green/10 p-4 text-sm text-secondary/60">
        <FiInfo className="mt-0.5 shrink-0 text-lg text-green" />
        <p>
          After making the transfer, please tap{" "}
          <span className="font-semibold text-green">"Confirm Donation"</span> and
          upload your payment receipt (screenshot) for verification.
        </p>
      </div>

      {/* the 4 steps */}
      <h2 className="mt-8 text-xl font-semibold text-secondary/70">Steps</h2>
      <div className="mt-3 flex flex-col gap-3">
        {instructions.map((text, index) => (
          <div key={text} className="flex items-center gap-4 text-sm text-secondary/60">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/10 font-semibold text-green">
              {index + 1}
            </span>
            {text}
          </div>
        ))}
      </div>

      <StepButton text="Confirm Donation" onClick={onDone} />
    </div>
  );
};

export default BankTransferScreen;
