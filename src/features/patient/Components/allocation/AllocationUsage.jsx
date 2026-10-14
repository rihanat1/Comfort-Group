import { Card, CardHeader, DonutChart, ProgressBar } from "../../../../Components/ui";
import { formatNaira } from "../../../../lib/format.js";
import LegendRow from "../LegendRow.jsx";

const AllocationUsage = ({ summary }) => (
  <Card>
    <CardHeader title="Allocation Usage" />
    <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
      <DonutChart
        segments={[{ key: "used", value: summary.used, color: "#16b81c" }]}
        total={summary.total}
        size={160}
        thickness={18}
        label={`${summary.usedPercent}% of your allocation used`}
      >
        <span className="text-3xl font-bold text-secondary">{summary.usedPercent}%</span>
        <span className="text-sm text-secondary">Used</span>
      </DonutChart>

      <div className="w-full">
        <p className="text-sm text-secondary">Total Allocation</p>
        <p className="text-3xl font-bold text-secondary">{formatNaira(summary.total)}</p>
        <div className="mt-3 flex items-center gap-4">
          <ProgressBar value={summary.usedPercent} label="Allocation used" className="flex-1" />
          <span className="shrink-0 text-sm text-secondary">{summary.usedPercent}%</span>
        </div>
        <ul className="mt-4 divide-y divide-gray-100">
          <LegendRow className="py-3" dotClass="bg-red-500" label="Used" amount={summary.used} percent={summary.usedPercent} textClass="text-red-500" />
          <LegendRow className="py-3" dotClass="bg-green" label="Remaining" amount={summary.remaining} percent={100 - summary.usedPercent} textClass="text-green" />
        </ul>
      </div>
    </div>
  </Card>
);

export default AllocationUsage;