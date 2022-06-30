import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './page/Sheared/Navbar/Navbar';
import Home from './page/Home/Home/Home';
import About from './page/Home/About/About';
import Login from './page/Login/Login';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
