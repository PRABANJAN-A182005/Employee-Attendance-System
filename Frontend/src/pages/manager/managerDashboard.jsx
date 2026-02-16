import { useEffect } from "react";
import Navbar from "../../components/common/Navbar.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import Footer from "../../components/common/Footer.jsx";
import Loader from "../../components/common/Loader.jsx";

import WeeklyTrendChart from "../../components/manager/WeeklyTrendChart.jsx";
import DepartmentChart from "../../components/manager/DepartmentChart.jsx";
import AbsentList from "../../components/manager/AbsentList.jsx";

import { useAuth } from "../../context/AuthContext.jsx";
import { useAttendance } from "../../context/AttendanceContext.jsx";

export default function ManagerDashboard() {
  const { user } = useAuth();
  const { managerStats, loading, fetchManagerDashboard } = useAttendance();

  useEffect(() => {
    if (user?.role === "manager") {
      fetchManagerDashboard();
    }
  }, [user]);

  if (!user) return <Loader fullScreen />;

  if (user.role !== "manager") {
    return <div className="p-8 text-red-500">Access Denied</div>;
  }

  if (loading && !managerStats) {
    return <Loader fullScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8 space-y-8">
          <h1 className="text-2xl font-semibold text-[#1E1E1E]">
            Manager Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <p>Total Employees</p>
              <h2>{managerStats?.totalEmployees || 0}</h2>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <p>Present Today</p>
              <h2>{managerStats?.presentToday || 0}</h2>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <p>Absent Today</p>
              <h2>{managerStats?.absentToday || 0}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WeeklyTrendChart data={managerStats?.weeklyTrend || []} />
            <DepartmentChart data={managerStats?.departmentWise || []} />
          </div>

          <AbsentList data={managerStats?.absentEmployees || []} />
        </main>
      </div>

      <Footer />
    </div>
  );
}