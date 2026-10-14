import { LuChartColumn } from "react-icons/lu";
import { Card, CardHeader, DonutChart } from "../../../../Components/ui";
import LegendRow from "../LegendRow.jsx";



const AllocationOverview = ({ summary, supports }) => {
  const completed = supports.filter((s) => s.status === "completed");
  const categoryCount = new Set(completed.map((s) => s.category)).size;

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader title="My Allocation" icon={LuChartColumn} />
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <DonutChart
            segments={[{ key: "used", value: summary.used, color: "#16b81c" }]}
            total={summary.total}
            label={`${summary.usedPercent}% of your allocation used`}
          >
            <span className="text-2xl font-bold text-secondary">{summary.usedPercent}%</span>
            <span className="text-sm text-secondary">Used</span>
          </DonutChart>
          <ul className="flex w-full flex-col gap-4">
            <LegendRow dotClass="bg-red-500" label="Used" amount={summary.used} percent={summary.usedPercent} textClass="text-red-500" />
            <LegendRow dotClass="bg-green" label="Remaining" amount={summary.remaining} percent={100 - summary.usedPercent} textClass="text-green" />
          </ul>
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold text-secondary">Your support at a glance</h2>
        <dl className="mt-4 grid grid-cols-2 divide-x divide-gray-200">
          <div className="pr-4">
            <dt className="text-sm text-secondary">Total times assisted</dt>
            <dd className="mt-2 text-xl font-semibold text-green">{completed.length}</dd>
            <dd className="text-sm text-secondary">times</dd>
          </div>
          <div className="pl-4">
            <dt className="text-sm text-secondary">Support categories</dt>
            <dd className="mt-2 text-xl font-semibold text-green">{categoryCount}</dd>
            <dd className="text-sm text-secondary">categories</dd>
          </div>
        </dl>
      </Card>
    </div>
  );
};

export default AllocationOverview;