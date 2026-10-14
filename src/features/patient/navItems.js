import {
  LuBell, LuCalendarClock, LuCircleHelp, LuFileText,
  LuHistory, LuHouse, LuUser, LuWallet,
} from "react-icons/lu";

import AllPaths from "../../routes/AllPaths.js";

export const navItems = [
  { to: AllPaths.patientDashboard, label: "Dashboard", icon: LuHouse, end: true },
  { to: AllPaths.patientAllocation, label: "My Allocation", icon: LuWallet },
  { to: AllPaths.patientHistory, label: "Support History", icon: LuHistory },
  { to: AllPaths.patientUpcoming, label: "Upcoming Support", icon: LuCalendarClock },
  { to: AllPaths.patientDocuments, label: "Documents", icon: LuFileText },
  { to: AllPaths.patientProfile, label: "Profile", icon: LuUser },
  { to: AllPaths.patientNotifications, label: "Notification", icon: LuBell, showUnread: true },
  { to: AllPaths.patientHelp, label: "Help & Support", icon: LuCircleHelp },
];