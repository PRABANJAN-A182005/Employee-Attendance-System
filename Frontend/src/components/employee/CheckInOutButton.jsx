// src/components/employee/CheckInOutButton.jsx

import { useAttendance } from "../../context/AttendanceContext";
import Loader from "../common/Loader";

export default function CheckInOutButton() {
  const {
    todayStatus,
    checkIn,
    checkOut,
    loading,
  } = useAttendance();

  const handleCheckIn = async () => {
    try {
      await checkIn();
    } catch (error) {
      console.error("Check-in error:", error);
    }
  };

  const handleCheckOut = async () => {
    try {
      await checkOut();
    } catch (error) {
      console.error("Check-out error:", error);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="mt-4">
        <Loader />
      </div>
    );
  }

  // Not checked in yet
  if (!todayStatus || !todayStatus.checkInTime) {
    return (
      <button
        onClick={handleCheckIn}
        className="mt-4 px-6 py-2 bg-[#1E1E1E] text-white rounded-md hover:bg-emerald-500 hover:text-black transition duration-300"
      >
        Check In
      </button>
    );
  }

  // Checked in but not checked out
  if (todayStatus.checkInTime && !todayStatus.checkOutTime) {
    return (
      <button
        onClick={handleCheckOut}
        className="mt-4 px-6 py-2 bg-[#1E1E1E] text-white rounded-md hover:bg-emerald-500 hover:text-black transition duration-300"
      >
        Check Out
      </button>
    );
  }

  // Already checked out
  return (
    <button
      disabled
      className="mt-4 px-6 py-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed"
    >
      Attendance Completed
    </button>
  );
}