import { Route, Routes } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes.jsx";

export default function App() {
  return (
    <Routes>
      {AllRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
    // <>
    // <DonateModal/>
    // </>
  );
}