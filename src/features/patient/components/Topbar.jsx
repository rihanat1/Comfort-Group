import { Link } from "react-router-dom";
import { LuBell, LuMenu } from "react-icons/lu";
import Avatar from "./Avatar.jsx";

const Topbar = ({ patient, unreadCount, onMenuClick }) => {
  const firstName = patient?.fullName?.split(" ")[0];

  return (
    <header className="sticky top-0 z-20 bg-white px-4 pt-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-md">
        <button type="button" onClick={onMenuClick} aria-label="Open menu" className="rounded-lg p-1 text-primary lg:hidden">
          <LuMenu className="h-6 w-6" />
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-green">
            Welcome back{firstName ? `, ${firstName}` : ""}
          </p>
          <p className="truncate text-xs text-secondary">Here's an overview of your support.</p>
        </div>

        <Link to="/patient/notifications" aria-label={`Notifications, ${unreadCount} unread`} className="relative rounded-full p-2 text-primary hover:bg-cardBg">
          <LuBell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {unreadCount}
            </span>
          )}
        </Link>

        <Link to="/patient/profile" aria-label="Your profile">
          <Avatar name={patient?.fullName} src={patient?.photoUrl} className="h-10 w-10 text-sm" />
        </Link>
      </div>
    </header>
  );
};

export default Topbar;