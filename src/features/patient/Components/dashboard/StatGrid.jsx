import { LuCalendarArrowUp, LuCalendarCheck, LuChartColumn, LuChartSpline, LuCoins, LuWallet } from "react-icons/lu";
import { StatCard } from "../../../../Components/ui";
import { formatNaira } from "../../../../lib/format.js";
import { daysUntil } from "../../utils/summary.js";

const StatGrid = ({ summary, allocation }) => {
  const today = new Date();
  const days = daysUntil(allocation.nextAllocationAt);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <StatCard icon={LuWallet} label="Available Support" value={formatNaira(summary.remaining)} hint="Ready for use" tone="green" />
      <StatCard icon={LuCoins} label="Allocation" value={formatNaira(summary.total)} hint="Total approved" />
      <StatCard icon={LuChartColumn} label="Used" value={formatNaira(summary.used)} hint="Amount used" tone="red" />
      <StatCard icon={LuCalendarCheck} label="Next Allocation" value={`${days} ${days === 1 ? "Day" : "Days"}`} hint="Until next allocation" />
      <StatCard icon={LuChartSpline} label="Remaining" value={formatNaira(summary.remaining)} hint="Left in your allocation" tone="green" />
      <StatCard icon={LuCalendarArrowUp} label="Date" value={today.toLocaleDateString("en-NG", { day: "numeric", month: "short" })} hint={today.getFullYear()} />
    </div>
  );
};

export default StatGrid;