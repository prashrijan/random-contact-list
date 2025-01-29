import React, { useState } from "react";
import {
  Footer,
  NavBar,
  SignUp,
  Login,
  HomePage,
  ContactUs,
  AboutUs,
  Dashboard,
  SkeletonLoader,
} from "./index";
import { motion } from "framer-motion";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const endpoint = "http://localhost:8080/api/v1";

  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  const registerUser = ({ userName, email, password }) => {
    axios
      .post(`${endpoint}/users/register`, { userName, email, password })
      .then((res) => {
        setErrors({});
        toast.success("Account created successfully.", {
          autoClose: 2500,
          pauseOnHover: false,
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 409) {
          setErrors({
            ...errors,
            userName: err.response?.data?.message,
            email: err.response?.data?.message,
          });
        }
        return;
      });
  };

  const loginUser = (user) => {
    setLoading(true);
    axios
      .post(`${endpoint}/users/login`, user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data?.data?.accessToken)
        );
        navigate("/dashboard");
        setErrors({});
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        if (err.response && err.response.status === 404) {
          setErrors({
            ...errors,
            email: "User with this email does not exist.",
            password: "",
          });
        } else if (err.response && err.response.status === 401) {
          setErrors({
            ...errors,
            password: "Invalid password.",
            email: "",
          });
        } else {
          setErrors({
            ...errors,
            email: "An error occurred. Please try again.",
            password: "",
          });
        }
      });
  };

  console.log(errors);

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
    localStorage.removeItem("username");
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

          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="flex flex-col flex-grow items-center justify-center">
              <Routes>
                <Route
                  path="/login"
                  element={
                    <Login
                      loginUser={loginUser}
                      errors={errors}
                      setErrors={setErrors}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <SignUp
                      registerUser={registerUser}
                      errors={errors}
                      setErrors={setErrors}
                    />
                  }
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
          )}

          <Footer />
          <ToastContainer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
