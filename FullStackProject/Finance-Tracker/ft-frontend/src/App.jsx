import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SignUp from "./Pages/Auth/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="relative h-screen bg-gray-900 text-white">
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
        >
          <NavBar />
          <div className="w-full h-[calc(100vh-120px)]">
            <Routes>
              {/* <SignUp /> */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
