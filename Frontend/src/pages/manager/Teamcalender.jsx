// src/pages/manager/TeamCalendar.jsx

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Navbar from "../../components/common/Navbar";
import Sidebar from "../../components/common/Sidebar";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";
import { useAttendance } from "../../context/AttendanceContext";

export default function TeamCalendar() {
  const [date, setDate] = useState(new Date());

  const {
    teamCalendarData,
    fetchTeamCalendar,
    loading,
  } = useAttendance();

  useEffect(() => {
    fetchTeamCalendar();
  }, []);

  if (loading && !teamCalendarData) {
    return <Loader fullScreen />;
  }

  // Mark attendance status on calendar
const tileClassName = ({ date }) => {
  const formatted = date.toLocaleDateString("en-CA");

  const hasAbsent = teamCalendarData?.some(
    (item) => item.date === formatted && item.status === "absent"
  );

  const hasLate = teamCalendarData?.some(
    (item) => item.date === formatted && item.status === "late"
  );

  const hasPresent = teamCalendarData?.some(
    (item) => item.date === formatted && item.status === "present"
  );

  if (hasAbsent)
    return "bg-red-100 text-red-700 rounded-md";

  if (hasLate)
    return "bg-yellow-100 text-yellow-700 rounded-md";

  if (hasPresent)
    return "bg-emerald-100 text-emerald-700 rounded-md";

  return null;
};

const tileContent = ({ date }) => {
  const formatted = date.toLocaleDateString("en-CA");

  const records = teamCalendarData?.filter(
    (item) => item.date === formatted
  );

  if (!records.length) return null;

  const presentCount = records.filter(r => r.status === "present").length;

  return (
    <div className="text-xs text-emerald-600 mt-1">
      {presentCount} P
    </div>
  );
};

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8 space-y-8">

          <div>
            <h1 className="text-2xl font-semibold text-[#1E1E1E]">
              Team Attendance Calendar
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              View team attendance status by date.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <Calendar
              onChange={setDate}
              value={date}
              tileClassName={tileClassName}
              tileContent={tileContent}
              className="border-none"
            />
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}