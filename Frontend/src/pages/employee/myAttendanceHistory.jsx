// src/pages/employee/MyAttendanceHistory.jsx

import { useEffect } from "react";
import { useAttendance } from "../../context/AttendanceContext.jsx";

import Navbar from "../../components/common/Navbar.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import Footer from "../../components/common/Footer.jsx";
import Loader from "../../components/common/Loader.jsx";
import AttendanceTable from "../../components/employee/AttendanceTable.jsx";

export default function MyAttendanceHistory() {
  const { history, loading, fetchHistory } = useAttendance();

  useEffect(() => {
    fetchHistory();
  }, []);

  if (loading && !history.length) {
    return <Loader fullScreen />;
  }

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
              My Attendance History
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              View your complete attendance records.
            </p>
          </div>

          {/* Attendance Table */}
          <AttendanceTable data={history} />

        </main>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}