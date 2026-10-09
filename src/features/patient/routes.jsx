import { Route } from "react-router-dom";
import PatientLayout from "../../layouts/PatientLayout.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import MyAllocation from "./pages/MyAllocation.jsx";
import SupportHistory from "./pages/SupportHistory.jsx";
import UpcomingSupport from "./pages/UpcomingSupport.jsx";
import Documents from "./pages/Documents.jsx";
import PatientProfile from "./pages/PatientProfile.jsx";
import Notifications from "./pages/Notifications.jsx";
import HelpSupport from "./pages/HelpSupport.jsx";
import PatientNotFound from "./pages/PatientNotFound.jsx";

// All patient routes live here so App.jsx only needs one line per feature,
// which keeps merge conflicts with the other branches small.
export const patientRoutes = (
  <Route path="/patient" element={<PatientLayout />}>
    <Route index element={<PatientDashboard />} />
    <Route path="allocation" element={<MyAllocation />} />
    <Route path="history" element={<SupportHistory />} />
    <Route path="upcoming" element={<UpcomingSupport />} />
    <Route path="documents" element={<Documents />} />
    <Route path="profile" element={<PatientProfile />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="help" element={<HelpSupport />} />
    <Route path="*" element={<PatientNotFound />} />
  </Route>
);