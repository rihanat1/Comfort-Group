import Card from "./Card";

// A small card with an icon, a label and a big number.
// Props:
//   icon       - the picture or icon
//   label      - small title, for example "Patients Supported"
//   value      - the big number
//   note       - small text under the number (optional)
//   valueColor - Tailwind color class for the number
//   ownCircle  - true if the picture already has its own circle inside it
const StatCard = ({
  icon,
  label,
  value,
  note,
  valueColor = "text-secondary/70",
  ownCircle = false,
}) => {
  return (
    <Card className="flex items-center gap-4 p-5">
      {ownCircle ? (
        <div className="shrink-0">{icon}</div>
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green/10 text-2xl text-green">
          {icon}
        </div>
      )}

      <div>
        <p className="font-semibold text-secondary/60">{label}</p>
        <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
        {note && <p className="text-sm text-secondary/60">{note}</p>}
      </div>
    </Card>
  );
};

export default StatCard;
