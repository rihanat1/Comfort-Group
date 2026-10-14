import { LuWallet } from "react-icons/lu";
import { DonutChart, ProgressBar, StatCard } from "../../../Components/ui";
import StatusBadge from "../Components/StatusBadge.jsx";

const PatientDashboard = () => (
  <div className="flex flex-col gap-6">
    <StatCard icon={LuWallet} label="Available Support" value="₦35,000" hint="Ready for use" tone="green" />
    <DonutChart segments={[{ key: "used", value: 65000, color: "#16b81c" }]} total={100000} label="65% used">
      <span className="text-2xl font-bold text-secondary">65%</span>
    </DonutChart>
    <ProgressBar value={65} label="Allocation used" />
    <div className="flex gap-2"><StatusBadge status="completed" /><StatusBadge status="pending" /></div>
  </div>
);

export default PatientDashboard;
