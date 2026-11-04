import { FiCheck } from "react-icons/fi";

const steps = ["Amount", "Purpose", "Payment", "Confirmation"];

// The 1-2-3-4 progress bar at the top of the donate pages.
// Props: current - the step we are on (1, 2, 3 or 4)
//   steps before it show a green tick, the current one is solid green,
//   the steps after it are empty circles.
const DonateStepper = ({ current }) => {
  return (
    <div className="mx-auto mt-6 flex max-w-[480px]">
      {steps.map((label, index) => {
        const number = index + 1;
        const done = number < current;
        const active = number === current;

        return (
          <div key={label} className="relative flex flex-1 flex-col items-center">
            {/* the line that joins this circle to the one before it */}
            {index > 0 && (
              <div className="absolute -left-1/2 top-5 h-px w-full bg-secondary/40" />
            )}

            {/* the circle (relative z-10 keeps it on top of the line) */}
            <div
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-lg font-medium ${
                done || active
                  ? "border-green bg-green text-white"
                  : "border-secondary/50 bg-white text-secondary/60"
              }`}
            >
              {done ? <FiCheck /> : number}
            </div>

            <p className="mt-2 text-xs text-secondary/70 sm:text-sm">{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DonateStepper;
