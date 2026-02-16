// src/pages/employee/Profile.jsx

import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8">

          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-semibold text-[#1E1E1E]">
              My Profile
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              View your account information.
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 max-w-2xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              
              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-medium text-[#1E1E1E] mt-1">
                  {user?.name}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium text-[#1E1E1E] mt-1">
                  {user?.email}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Employee ID</p>
                <p className="font-medium text-[#1E1E1E] mt-1">
                  {user?.employeeId || "Not Assigned"}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Department</p>
                <p className="font-medium text-[#1E1E1E] mt-1">
                  {user?.department}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Role</p>
                <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                  {user?.role?.toUpperCase()}
                </span>
              </div>

            </div>

          </div>

        </main>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}