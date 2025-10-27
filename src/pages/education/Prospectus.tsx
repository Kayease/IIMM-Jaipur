import { useState } from "react";
import { Mail, Lock, User, Phone } from "lucide-react";
import logo from "@/assets/iimm-logo.png"; // replace with your actual logo path

export default function AdmissionPortal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must accept the terms and conditions!");
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1442] via-[#16225a] to-[#1f2e72]">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="p-8 pb-0 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Admission Portal
          </h2>
          <img
            src={logo}
            alt="IIMM Logo"
            className="mx-auto w-20 h-20 object-contain"
          />
          <p className="text-gray-500 mt-4 mb-6 text-sm">
            Fill the sign up form
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8 pt-0 space-y-4">
          <div className="flex space-x-2">
            <div className="relative w-1/2">
              <User className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
            <div className="relative w-1/2">
              <User className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Password (confirm)"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="text-sm text-gray-600">
              I agree with the{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          {!formData.agree && (
            <p className="text-red-500 text-sm">
              You must accept terms and conditions
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-indigo-500 text-white py-2 rounded-md font-medium hover:bg-indigo-600 transition-all"
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}
