import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import AllPaths from "../../../../routes/AllPaths.js";

const NeedSupportBanner = () => (
  <section className="flex flex-col gap-4 rounded-2xl bg-green/10 p-5 sm:flex-row sm:items-center">
    <LuHeart aria-hidden="true" className="h-8 w-8 shrink-0 fill-green text-green" />
    <div className="flex-1">
      <h2 className="font-semibold text-primary">Need more support?</h2>
      <p className="text-sm text-secondary">
        Your wellbeing is our priority. If you need additional support, don't hesitate to reach out.
      </p>
    </div>
    <Link
      to={AllPaths.patientHelp}
      className="rounded-lg bg-white px-5 py-2.5 text-center text-sm font-semibold text-buttonPrimary shadow-sm hover:bg-buttonPrimary hover:text-white"
    >
      Request Support
    </Link>
  </section>
);

export default NeedSupportBanner;