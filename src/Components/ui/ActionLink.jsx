import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

const ActionLink = ({ to, title, description }) => (
  <Link
    to={to}
    className="flex items-center gap-3 rounded-xl border border-gray-100 p-4 shadow-sm transition-shadow hover:shadow-md"
  >
    <span className="min-w-0 flex-1">
      <span className="block font-semibold text-secondary">{title}</span>
      {description && <span className="block text-sm text-secondary">{description}</span>}
    </span>
    <LuChevronRight aria-hidden="true" className="h-5 w-5 shrink-0 text-secondary" />
  </Link>
);

export default ActionLink;