import { FiUsers } from "react-icons/fi";
import RadioDot from "./RadioDot";

// TEMPORARY list, replace with the real causes later
const purposes = [
  { name: "Medication Support", text: "Provides essential medication for patients." },
  { name: "Medical Equipment", text: "Provides medical equipment for patients in need." },
  { name: "Food Support", text: "Provides nutritious meals for patients." },
  { name: "Transport Support", text: "Helps patients travel to and from the hospital." },
];

// Step 2: choose where the money goes.
// Props: form, updateForm (same as the other steps)
const DonatePurposeStep = ({ form, updateForm }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-secondary/70">
        Select Donation Purpose
      </h2>
      <p className="text-sm text-secondary/60">
        Select the area where you want your support to go.
      </p>

      {/* the 4 cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {purposes.map((purpose) => {
          const selected = form.purpose === purpose.name;
          return (
            <button
              key={purpose.name}
              type="button"
              onClick={() => updateForm({ purpose: purpose.name })}
              className={`flex items-start justify-between gap-3 rounded-xl border p-5 text-left ${
                selected
                  ? "border-green bg-green/10"
                  : "border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
              }`}
            >
              <div>
                <p className="font-semibold text-secondary/70">{purpose.name}</p>
                <p className="mt-1 text-sm text-secondary/60">{purpose.text}</p>
              </div>
              <RadioDot selected={selected} />
            </button>
          );
        })}
      </div>

      {/* anonymous switch */}
      <div className="mt-6 flex items-center gap-4 rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green/10 text-2xl text-green">
          <FiUsers />
        </span>
        <div className="flex-1">
          <p className="font-semibold text-secondary/70">
            Make this donation anonymous
          </p>
          <p className="text-sm text-secondary/60">
            Your name will not be shown publicly
          </p>
        </div>

        {/* the on/off switch */}
        <button
          type="button"
          onClick={() => updateForm({ anonymous: !form.anonymous })}
          className={`flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-all ${
            form.anonymous ? "justify-end bg-green" : "justify-start bg-secondary/50"
          }`}
        >
          <span className="h-6 w-6 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
};

export default DonatePurposeStep;
