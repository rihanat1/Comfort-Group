import { Link } from "react-router-dom";
import { LuHeartHandshake } from "react-icons/lu";
import { Card, IconCircle } from "../../../../Components/ui";
import AllPaths from "../../../../routes/AllPaths.js";

const SupportMattersCard = () => (
  <Card className="flex flex-col items-center gap-3 text-center">
    <IconCircle icon={LuHeartHandshake} className="h-16 w-16 [&>svg]:h-8 [&>svg]:w-8" />
    <h2 className="text-lg font-semibold text-secondary">Your Support Matters</h2>
    <p className="text-sm text-secondary">We're here to make sure you get the right support, at the right time.</p>
    <Link
      to={AllPaths.patientHelp}
      className="mt-auto w-full rounded-lg bg-buttonPrimary py-2.5 text-sm font-semibold text-white hover:bg-green"
    >
      Contact Support
    </Link>
  </Card>
);

export default SupportMattersCard;