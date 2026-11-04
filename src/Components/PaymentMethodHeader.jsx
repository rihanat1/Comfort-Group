import { FiArrowLeft } from "react-icons/fi";

// The top part shared by the 3 payment screens:
// back arrow, big green icon, big green title and a small description.
// Props:
//   icon   - the icon inside the green circle
//   title  - for example "Bank Transfer"
//   text   - the small description under the title
//   onBack - runs when the back arrow is clicked
const PaymentMethodHeader = ({ icon, title, text, onBack }) => {
  return (
    <div>
      <button type="button" onClick={onBack} className="text-xl text-secondary/60">
        <FiArrowLeft />
      </button>

      <span className="mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-green/10 text-4xl text-green">
        {icon}
      </span>

      <h1 className="mt-4 text-4xl font-bold text-green">{title}</h1>
      <p className="mt-2 max-w-[420px] text-sm text-secondary/60">{text}</p>
    </div>
  );
};

export default PaymentMethodHeader;
