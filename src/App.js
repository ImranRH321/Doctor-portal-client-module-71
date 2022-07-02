import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './page/Sheared/Navbar';
import Home from './page/Home/Home/Home';
import About from './page/Home/About/About';
import Login from './page/Login/Login';
import Appointment from './page/Home/Appointment/Appointment';
import SignUp from './page/Login/SignUp';
import RequireAuth from './page/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
