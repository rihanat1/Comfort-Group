import { cn } from "../../lib/cn.js";

const IconCircle = ({ icon: Icon, className }) => (
  <span aria-hidden="true" className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10 text-green", className)}>
    <Icon className="h-5 w-5" />
  </span>
);

export default IconCircle;