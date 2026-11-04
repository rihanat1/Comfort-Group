import DonorSidebar from "./DonorSidebar";
import DonorHeader from "./DonorHeader";

// The frame shared by every donor page: sidebar on the left,
// greeting bar on top, and the page content (children) underneath.
// Props: active - which sidebar link should be green
const DonorLayout = ({ active, children }) => {
  // TEMPORARY: later this will come from the logged in user
  const userName = "Darrell Steward";

  return (
    <div className="flex min-h-screen bg-white">
      <DonorSidebar active={active} name={userName} />

      <main className="min-w-0 flex-1 p-4 sm:p-6">
        <DonorHeader name={userName} />
        {children}
      </main>
    </div>
  );
};

export default DonorLayout;
