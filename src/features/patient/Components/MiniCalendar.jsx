import { LuCalendarDays } from "react-icons/lu";
import { cn } from "../../../lib/cn.js";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

const MiniCalendar = ({ highlightDates = [] }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = today.toLocaleDateString("en-NG", { month: "long", year: "numeric" });

  // Day numbers in this month that have a support.
  const highlighted = new Set(
    highlightDates
      .map((d) => new Date(d))
      .filter((d) => d.getFullYear() === year && d.getMonth() === month)
      .map((d) => d.getDate())
  );

  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <section aria-label={`Calendar, ${monthName}`} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
      <header className="flex items-center gap-3 bg-buttonPrimary px-4 py-3 text-white">
        <LuCalendarDays aria-hidden="true" className="h-5 w-5" />
        <h2 className="font-semibold">{monthName}</h2>
      </header>

      <div className="grid grid-cols-7 gap-y-1 p-3 text-center text-sm text-secondary">
        {WEEKDAYS.map((d, i) => (
          <span key={i} aria-hidden="true" className="pb-1 text-xs font-medium">{d}</span>
        ))}
        {cells.map((day, i) => (
          <span
            key={i}
            className={cn(
              "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
              !day && "invisible",
              day === today.getDate() && "bg-red-500 font-semibold text-white",
              day !== today.getDate() && highlighted.has(day) && "bg-green/15 font-semibold text-green"
            )}
          >
            {day}
          </span>
        ))}
      </div>

      <p className="flex items-center gap-2 border-t border-gray-100 px-4 py-2 text-xs text-secondary">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green" /> Support day
        <span aria-hidden="true" className="ml-3 h-2 w-2 rounded-full bg-red-500" /> Today
      </p>
    </section>
  );
};

export default MiniCalendar;