import { LuCircleCheck } from "react-icons/lu";
import { Badge } from "../../../Components/ui";
import { STATUSES } from "../constants.js";

const StatusBadge = ({ status }) => {
  const { label, tone } = STATUSES[status] ?? { label: status, tone: "neutral" };
  return (
    <Badge tone={tone} icon={tone === "success" ? LuCircleCheck : undefined}>
      {label}
    </Badge>
  );
};

export default StatusBadge;