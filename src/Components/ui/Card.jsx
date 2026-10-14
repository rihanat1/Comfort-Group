import { cn } from "../../lib/cn.js";

const Card = ({ as: Tag = "section", className, children, ...props }) => (
  <Tag className={cn("rounded-2xl border border-gray-100 bg-white p-5 shadow-md", className)} {...props}>
    {children}
  </Tag>
);

export default Card;