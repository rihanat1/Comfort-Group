import { cn } from "../../lib/cn.js";

const tones = {
  success: "bg-green/10 text-green",
  info: "bg-blue-50 text-blue-600",
  warning: "bg-yellow-50 text-yellow-600",
  navy: "bg-buttonPrimary/10 text-buttonPrimary",
  neutral: "bg-cardBg text-secondary",
};

const Badge = ({ tone = "neutral", icon: Icon, className, children }) => (
  <span className={cn("inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium", tones[tone], className)}>
    {Icon && <Icon aria-hidden="true" className="h-3.5 w-3.5" />}
    {children}
  </span>
);

export default Badge;