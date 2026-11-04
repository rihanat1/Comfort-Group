import { FiChevronLeft, FiChevronRight, FiEye, FiArrowRight } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonorLayout from "../Components/DonorLayout";
import Card from "../Components/Card";
import StatCard from "../Components/StatCard";
import DonutChart from "../Components/DonutChart";
import Button1 from "../Components/Button1";
import Button2 from "../Components/Button2";
import handHeart from "../assets/Images/donor/hand-heart.png";
import doctorGreen from "../assets/Images/donor/doctor-green.png";
import donationChart from "../assets/Images/donor/donation-chart.png";

// ---------- SAMPLE DATA ----------
// Fake data so the page has something to show.
// Later this will come from the backend.

const donationBreakdown = [
  { label: "Medication Support", percent: 40, amount: 74000, color: "#0be200" },
  { label: "Medical Equipment", percent: 25, amount: 46250, color: "#002657" },
  { label: "Transport", percent: 20, amount: 37000, color: "#c620df" },
  { label: "Food & Nutrition", percent: 15, amount: 27750, color: "#20e0d0" },
];

const supportedPatients = [
  { id: "Patient 001", support: "Medication Support" },
  { id: "Patient 002", support: "Medical Equipment" },
  { id: "Patient 003", support: "Transport" },
  { id: "Patient 004", support: "Food & Nutrition" },
];

const recentDonations = [
  { id: 1, date: "Aug 22, 2026", purpose: "Medication Support", amount: 25000 },
  { id: 2, date: "Aug 15, 2026", purpose: "Medication Support", amount: 25000 },
  { id: 3, date: "Aug 08, 2026", purpose: "Medical Equipment", amount: 25000 },
  { id: 4, date: "Aug 01, 2026", purpose: "Transport", amount: 25000 },
  { id: 5, date: "Jul 25, 2026", purpose: "Food & Nutrition", amount: 25000 },
];

const updates = [
  { id: 1, title: "New patient supported", text: "Patient 004 received medical equipment support.", time: "2 hours ago" },
  { id: 2, title: "New patient supported", text: "Patient 004 received medical equipment support.", time: "2 hours ago" },
  { id: 3, title: "New patient supported", text: "Patient 004 received medical equipment support.", time: "2 hours ago" },
];

// ---------- THE PAGE ----------
const DonorDashboard = () => {
  return (
    <DonorLayout active="Dashboard">
      {/* 3 small cards at the top */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          icon={<img src={handHeart} alt="" className="h-14 w-14" />}
          ownCircle
          label="Total Donated"
          value="₦185,000"
          note="Lifetime donations"
          valueColor="text-green"
        />
        <StatCard
          icon={<img src={doctorGreen} alt="" className="h-6 w-6 object-contain" />}
          label="Patients Supported"
          value="12"
          note="Total patients"
        />
        <StatCard
          icon={<FaHandHoldingHeart />}
          label="Donations"
          value="8"
          note="Total donations"
        />
      </div>

      {/* The line chart. It is a picture exported from Figma for now. */}
      <img
        src={donationChart}
        alt="Your donation overview"
        className="mt-8 w-full"
      />

      {/* Donut chart + Supported patients */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-secondary/70">
            Where Your Donation Goes
          </h2>
          <p className="mb-6 text-sm text-secondary/60">
            Breakdown of how your donations are used.
          </p>
          <DonutChart segments={donationBreakdown} total={185000} />
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-secondary/70">
            Supported Patients
          </h2>
          <p className="mb-2 text-sm text-secondary/60">
            Patients you've helped (anonymized)
          </p>

          {supportedPatients.map((patient) => (
            <div
              key={patient.id}
              className="flex cursor-pointer items-center justify-between border-t py-3"
            >
              <div>
                <p className="font-semibold text-secondary/70">{patient.id}</p>
                <p className="text-sm text-secondary/60">{patient.support}</p>
              </div>
              <FiChevronRight className="text-xl text-secondary/60" />
            </div>
          ))}

          <a href="#" className="mt-2 flex items-center gap-2 text-sm font-semibold text-green">
            View All Patients <FiArrowRight />
          </a>
        </Card>
      </div>

      {/* Recent donations table */}
      <Card className="mt-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold text-secondary/70">
          Recent Donations
        </h2>

        {/* overflow-x-auto = the table scrolls sideways on small screens */}
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            {/* table head */}
            <div className="grid grid-cols-5 rounded-lg bg-[#e5e9ee] px-4 py-3 text-center text-sm font-medium text-secondary/70">
              <p>Date</p>
              <p>Purpose</p>
              <p>Amount</p>
              <p>Status</p>
              <p>Action</p>
            </div>

            {/* one row for each donation */}
            {recentDonations.map((donation) => (
              <div
                key={donation.id}
                className="grid grid-cols-5 items-center border-b px-4 py-4 text-center text-sm text-secondary/70"
              >
                <p>{donation.date}</p>
                <p>{donation.purpose}</p>
                <p>₦{donation.amount.toLocaleString()}</p>
                <div>
                  <span className="rounded-full bg-green/10 px-5 py-1.5 font-medium text-green">
                    Completed
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => console.log("View donation:", donation)}
                    className="inline-flex items-center gap-2 rounded border border-green px-5 py-1.5 font-medium text-green"
                  >
                    <FiEye /> View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* page buttons (they don't do anything yet) */}
        <div className="mt-4 flex items-center justify-between text-sm text-secondary/60">
          <p>Showing 1-5 of 5 donations</p>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded border border-buttonPrimary p-2 text-buttonPrimary">
              <FiChevronLeft />
            </button>
            <button type="button" className="rounded bg-buttonPrimary px-3.5 py-1.5 text-white">
              1
            </button>
            <button type="button" className="rounded border border-buttonPrimary p-2 text-buttonPrimary">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </Card>

      {/* Updates + Make a difference */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-secondary/70">Updates</h2>
          <p className="mb-2 text-sm text-secondary/60">
            Latest news and impact updates
          </p>

          {updates.map((update) => (
            <div
              key={update.id}
              className="flex cursor-pointer items-center justify-between gap-3 border-t py-3"
            >
              <div>
                <p className="font-semibold text-secondary/70">{update.title}</p>
                <p className="text-sm text-secondary/60">
                  {update.text} <span className="text-xs">{update.time}</span>
                </p>
              </div>
              <FiChevronRight className="shrink-0 text-xl text-secondary/60" />
            </div>
          ))}

          <a href="#" className="mt-2 flex items-center gap-2 text-sm font-semibold text-green">
            View All Updates <FiArrowRight />
          </a>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-secondary/70">
              Make a Difference
            </h2>
            <p className="mb-4 text-sm text-secondary/60">
              Every donation brings hope and better health to those in need.
            </p>

            <Button1 text="Donate Now" extraStyling="!py-2 !text-base" />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button2 text="One-time Donation" extraStyling="!py-2 !text-sm" />
              <Button2 text="Monthly Donation" extraStyling="!py-2 !text-sm" />
            </div>
          </Card>

          {/* a plain box here (not Card) because Card is always white */}
          <div className="rounded-2xl bg-green/10 p-6 shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-green/60">Your Impact</h2>
            <p className="mt-2 text-sm text-secondary/60">
              Your generous contributions help eligible patients access
              essential support, including medication, food, medical equipment
              and other critical resources.
            </p>
          </div>
        </div>
      </div>
    </DonorLayout>
  );
};

export default DonorDashboard;
