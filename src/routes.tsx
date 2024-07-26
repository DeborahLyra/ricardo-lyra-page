import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { UrologyPage } from "./pages/urologyPage/UrologyPage";
import { AndrologyPage } from "./pages/andrologyPage/AndrologyPage";

export  function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/urologia" element={<UrologyPage />} />
        <Route path="/andrologia" element={<AndrologyPage />} />
      </Routes>
    </Router>
  );
}

