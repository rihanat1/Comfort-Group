import { ActionLink, Card, CardHeader } from "../../../../Components/ui";
import AllPaths from "../../../../routes/AllPaths.js";

const actions = [
  { to: AllPaths.patientHistory, title: "View Allocation History", description: "See all your past support" },
  { to: AllPaths.patientHelp, title: "Request Additional Support", description: "Apply for more support" }, // TODO: real form once designed
  { to: AllPaths.patientHelp, title: "View Support Guidelines", description: "Learn how allocation works" },
];

const QuickActions = () => (
  <Card>
    <CardHeader title="Quick Actions" />
    <ul className="flex flex-col gap-3">
      {actions.map((action) => (
        <li key={action.title}>
          <ActionLink {...action} />
        </li>
      ))}
    </ul>
  </Card>
);

export default QuickActions;