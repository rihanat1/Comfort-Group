import {
  LuBell, LuCalendarClock, LuCircleHelp, LuFileText,
  LuHistory, LuHouse, LuUser, LuWallet,
} from "react-icons/lu";

export const navItems = [
  { to: "/patient", label: "Dashboard", icon: LuHouse, end: true },
  { to: "/patient/allocation", label: "My Allocation", icon: LuWallet },
  { to: "/patient/history", label: "Support History", icon: LuHistory },
  { to: "/patient/upcoming", label: "Upcoming Support", icon: LuCalendarClock },
  { to: "/patient/documents", label: "Documents", icon: LuFileText },
  { to: "/patient/profile", label: "Profile", icon: LuUser },
  { to: "/patient/notifications", label: "Notification", icon: LuBell, showUnread: true },
  { to: "/patient/help", label: "Help & Support", icon: LuCircleHelp },
];