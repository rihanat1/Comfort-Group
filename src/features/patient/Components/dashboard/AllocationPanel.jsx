import { Link } from "react-router-dom";
import { LuCalendarDays, LuChevronRight, LuWallet } from "react-icons/lu";
import { Badge, Card, IconCircle, ProgressBar } from "../../../../Components/ui";
import { cn } from "../../../../lib/cn.js";
import { formatDate, formatNaira } from "../../../../lib/format.js";
import AllPaths from "../../../../routes/AllPaths.js";
import { CATEGORIES } from "../../constants.js";
import StatusBadge from "../StatusBadge.jsx";

const Amount = ({ label, value, className }) => (
  <div className="px-2 first:pl-0 sm:px-4">
    <dt className="text-xs text-secondary sm:text-sm">{label}</dt>
    <dd className={cn("mt-1 text-base font-bold text-secondary sm:text-xl", className)}>{formatNaira(value)}</dd>
  </div>
);

const AllocationPanel = ({ allocation, summary, latestSupport }) => (
  <Card>
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-secondary">
        My Allocation
        <Badge tone={allocation.status === "active" ? "success" : "neutral"}>
          {allocation.status === "active" ? "Active" : "Expired"}
        </Badge>
      </h2>
      <Link
        to={AllPaths.patientAllocation}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-buttonPrimary px-4 py-2.5 text-sm font-medium text-white hover:bg-green"
      >
        View Allocation History <LuChevronRight aria-hidden="true" />
      </Link>
    </div>

    <div className="grid gap-4 rounded-xl bg-cardBg p-4 sm:grid-cols-2 sm:divide-x sm:divide-gray-300">
      <div className="flex items-center gap-3">
        <IconCircle icon={LuWallet} />
        <div>
          <p className="text-sm text-secondary">Available Support</p>
          <p className="text-2xl font-bold text-green">{formatNaira(summary.remaining)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:pl-4">
        <IconCircle icon={LuCalendarDays} />
        <div>
          <p className="text-sm text-secondary">Available Period</p>
          <p className="font-medium text-secondary">
            {formatDate(allocation.periodStart)} – {formatDate(allocation.periodEnd)}
          </p>
        </div>
      </div>
    </div>

    <dl className="mt-5 grid grid-cols-3 divide-x divide-gray-200">
      <Amount label="Allocated" value={summary.total} />
      <Amount label="Used" value={summary.used} className="text-red-500" />
      <Amount label="Remaining" value={summary.remaining} className="text-green" />
    </dl>

    <div className="mt-5 flex items-center gap-4">
      <ProgressBar value={summary.usedPercent} label="Allocation used" className="flex-1" />
      <span className="shrink-0 text-sm text-secondary">{summary.usedPercent}% Used</span>
    </div>

    {latestSupport && (
      <div className="mt-5 flex flex-col gap-3 rounded-xl bg-cardBg p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-secondary">Recent Allocation Details</p>
          <p className="text-sm text-secondary">Your latest approved support</p>
        </div>
        <div className="text-sm text-secondary">
          <p>{CATEGORIES[latestSupport.category]?.label}</p>
          <p className="text-base font-semibold">{formatNaira(latestSupport.amount)}</p>
          <p>{formatDate(latestSupport.date)}</p>
        </div>
        <StatusBadge status={latestSupport.status} />
      </div>
    )}
  </Card>
);

export default AllocationPanel;