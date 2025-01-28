import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const SignUp = ({ registerUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("Passwords doesnot match.");
      return;
    }
    registerUser({ userName, email, password });

    setUserName("");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
    navigate("/login");
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full  bg-gray-900 text-white p-5 gap-4">
      {/* Left Section */}
      <div className=" flex flex-col items-center md:items-start md:justify-center p-5 text-left">
        <img
          src="../../../public/grow-money.png"
          alt="Watch your money grow"
          className="mb-5 size-72"
        />
        <h1 className="text-3xl font-bold mb-2">Start Saving Early</h1>
        <p className="text-lg text-gray-400">
          Watch your money grow with consistency and smart decisions.
        </p>
      </div>
      {/* Right Section */}
      <form
        className=" bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={(e) => handleRegister(e)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {/* Username */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label
            htmlFor="username"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        {/* Email */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        {/* Password */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <span
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="text-gray-400" />
            ) : (
              <Eye className="text-gray-400" />
            )}
          </span>
        </div>
        {/* Confirm Password */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirm_password"
            id="confirm_password"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-600 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label
            htmlFor="confirm_password"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
          <span
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="text-gray-400" />
            ) : (
              <Eye className="text-gray-400" />
            )}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
