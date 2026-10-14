import { cn } from "../../../lib/cn.js";
import { formatNaira } from "../../../lib/format.js";

const LegendRow = ({ dotClass, label, amount, percent, textClass, className }) => (
  <li className={cn("flex items-center gap-3 text-sm", className)}>
    <span aria-hidden="true" className={cn("h-3 w-3 shrink-0 rounded-full", dotClass)} />
    <span className="flex-1 text-secondary">{label}</span>
    <span className={cn("font-semibold", textClass)}>{formatNaira(amount)}</span>
    <span className={cn("w-10 text-right font-semibold", textClass)}>{percent}%</span>
  </li>
);

export default LegendRow;