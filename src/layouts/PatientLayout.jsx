import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../features/patient/components/Sidebar.jsx";
import Topbar from "../features/patient/components/Topbar.jsx";
import { getPatientProfile } from "../features/patient/api/patientApi.js";
import { useAsync } from "../lib/useAsync.js";

const PatientLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: patient } = useAsync(getPatientProfile);
  const unreadCount = 3; // TODO: comes from the notifications API (step for Notifications page)

  return (
    <div className="min-h-dvh bg-white lg:flex">
      {/* Dark backdrop behind the mobile menu — tap to close */}
      {menuOpen && (
        <div aria-hidden="true" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-30 bg-black/40 lg:hidden" />
      )}

      <Sidebar patient={patient} unreadCount={unreadCount} open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar patient={patient} unreadCount={unreadCount} onMenuClick={() => setMenuOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet context={{ patient }} />
        </main>
      </div>
    </div>
  );
};

export default PatientLayout;