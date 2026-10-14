import { LuChartColumn, LuCoins, LuWallet } from "react-icons/lu";
import { Card, CardHeader, PageError, PageLoader, StatCard, ViewAllLink } from "../../../Components/ui";
import { formatNaira } from "../../../lib/format.js";
import { useAsync } from "../../../lib/useAsync.js";
import { getActivity, getAllocation, getSupports } from "../api/patientApi.js";
import { breakdownByCategory, byNewest, summarizeAllocation } from "../utils/summary.js";
import AllocationUsage from "../Components/allocation/AllocationUsage.jsx";
import QuickActions from "../Components/allocation/QuickActions.jsx";
import RecentActivity from "../Components/allocation/RecentActivity.jsx";
import AllocationBreakdown from "../Components/allocation/AllocationBreakdown.jsx";
import SupportTable from "../Components/SupportTable.jsx";
import SupportMattersCard from "../Components/allocation/SupportMattersCard.jsx";
import AllPaths from "../../../routes/AllPaths.js";
import NeedSupportBanner from "../Components/allocation/NeedSupportBanner.jsx";

const loadAllocationPage = async () => {
    const [allocation, supports, activity] = await Promise.all([getAllocation(), getSupports(), getActivity()]);
    return { allocation, supports, activity };
};

const MyAllocation = () => {
    const { data, loading, error, reload } = useAsync(loadAllocationPage);

    if (loading) return <PageLoader />;
    if (error) return <PageError onRetry={reload} />;

    const { allocation, supports, activity } = data;
    const summary = summarizeAllocation(allocation, supports);
    const breakdown = breakdownByCategory(supports, summary.total);
    const transactions = supports
        .filter((s) => s.status !== "scheduled") // drop future ones; they haven't happened yet
        .sort(byNewest)                          // newest first
        .slice(0, 5);                            // keep only the first 5

    return (
        <div className="flex flex-col gap-6">
            <h1 className="sr-only">My Allocation</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <StatCard icon={LuWallet} label="Available Support" value={formatNaira(summary.remaining)} hint="Ready for use" tone="green" />
                <StatCard icon={LuCoins} label="Allocation" value={formatNaira(summary.total)} hint="Total approved" />
                <StatCard icon={LuChartColumn} label="Used" value={formatNaira(summary.used)} hint="Amount used" tone="red" />
            </div>

            <AllocationUsage summary={summary} />

            <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
                <QuickActions />
                <RecentActivity items={activity} />
            </div>

            <AllocationBreakdown items={breakdown} />

            <div className="grid gap-6 lg:grid-cols-[3fr_1fr]">
                <Card>
                    <CardHeader title="Transaction History" action={<ViewAllLink to={AllPaths.patientHistory} />} />
                    <SupportTable supports={transactions} />
                </Card>
                <SupportMattersCard />
            </div>
            <NeedSupportBanner /> 
        </div>
    );
};

export default MyAllocation;