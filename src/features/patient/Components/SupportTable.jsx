import { formatDate, formatNaira, formatTime } from "../../../lib/format.js";
import { CATEGORIES } from "../constants.js";
import StatusBadge from "./StatusBadge.jsx";

const CategoryCell = ({ category }) => {
  const { label, icon: Icon } = CATEGORIES[category] ?? CATEGORIES.other;
  return (
    <span className="flex items-center gap-2">
      <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
        <Icon className="h-4 w-4" />
      </span>
      {label}
    </span>
  );
};

const SupportTable = ({ supports, renderAction, emptyMessage = "No support records yet." }) => {
  if (supports.length === 0) {
    return <p className="py-10 text-center text-sm text-secondary">{emptyMessage}</p>;
  }

  return (
    <>
      {/* Phones: one card per support */}
      <ul className="divide-y divide-gray-100 md:hidden">
        {supports.map((s) => (
          <li key={s.id} className="flex flex-col gap-2 py-3 text-sm text-secondary">
            <div className="flex items-center justify-between gap-2">
              <CategoryCell category={s.category} />
              <StatusBadge status={s.status} />
            </div>
            <div className="flex items-center justify-between">
              <span>{formatDate(s.date)}</span>
              <span className="font-semibold">{formatNaira(s.amount)}</span>
            </div>
            {renderAction && <div>{renderAction(s)}</div>}
          </li>
        ))}
      </ul>

      {/* Tablet and up: a real table */}
      <table className="hidden w-full text-left text-sm text-secondary md:table">
        <thead className="bg-cardBg">
          <tr className="[&>th:first-child]:rounded-l-lg [&>th:last-child]:rounded-r-lg">
            <th scope="col" className="px-3 py-3 font-medium">Date</th>
            <th scope="col" className="px-3 py-3 font-medium">Support Type</th>
            <th scope="col" className="px-3 py-3 font-medium">Amount</th>
            <th scope="col" className="px-3 py-3 font-medium">Status</th>
            {renderAction && <th scope="col" className="px-3 py-3 text-right font-medium">Action</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {supports.map((s) => (
            <tr key={s.id}>
              <td className="px-3 py-4">
                <span className="block">{formatDate(s.date)}</span>
                <span className="block text-xs">{formatTime(s.date)}</span>
              </td>
              <td className="px-3 py-4"><CategoryCell category={s.category} /></td>
              <td className="px-3 py-4 font-medium">{formatNaira(s.amount)}</td>
              <td className="px-3 py-4"><StatusBadge status={s.status} /></td>
              {renderAction && <td className="px-3 py-4 text-right">{renderAction(s)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SupportTable;