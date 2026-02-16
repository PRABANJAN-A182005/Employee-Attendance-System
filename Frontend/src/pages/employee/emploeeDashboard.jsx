// src/pages/employee/EmployeeDashboard.jsx

import { useEffect } from "react";
import { useAttendance } from "../../context/AttendanceContext.jsx";

import Navbar from "../../components/common/Navbar.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import Footer from "../../components/common/Footer.jsx";
import Loader from "../../components/common/Loader.jsx";

import SummaryCards from "../../components/employee/SummaryCards.jsx";
import AttendanceCard from "../../components/employee/AttendanceCard.jsx";
import CheckInOutButton from "../../components/employee/CheckInOutButton.jsx";
import AttendanceTable from "../../components/employee/AttendanceTable.jsx";

export default function EmployeeDashboard() {
  const {
    todayStatus,
    history,
    summary,
    loading,
    fetchTodayStatus,
    fetchHistory,
    fetchSummary,
  } = useAttendance();

  useEffect(() => {
    fetchTodayStatus();
    fetchHistory();
    fetchSummary();
  }, []);

  if (loading && !todayStatus) {
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
              Employee Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Overview of your attendance activity.
            </p>
          </div>

          {/* Summary Cards */}
          <SummaryCards summary={summary} />

          {/* Attendance Card + Button */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AttendanceCard data={todayStatus} />
            <div className="flex items-start">
              <CheckInOutButton />
            </div>
          </div>

          {/* Recent Attendance Table */}
          <AttendanceTable data={history?.slice(0, 7)} />

        </main>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}