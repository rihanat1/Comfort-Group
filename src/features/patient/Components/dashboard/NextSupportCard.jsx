import { LuClock } from "react-icons/lu";
import { Badge, Card, CardHeader, ViewAllLink } from "../../../../Components/ui";
import { formatNaira } from "../../../../lib/format.js";
import AllPaths from "../../../../routes/AllPaths.js";
import { CATEGORIES } from "../../constants.js";
import { daysUntil } from "../../utils/summary.js";

const NextSupportDetails = ({ support }) => {
  const date = new Date(support.date);
  const days = daysUntil(support.date);

  return (
    <>
      <div className="flex items-center gap-3 rounded-xl bg-cardBg p-3">
        <div className="w-16 shrink-0 overflow-hidden rounded-lg text-center">
          <p className="bg-green py-0.5 text-sm font-semibold text-white">{date.toLocaleDateString("en-NG", { month: "short" })}</p>
          <p className="bg-gray-300 text-xl font-bold text-primary">{date.getDate()}</p>
          <p className="bg-gray-300 pb-1 text-xs text-primary">{date.getFullYear()}</p>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-secondary">Next support date</p>
          <p className="font-semibold text-primary">{date.toLocaleDateString("en-NG", { day: "numeric", month: "long" })}</p>
        </div>
        <Badge tone="success">{days === 0 ? "Today" : `${days} ${days === 1 ? "day" : "days"} left`}</Badge>
      </div>

      <dl className="mt-5 flex flex-col gap-4 px-1">
        <div>
          <dt className="text-xs text-secondary">Support type</dt>
          <dd className="font-medium text-primary">{CATEGORIES[support.category]?.label}</dd>
        </div>
        <div>
          <dt className="text-xs text-secondary">Amount</dt>
          <dd className="font-semibold text-green">{formatNaira(support.amount)}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <p className="flex items-center justify-center gap-2 rounded-lg bg-buttonPrimary py-2.5 text-sm font-medium text-white">
          <LuClock aria-hidden="true" /> Scheduled
        </p>
      </div>
    </>
  );
};

const NextSupportCard = ({ support }) => (
  <Card className="flex flex-col">
    <CardHeader title="Next Support" action={<ViewAllLink to={AllPaths.patientUpcoming} />} />
    {support ? (
      <NextSupportDetails support={support} />
    ) : (
      <p className="py-10 text-center text-sm text-secondary">No upcoming support scheduled.</p>
    )}
  </Card>
);

export default NextSupportCard;