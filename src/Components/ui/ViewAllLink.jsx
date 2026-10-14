import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

const ViewAllLink = ({ to, children = "View All" }) => (
  <Link to={to} className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-green hover:underline">
    {children} <LuChevronRight aria-hidden="true" />
  </Link>
);


export default ViewAllLink;