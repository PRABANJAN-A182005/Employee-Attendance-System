// src/context/AttendanceContext.jsx

import { createContext, useContext, useState } from "react";
import { getManagerDashboard } from "../services/dashboardService.js";
import { getAllEmployeesAttendance , getAllAttendance } from "../services/attendanceService.js";

import {
  checkInUser,
  checkOutUser,
  getTodayStatus,
  getMyHistory,
  getMySummary,
} from "../services/attendanceService";

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [todayStatus, setTodayStatus] = useState(null);
  const [history, setHistory] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [managerStats, setManagerStats] = useState(null);
  const [allEmployeesAttendance, setAllEmployeesAttendance] = useState([]);
  const [teamCalendarData, setTeamCalendarData] = useState([]);

  // ==========================
  // Fetch Today's Status
  // ==========================
  const fetchTodayStatus = async () => {
    try {
      setLoading(true);
      const data = await getTodayStatus();
      setTodayStatus(data);
    } catch (error) {
      console.error("Error fetching today status:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Check In
  // ==========================
  const checkIn = async () => {
    try {
      setLoading(true);
      const data = await checkInUser();
      setTodayStatus(data);
      return data;
    } catch (error) {
      console.error("Check-in failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Check Out
  // ==========================
  const checkOut = async () => {
    try {
      setLoading(true);
      const data = await checkOutUser();
      setTodayStatus(data);
      return data;
    } catch (error) {
      console.error("Check-out failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Fetch My History
  // ==========================
  const fetchHistory = async () => {
    try {
      setLoading(true);
      const data = await getMyHistory();
      setHistory(data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Fetch Monthly Summary
  // ==========================
  const fetchSummary = async () => {
    try {
      setLoading(true);
      const data = await getMySummary();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Fetch Manager Dashboard
  // ==========================
  const fetchManagerDashboard = async () => {
    try {
      setLoading(true);

      const data = await getManagerDashboard();

      setManagerStats(data);

      return data; // optional but useful
    } catch (error) {
      console.error("Error fetching manager dashboard:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
// Fetch All Employees Attendance (Manager)
// ==========================
const fetchAllEmployeesAttendance = async () => {
  try {
    setLoading(true);

    const data = await getAllEmployeesAttendance();

    setAllEmployeesAttendance(data);

    return data;
  } catch (error) {
    console.error("Error fetching all employees attendance:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

const fetchTeamCalendar = async () => {
  try {
    setLoading(true);
    const data = await getAllAttendance();
    setTeamCalendarData(data);
  } catch (error) {
    console.error("Error fetching team calendar:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <AttendanceContext.Provider
      value={{
        todayStatus,
        managerStats,
        history,
        summary,
        loading,
        allEmployeesAttendance,
        teamCalendarData,
        fetchTodayStatus,
        checkIn,
        checkOut,
        fetchHistory,
        fetchSummary,
        fetchManagerDashboard,
        fetchAllEmployeesAttendance,
        fetchTeamCalendar,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => {
  return useContext(AttendanceContext);
};