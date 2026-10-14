import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import { Card, CardHeader, ViewAllLink } from "../../../../Components/ui";
import { formatNaira } from "../../../../lib/format.js";
import AllPaths from "../../../../routes/AllPaths.js";
import { CATEGORIES } from "../../constants.js";
import StatusBadge from "../StatusBadge.jsx";

const SupportSummary = ({ items }) => (
  <Card>
    <CardHeader title="Current Support Summary" action={<ViewAllLink to={AllPaths.patientHistory} />} />
    {items.length === 0 ? (
      <p className="py-10 text-center text-sm text-secondary">You haven't received any support yet.</p>
    ) : (
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <li key={item.category}>
            <Link
              to={`${AllPaths.patientHistory}?category=${item.category}`}
              className="flex h-full flex-col gap-1 rounded-xl border border-gray-100 p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-secondary">{CATEGORIES[item.category]?.label}</span>
              <span className="flex items-center justify-between">
                <span>
                  <span className="block text-sm font-semibold text-secondary">{item.percent}%</span>
                  <span className="block text-sm text-secondary">{formatNaira(item.amount)}</span>
                </span>
                <LuChevronRight aria-hidden="true" className="text-secondary" />
              </span>
              <span className="mt-2">
                <StatusBadge status={item.latestStatus} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </Card>
);

export default SupportSummary;