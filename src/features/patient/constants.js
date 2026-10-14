import { LuAccessibility, LuGraduationCap, LuPackage, LuPill, LuUtensils } from "react-icons/lu";

export const CATEGORIES = {
  medical:   { label: "Medical Support",   icon: LuPill,          color: "#16b81c" },
  food:      { label: "Food Support",      icon: LuUtensils,      color: "#0b2a66" },
  education: { label: "Education Support", icon: LuGraduationCap, color: "#0a8f10" },
  equipment: { label: "Equipment Support", icon: LuAccessibility, color: "#f59e0b" },
  other:     { label: "Other Support",     icon: LuPackage,       color: "#6b6b6b" },
};

export const STATUSES = {
  completed:   { label: "Completed",   tone: "success" },
  in_progress: { label: "In Progress", tone: "info" },
  pending:     { label: "Pending",     tone: "warning" },
  scheduled:   { label: "Scheduled",   tone: "navy" },
};
