import "./App.css";
import Home from "./Menu/Home";
import About from "./Menu/About";
import Project from "./Menu/Project";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
