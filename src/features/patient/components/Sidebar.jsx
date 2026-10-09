import { NavLink } from "react-router-dom";
import { LuArrowLeftRight, LuChevronDown, LuLogOut, LuX } from "react-icons/lu";
import { navItems } from "../navItems.js";
import { cn } from "../../../lib/cn.js";
import Avatar from "./Avatar.jsx";

const Sidebar = ({ patient, unreadCount, open, onClose }) => (
  <aside
    className={cn(
      "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-buttonPrimary text-white transition-transform duration-300",
      "lg:sticky lg:top-0 lg:h-dvh lg:translate-x-0 lg:rounded-tr-[2.5rem]",
      open ? "translate-x-0" : "-translate-x-full"
    )}
  >
    {/* Logo + close button (phones only) */}
    <div className="flex items-center justify-between px-6 py-6">
      <span className="text-lg font-bold">
        <span className="text-green">Comfort</span>Group
      </span>
      <button type="button" onClick={onClose} aria-label="Close menu" className="rounded-lg p-1 lg:hidden">
        <LuX className="h-6 w-6" />
      </button>
    </div>

    {/* Patient */}
    <div className="flex items-center gap-3 px-6 pb-6">
      <Avatar name={patient?.fullName} src={patient?.photoUrl} className="h-11 w-11 text-sm" />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{patient?.fullName}</p>
        <p className="flex items-center gap-1 text-xs text-green">
          Patient <LuChevronDown aria-hidden="true" />
        </p>
      </div>
    </div>

    {/* Links */}
    <nav aria-label="Patient" className="flex-1 overflow-y-auto px-4">
      <ul className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon, end, showUnread }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "bg-green text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
                  <span className="flex-1">{label}</span>
                  {showUnread && unreadCount > 0 && (
                    <span className={cn("rounded-full px-2 text-xs font-semibold", isActive ? "bg-white text-green" : "bg-green text-white")}>
                      {unreadCount}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
        <li>
          <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-white/10">
            <LuLogOut aria-hidden="true" className="h-5 w-5" />
            Logout
          </button>
        </li>
      </ul>
    </nav>

    {/* Switch to donor */}
    <div className="p-6">
      <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-green py-2.5 text-sm font-medium text-green hover:bg-green hover:text-white">
        <LuArrowLeftRight aria-hidden="true" />
        Switch To Donor
      </button>
    </div>
  </aside>
);

export default Sidebar;