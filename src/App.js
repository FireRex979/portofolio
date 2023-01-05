import logo from './logo.svg';
import './App.css';
import Home from './Menu/Home';
import About from './Menu/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
