// The little round "radio" circle used on the donate pages.
// Props:
//   selected - true = filled in, false = empty circle
//   onGreen  - true when it sits on a green background (then it is drawn in white)
const RadioDot = ({ selected, onGreen = false }) => {
  // choose the colours
  let ring = "border-secondary/50"; // empty circle
  if (selected) ring = onGreen ? "border-white" : "border-green bg-green";

  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${ring}`}
    >
      {selected && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
    </span>
  );
};

export default RadioDot;
