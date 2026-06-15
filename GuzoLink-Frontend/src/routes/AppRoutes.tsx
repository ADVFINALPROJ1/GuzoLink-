import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Trips from "../pages/Trips";
import Destinations from "../pages/Destinations";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  );
}

export default AppRoutes;