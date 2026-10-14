import { useRoutes } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes.jsx";

export default function App() {
  return useRoutes(AllRoutes);
}
