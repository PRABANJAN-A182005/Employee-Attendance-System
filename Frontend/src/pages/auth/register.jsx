// src/pages/auth/Register.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import Loader from "../../components/common/Loader.jsx";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    role: "employee", // default role
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await register(formData);

      // Role-based redirect
      if (data.role === "employee") {
        navigate("/employee/dashboard");
      } else {
        navigate("/manager/dashboard");
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader fullScreen />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#1E1E1E] text-center mb-6">
          Create Account
        </h2>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-md">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
              placeholder="Enter department"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
              placeholder="Create a password"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition bg-white"
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#1E1E1E] text-white py-2 rounded-md hover:bg-emerald-500 hover:text-black transition duration-300"
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}