import { cn } from "../../lib/cn.js";
import Card from "./Card.jsx";
import IconCircle from "./IconCircle.jsx";

const tones = { green: "text-green", red: "text-red-500", default: "text-secondary" };

const StatCard = ({ icon, label, value, hint, tone = "default" }) => (
  <Card className="flex gap-3">
    <IconCircle icon={icon} />
    <div className="min-w-0">
      <p className="text-sm font-medium text-secondary">{label}</p>
      <p className={cn("mt-1 truncate text-2xl font-bold sm:text-3xl", tones[tone])}>{value}</p>
      {hint && <p className="mt-1 text-sm text-secondary">{hint}</p>}
    </div>
  </Card>
);

export default StatCard;