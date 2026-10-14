import { Navigate } from "react-router-dom";
import AllPaths from "./AllPaths.js";
import PatientLayout from "../layouts/PatientLayout.jsx";
import PatientDashboard from "../features/patient/pages/PatientDashboard.jsx";
import MyAllocation from "../features/patient/pages/MyAllocation.jsx";
import SupportHistory from "../features/patient/pages/SupportHistory.jsx";
import UpcomingSupport from "../features/patient/pages/UpcomingSupport.jsx";
import Documents from "../features/patient/pages/Documents.jsx";
import PatientProfile from "../features/patient/pages/PatientProfile.jsx";
import Notifications from "../features/patient/pages/Notifications.jsx";
import HelpSupport from "../features/patient/pages/HelpSupport.jsx";
import PatientNotFound from "../features/patient/pages/PatientNotFound.jsx";
import LandingPage from "../Screens/LandingPage.jsx";


const AllRoutes = [
  { path: AllPaths.home, element: <LandingPage /> },
  {
    path: AllPaths.patientDashboard,
    element: <PatientLayout />,
    children: [
      { index: true, element: <PatientDashboard /> },
      { path: AllPaths.patientAllocation, element: <MyAllocation /> },
      { path: AllPaths.patientHistory, element: <SupportHistory /> },
      { path: AllPaths.patientUpcoming, element: <UpcomingSupport /> },
      { path: AllPaths.patientDocuments, element: <Documents /> },
      { path: AllPaths.patientProfile, element: <PatientProfile /> },
      { path: AllPaths.patientNotifications, element: <Notifications /> },
      { path: AllPaths.patientHelp, element: <HelpSupport /> },
      { path: AllPaths.notFound, element: <PatientNotFound /> },
    ],
  },
];

export default AllRoutes;