import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipe1 from "./components/Recipe1";
import Recipe2 from "./components/Recipe2";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/1" element={<Recipe1 />} />
        <Route path="/recipe/2" element={<Recipe2 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
