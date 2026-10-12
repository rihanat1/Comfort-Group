import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { patientRoutes } from "./features/patient/routes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* "/" becomes the landing page once Rihanat's branch is merged */}
        <Route path="/" element={<Navigate to="/patient" replace />} />
        {patientRoutes}
      </Routes>
    </BrowserRouter>
  );
}
