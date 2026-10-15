import { FiCheck } from "react-icons/fi";

// One card on the "Choose Role" page.
// Props:
//   icon        - the picture
//   roleName    - Patient / Donor / Vendor (shown in green)
//   description - the small text under the title
//   selected    - true if this card is the chosen one
//   onClick     - runs when the card is clicked
//   iconSize    - size of the icon picture (Tailwind class)
//   ownCircle   - true if the picture already has the green circle inside it
const RoleCard = ({
  icon,
  roleName,
  description,
  selected,
  onClick,
  iconSize = "h-10 w-10",
  ownCircle = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex cursor-pointer flex-col items-center rounded-3xl border-[3px] bg-white px-8 pb-10 pt-8 text-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] ${
        selected ? "border-green" : "border-transparent"
      }`}
    >
      {/* green tick, only on the selected card */}
      {selected && (
        <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-green text-white">
          <FiCheck />
        </div>
      )}

      {/* icon inside a light green circle */}
      {ownCircle ? (
        <img src={icon} alt={roleName} className="h-20 w-20" />
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green/10">
          <img src={icon} alt={roleName} className={iconSize} />
        </div>
      )}

      <h2 className="mt-5 text-2xl font-semibold text-secondary/70">
        I'm a <span className="font-bold text-green">{roleName}</span>
      </h2>
      <p className="mt-3 max-w-[260px] text-secondary/60">{description}</p>
    </div>
  );
};

export default RoleCard;
