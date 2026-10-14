import { PageError, PageLoader } from "../../../Components/ui";
import { useAsync } from "../../../lib/useAsync.js";
import { getAllocation, getSupports } from "../api/patientApi.js";
import { getNextSupport, summarizeAllocation, summaryByCategory } from "../utils/summary.js";
import StatGrid from "../Components/dashboard/StatGrid.jsx";
import AllocationOverview from "../Components/dashboard/AllocationOverview.jsx";
import NextSupportCard from "../Components/dashboard/NextSupportCard.jsx";
import AllocationPanel from "../Components/dashboard/AllocationPanel.jsx";
import SupportSummary from "../Components/dashboard/SupportSummary.jsx";
import MiniCalendar from "../Components/MiniCalendar.jsx";

// Defined outside the component so useAsync gets the same function every render.
const loadDashboard = async () => {
  const [allocation, supports] = await Promise.all([getAllocation(), getSupports()]);
  return { allocation, supports };
};

const PatientDashboard = () => {
  const { data, loading, error, reload } = useAsync(loadDashboard);

  if (loading) return <PageLoader />;
  if (error) return <PageError onRetry={reload} />;

  const { allocation, supports } = data;
  const summary = summarizeAllocation(allocation, supports);
  const next = getNextSupport(supports);
  const latestCompleted = supports
    .filter((s) => s.status === "completed")
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const categories = summaryByCategory(supports, summary.total);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="sr-only">Dashboard</h1>

      <StatGrid summary={summary} allocation={allocation} />

      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <AllocationOverview summary={summary} supports={supports} />
        <NextSupportCard support={next} />
      </div>

      <AllocationPanel allocation={allocation} summary={summary} latestSupport={latestCompleted} />

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <SupportSummary items={categories} />
        <MiniCalendar highlightDates={supports.map((s) => s.date)} />
      </div>
    </div>
  );
};

export default PatientDashboard;