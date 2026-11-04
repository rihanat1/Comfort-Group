import RadioDot from "./RadioDot";

const presets = [5000, 10000, 25000, 50000];
const frequencies = ["One-time Donation", "Monthly Donation"];

// Step 1: choose how much to give and how often.
// Props:
//   form       - everything the donor has chosen so far
//   updateForm - function that saves a change, for example updateForm({ amount: "5000" })
const DonateAmountStep = ({ form, updateForm }) => {
  // clicking one of the 4 big buttons
  const choosePreset = (value) => {
    updateForm({ amount: String(value), customAmount: "" });
  };

  // typing in the "Other Amount" box
  const handleCustom = (e) => {
    const digits = e.target.value.replace(/\D/g, ""); // keep only numbers
    updateForm({ customAmount: digits, amount: digits });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-secondary/70">
        Select Donation Amount
      </h2>
      <p className="text-sm text-secondary/60">
        Choose a preset amount or enter your own amount.
      </p>

      {/* the 4 big amount buttons */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {presets.map((value) => {
          const selected = form.customAmount === "" && Number(form.amount) === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => choosePreset(value)}
              className={`h-16 rounded-lg border text-xl font-bold ${
                selected
                  ? "border-green bg-green text-white"
                  : "border-secondary/40 text-secondary/70"
              }`}
            >
              ₦{value.toLocaleString()}
            </button>
          );
        })}
      </div>

      {/* other amount */}
      <label className="mb-1 mt-6 block text-sm text-secondary/70">
        Other Amount
      </label>
      <div className="flex h-14 overflow-hidden rounded-lg border-2 border-secondary/50">
        <span className="flex items-center border-r px-4 text-xl font-bold text-secondary/70">
          ₦
        </span>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Enter amount"
          value={form.customAmount}
          onChange={handleCustom}
          className="w-full px-4 text-primary outline-none placeholder:text-secondary/30"
        />
      </div>

      {/* how often */}
      <h2 className="mt-6 text-xl font-semibold text-secondary/70">
        Donation Frequency
      </h2>
      <p className="text-sm text-secondary/60">
        How often would you like to donate?
      </p>
      <div className="mt-3 flex flex-wrap gap-4">
        {frequencies.map((frequency) => {
          const selected = form.frequency === frequency;
          return (
            <button
              key={frequency}
              type="button"
              onClick={() => updateForm({ frequency })}
              className={`flex items-center gap-3 rounded-full border-2 px-5 py-2 text-sm font-medium ${
                selected
                  ? "border-green bg-green text-white"
                  : "border-secondary/50 text-secondary/70"
              }`}
            >
              <RadioDot selected={selected} onGreen />
              {frequency}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DonateAmountStep;
