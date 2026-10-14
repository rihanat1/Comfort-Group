import { Card, CardHeader, ViewAllLink } from "../../../../Components/ui";
import { formatDateTime } from "../../../../lib/format.js";
import AllPaths from "../../../../routes/AllPaths.js";

const RecentActivity = ({ items }) => (
  <Card className="flex flex-col">
    <CardHeader title="Recent Activity" />
    {items.length === 0 ? (
      <p className="py-10 text-center text-sm text-secondary">No activity yet.</p>
    ) : (
      <ul className="divide-y divide-gray-100">
        {items.slice(0, 3).map((item) => (
          <li key={item.id} className="py-3 first:pt-0">
            <p className="text-sm font-semibold text-secondary">{item.title}</p>
            <p className="text-sm text-secondary">{item.description}</p>
            <p className="mt-0.5 text-xs text-secondary/80">{formatDateTime(item.at)}</p>
          </li>
        ))}
      </ul>
    )}
    <div className="mt-auto pt-4">
      <ViewAllLink to={AllPaths.patientNotifications}>View All Activity</ViewAllLink>
    </div>
  </Card>
);

export default RecentActivity;