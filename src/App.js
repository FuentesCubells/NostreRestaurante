import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./pages/home";
import RefundPolicy from "./pages/refundPolicy";
import PrivacyPolicy from "./pages/privacyPolicy";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
