import IconCircle from "./IconCircle.jsx";

const CardHeader = ({ title, icon, action }) => (
  <div className="mb-4 flex items-center justify-between gap-3">
    <h2 className="flex items-center gap-2 text-lg font-semibold text-secondary">
      {icon && <IconCircle icon={icon} className="h-8 w-8" />}
      {title}
    </h2>
    {action}
  </div>
);

export default CardHeader;