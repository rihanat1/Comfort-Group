import { FiCalendar, FiCreditCard, FiHeart, FiSmartphone, FiUser } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";

// TEMPORARY: later this comes from the logged in donor
const donor = {
  name: "Darrell Steward",
  email: "darrellsteward@gmail.com",
  phone: "+234 801 234 5678",
  address: "Lagos, Nigeria",
};

const paymentMethods = [
  { name: "Bank Transfer", text: "Direct bank transfer (low fees, secure).", icon: <MdAccountBalance /> },
  { name: "Card Payment", text: "Visa, Mastercard, Verve, etc.", icon: <FiCreditCard /> },
  { name: "USSD / Mobile Money", text: "Quick and easy payment via USSD or mobile money.", icon: <FiSmartphone /> },
];

// Step 3: check everything and choose how to pay.
// Props: form, updateForm (same as the other steps)
const DonatePaymentStep = ({ form, updateForm }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-secondary/70">Donation Summary</h2>
      <p className="text-sm text-secondary/60">
        Review your donation details before payment
      </p>

      {/* summary box */}
      <div className="mt-4 rounded-xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between border-b py-3 text-secondary/70">
          <span className="flex items-center gap-3">
            <span className="w-5 text-center text-xl font-bold text-green">₦</span>
            Amount
          </span>
          <span className="font-semibold">₦{Number(form.amount).toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between border-b py-3 text-secondary/70">
          <span className="flex items-center gap-3">
            <FiHeart className="w-5 text-xl text-green" />
            Purpose
          </span>
          <span className="font-semibold">{form.purpose}</span>
        </div>
        <div className="flex items-center justify-between py-3 text-secondary/70">
          <span className="flex items-center gap-3">
            <FiCalendar className="w-5 text-xl text-green" />
            Frequency
          </span>
          <span className="font-semibold">{form.frequency}</span>
        </div>
      </div>

      {/* donor information box */}
      <div className="mt-6 rounded-xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/10 text-xl text-green">
            <FiUser />
          </span>
          <h3 className="text-lg font-semibold text-secondary/70">Donor Information</h3>
        </div>

        <div className="mt-3 grid grid-cols-[80px_1fr] gap-y-2 pl-14 text-sm text-secondary/70">
          <span className="text-secondary/60">Name</span>
          <span>{form.anonymous ? "Anonymous" : donor.name}</span>
          <span className="text-secondary/60">Email</span>
          <span className="break-all">{donor.email}</span>
          <span className="text-secondary/60">Phone</span>
          <span>{donor.phone}</span>
          <span className="text-secondary/60">Address</span>
          <span>{donor.address}</span>
        </div>
      </div>

      {/* payment method */}
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green/10 text-xl text-green">
          <FiCreditCard />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-secondary/70">Payment Method</h3>
          <p className="text-sm text-secondary/60">Choose your preferred payment method</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {paymentMethods.map((method) => {
          const selected = form.paymentMethod === method.name;
          return (
            <button
              key={method.name}
              type="button"
              onClick={() => updateForm({ paymentMethod: method.name })}
              className={`flex flex-col items-center rounded-xl border-2 p-4 text-center ${
                selected
                  ? "border-green bg-green/10"
                  : "border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green/10 text-xl text-green">
                {method.icon}
              </span>
              <p className="mt-3 font-semibold text-secondary/70">{method.name}</p>
              <p className="mt-1 text-xs text-secondary/60">{method.text}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DonatePaymentStep;
