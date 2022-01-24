import React from "react";
import "./App.css";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Saves from "./components/Saves";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saves" element={<Saves />} />
      </Routes>
    </Router>
  );
}

export default App;
