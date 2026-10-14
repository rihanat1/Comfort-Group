import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import { Card, CardHeader, ProgressBar } from "../../../../Components/ui";
import { formatNaira } from "../../../../lib/format.js";
import AllPaths from "../../../../routes/AllPaths.js";
import { CATEGORIES } from "../../constants.js";

const AllocationBreakdown = ({ items }) => (
  <Card>
    <CardHeader title="Allocation Breakdown" />
    {items.length === 0 ? (
      <p className="py-10 text-center text-sm text-secondary">Nothing used from your allocation yet.</p>
    ) : (
      <ul className="divide-y divide-gray-100">
        {items.map((item) => {
          const label = CATEGORIES[item.category]?.label ?? item.category;
          return (
            <li key={item.category}>
              <Link
                to={`${AllPaths.patientHistory}?category=${item.category}`}
                className="flex items-center gap-3 rounded-lg py-4 hover:bg-cardBg sm:gap-4 sm:px-2"
              >
                <span className="w-28 shrink-0 sm:w-40">
                  <span className="block text-xs font-medium text-secondary">{label}</span>
                  <span className="block font-semibold text-green">{formatNaira(item.amount)}</span>
                </span>
                <ProgressBar value={item.percent} label={`${label}: ${item.percent}% of allocation`} className="flex-1" />
                <span className="w-10 shrink-0 text-right text-sm text-secondary">{item.percent}%</span>
                <LuChevronRight aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary" />
              </Link>
            </li>
          );
        })}
      </ul>
    )}
  </Card>
);

export default AllocationBreakdown;