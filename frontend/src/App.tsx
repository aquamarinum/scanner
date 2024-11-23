import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Report from "./pages/Report";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default App;
