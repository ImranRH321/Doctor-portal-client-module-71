import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './page/Sheared/Navbar';
import Home from './page/Home/Home/Home';
import About from './page/Home/About/About';
import Login from './page/Login/Login';
import Appointment from './page/Home/Appointment/Appointment';
import SignUp from './page/Login/SignUp';
import RequireAuth from './page/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './page/Dashboard/Dashboard';
import MyAppointments from './page/Dashboard/MyAppointments';
import MyReview from './page/Dashboard/MyReview';
import MyHistory from './page/Dashboard/MyHistory';

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
        {/* ................. */}
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
        </Route>
       {/* ................. */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
