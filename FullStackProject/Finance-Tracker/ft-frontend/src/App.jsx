import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SignUp from "./Pages/Auth/SignUp";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [showContent, setShowContent] = useState(false);

  const endpoint = "http://localhost:8080/api/v1";

  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  const registerUser = (user) => {
    axios
      .post(`${endpoint}/users/register`, user)
      .then((res) => {
        console.log(res);
        toast.success("Account created successfully.", {
          autoClose: 2500,
          pauseOnHover: false,
        });
      })
      .catch((err) => console.log(err));
  };

  const loginUser = (user) => {
    axios
      .post(`${endpoint}/users/login`, user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data?.data?.accessToken)
        );
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const getUserName = async () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    const res = await axios.get(`${endpoint}/users`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return res.data.userData.userName;
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Animated Blur Text */}
      {!showContent && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: -90 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={handleAnimationComplete}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center blur-[1px]">
            Welcome to Finance Tracker
          </h1>
        </motion.div>
      )}

      {/* Main Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col flex-grow"
        >
          <NavBar getUserName={getUserName} handleLogout={handleLogout} />
          <div className="flex flex-col flex-grow items-center justify-center">
            <Routes>
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route
                path="/signup"
                element={<SignUp registerUser={registerUser} />}
              />
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route
                path="/dashboard"
                element={<Dashboard getUserName={getUserName} />}
              />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
