// src/pages/manager/Reports.jsx

import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { useAttendance } from "../../context/AttendanceContext";
import { exportAttendanceCSV } from "../../services/attendanceService";

export default function Reports() {
  const { loading } = useAttendance();

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    department: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

 const handleExport = async () => {
  try {
    const response = await exportAttendanceCSV(filters);

    // Create blob from response
    const blob = new Blob([response.data], { type: "text/csv" });

    // Create temporary URL
    const url = window.URL.createObjectURL(blob);

    // Create invisible link
    const link = document.createElement("a");
    link.href = url;
    link.download = "attendance-report.csv";

    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Export failed:", error);
  }
};

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8 space-y-8">

          {/* Title */}
          <div>
            <h1 className="text-2xl font-semibold text-[#1E1E1E]">
              Attendance Reports
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Generate and export attendance reports.
            </p>
          </div>

          {/* Filter Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 max-w-3xl space-y-6">

            {/* Date Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

            </div>

            {/* Department Filter */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Department (Optional)
              </label>
              <input
                type="text"
                name="department"
                placeholder="Enter department"
                value={filters.department}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            {/* Export Button */}
            <div>
              <button
                onClick={handleExport}
                disabled={loading}
                className="px-6 py-2 bg-[#1E1E1E] text-white rounded-md hover:bg-emerald-500 hover:text-black transition duration-300 disabled:bg-gray-300 disabled:text-gray-600"
              >
                {loading ? "Generating..." : "Export CSV"}
              </button>
            </div>

          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}