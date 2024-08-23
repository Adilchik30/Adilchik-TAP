import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TapQism from "./tapQism/TapQism";
import Home from "./home/Home";

function App() {
  return (
      <Routes>
        <Route path="/*" element={<TapQism />} />
      </Routes>
  );
}

export default App;

