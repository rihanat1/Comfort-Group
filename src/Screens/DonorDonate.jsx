import { FiArrowRight, FiHeart } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import DonorLayout from "../Components/DonorLayout";
import Card from "../Components/Card";
import StatCard from "../Components/StatCard";
import Button1 from "../Components/Button1";
import doctorGreen from "../assets/Images/donor/doctor-green.png";
import bannerShape from "../assets/Images/donor/banner-shape.png";

// ---------- SAMPLE DATA ----------
// Fake data so the page has something to show.
// Later this will come from the backend.

const recentActivity = [
  { id: 1, title: "General Support", date: "Aug 17, 2026", type: "One-time", amount: 25000 },
  { id: 2, title: "General Support", date: "Aug 10, 2026", type: "One-time", amount: 25000 },
  { id: 3, title: "General Support", date: "Aug 03, 2026", type: "One-time", amount: 25000 },
];

const howItHelps = [
  { id: 1, title: "Medication Support", text: "Can provide essential medication for a patient for up to 1 month.", amount: 5000 },
  { id: 2, title: "Medical Equipment", text: "Can provide basic medical equipment for a patient in need.", amount: 15000 },
  { id: 3, title: "Food & Nutrition", text: "Can provide nutritious meals for a patient for up to 1 month.", amount: 3000 },
];

// ---------- THE PAGE ----------
const DonorDonate = () => {
  return (
    <DonorLayout active="Donate">
      {/* Big green banner */}
      <Card className="mt-6 p-2.5">
        <div className="relative overflow-hidden rounded-3xl bg-[#85f07f] p-8 lg:px-12 lg:py-14">
          {/* the blue shape on the right (hidden on small screens) */}
          <img
            src={bannerShape}
            alt=""
            className="absolute bottom-0 right-0 hidden h-[85%] md:block"
          />

          {/* z-10 keeps the content on top of the blue shape */}
          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            {/* left side */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-green">
                  <IoWalletOutline />
                </span>
                <p className="text-2xl font-medium text-buttonPrimary">Available</p>
              </div>
              <p className="mt-6 text-5xl font-extrabold text-buttonPrimary lg:text-6xl">
                ₦185,000
              </p>
              <div className="mt-8 w-full max-w-[314px]">
                <Button1 text="Donate Now" extraStyling="!py-2.5 !text-base" />
              </div>
            </div>

            {/* right side: two small cards */}
            <div className="flex w-full flex-col gap-5 md:w-[297px]">
              <StatCard
                icon={<img src={doctorGreen} alt="" className="h-6 w-6 object-contain" />}
                label="Patients Supported"
                value="12"
              />
              <StatCard
                icon={<img src={doctorGreen} alt="" className="h-6 w-6 object-contain" />}
                label="Active Cause"
                value="3"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Recent activity + How your donation can help */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-secondary/70">
              Recent Activity
            </h2>
            <a href="#" className="flex items-center gap-2 text-sm text-secondary/70">
              View all <FiArrowRight />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
              >
                <div>
                  <p className="font-semibold text-secondary/70">{item.title}</p>
                  <p className="text-sm text-secondary/60">
                    {item.date} - {item.type}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p className="font-semibold text-secondary/70">
                    ₦{item.amount.toLocaleString()}
                  </p>
                  <span className="rounded-full bg-green/10 px-4 py-1 text-sm font-medium text-green">
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-secondary/70">
            Your donation can help
          </h2>
          <p className="mb-3 text-sm text-secondary/60">
            See how your support makes a real difference.
          </p>

          {howItHelps.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-4 border-t py-4"
            >
              <div>
                <p className="font-semibold text-secondary/70">{item.title}</p>
                <p className="text-sm text-secondary/60">{item.text}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-semibold text-secondary/70">
                  ~ ₦{item.amount.toLocaleString()}
                </p>
                <p className="text-sm text-secondary/60">Per patient</p>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Light green strip at the bottom */}
      <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-green/10 p-8 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-6">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-green">
            <FiHeart />
          </span>
          <div>
            <p className="font-semibold text-green">Real People. Real Impact</p>
            <p className="text-sm text-secondary/60">
              Your donation helps patients get the care they need, supports
              healthcare providers, and creates healthier communities.
            </p>
          </div>
        </div>

        {/* thin line between the two parts (only on wide screens) */}
        <div className="hidden h-16 w-px bg-green/30 md:block" />

        <div className="text-center md:w-[260px]">
          <p className="text-sm font-semibold text-green">Trusted & Secure</p>
          <p className="mt-1 text-sm text-secondary/60">
            Your data and information are always protected.
          </p>
        </div>
      </div>
    </DonorLayout>
  );
};

export default DonorDonate;
