// A white box with rounded corners and a soft shadow.
// Almost everything on the dashboard pages sits inside one of these.
// Props: children (what goes inside), className (extra styling, for example padding)
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
