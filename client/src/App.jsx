import Home from "@/pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ModalProvider } from "./context/ModalContext";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
// import Dashboard from "./components/layout/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/layout/ForgotPassword";
import ResetPassword from "./components/layout/ResetPassword";
import Tabs from "./components/layout/Tabs";
import KeralaPsc from "./components/layout/KeralaPsc";
import RRB from "./components/layout/RRB";
import TryMT from "./components/layout/TryMT";
import CourseDetails from "./components/layout/CourseDetails";
import SSC from "./components/layout/SSC";
import OtpForLogin from "./components/layout/OtpForLogin";
import OtpVerification from "./components/layout/OtpVerification";
import SetUserProfile from "./components/layout/setUserProfile";
import DashboardKpsc from "./components/layout/DashboardKpsc";




const App = () => {

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>

      <ModalProvider>
       

        <Routes>

          {/* Landing page */}
          <Route path="/" element={<Home />} />

          {/* Protected dashboard */}
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}

          <Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/reset-password/:token" element={<ResetPassword/>}/>

<Route path="/tabs" element={<Tabs />} />

<Route path="/courses/kerala-psc" element={<KeralaPsc />} />
<Route path="/courses/rrb" element = {<RRB />} />
<Route path="/courses/ssc" element = {<SSC />} />
<Route path="/tryMocktest" element = {<TryMT />} />
<Route path="/course/:id" element={<CourseDetails />} />
<Route path="/sendOtpLogin" element={<OtpForLogin />} />
  <Route path="/otp_verification" element={<OtpVerification />} />
  <Route path="/setUserProfile" element={<SetUserProfile />} />
<Route path="/kspc_dashboard" element={<DashboardKpsc />} />

        </Routes>
         <ToastContainer position="top-center" autoClose={2000} />

      </ModalProvider>

    </Router>
  );
};

export default App;