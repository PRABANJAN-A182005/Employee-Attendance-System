// src/pages/manager/AllEmployeesAttendance.jsx

import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import Footer from "../../components/common/Footer.jsx";
import Loader from "../../components/common/Loader.jsx";
import EmployeeTable from "../../components/manager/Employeetable.jsx";

import { useAttendance } from "../../context/AttendanceContext.jsx";

export default function AllEmployeesAttendance() {
  const { allEmployeesAttendance, fetchAllEmployeesAttendance, loading } =
    useAttendance();

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllEmployeesAttendance();
  }, []);

  if (loading && !allEmployeesAttendance?.length) {
    return <Loader fullScreen />;
  }

  // Basic filter (by name or employeeId)
  const filteredData = allEmployeesAttendance?.filter((item) => {
  const name = item.userId?.name?.toLowerCase() || "";
  const employeeId = item.userId?.employeeId?.toLowerCase() || "";

  return (
    name.includes(search.toLowerCase()) ||
    employeeId.includes(search.toLowerCase())
  );
});

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
              All Employees Attendance
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Monitor attendance records across departments.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
            <input
              type="text"
              placeholder="Search by name or Employee ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          {/* Employee Table */}
          <EmployeeTable data={filteredData || []} />

        </main>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}