import { FiChevronDown } from "react-icons/fi";

// A dropdown with the label ABOVE the box (same look as LabeledInput).
// Props: label, name, placeholder, value, onChange, options
// options is a simple list of text, for example ["Cardiology", "Surgery"]
const LabeledSelect = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="w-full">
      <label className="mb-1 block text-sm text-secondary/70">{label}</label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          // gray text while nothing is chosen yet, dark text after
          className={`h-12 w-full appearance-none rounded-lg border border-secondary/50 bg-white px-4 pr-12 outline-none focus:border-buttonPrimary ${
            value === "" ? "text-secondary/30" : "text-primary"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* the little arrow on the right */}
        <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-secondary/70" />
      </div>
    </div>
  );
};

export default LabeledSelect;
