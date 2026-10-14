import { cn } from "../../lib/cn.js";

const ProgressBar = ({ value, label, className }) => (
  <div
    role="progressbar"
    aria-label={label}
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    className={cn("h-3 w-full overflow-hidden rounded-full bg-green/10", className)}
  >
    <div
      className="h-full rounded-full bg-gradient-to-r from-greenDark to-green transition-[width] duration-500"
      style={{ width: `${Math.min(value, 100)}%` }}
    />
  </div>
);

export default ProgressBar;