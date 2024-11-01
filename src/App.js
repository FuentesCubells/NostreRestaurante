import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Asegúrate de usar BrowserRouter
import HomeComponent from "./pages/home";
import RefundPolicy from "./pages/refundPolicy";
import PrivacyPolicy from "./pages/privacyPolicy";

const NotFound = () => {
  return <Navigate to="/" />;
};

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
