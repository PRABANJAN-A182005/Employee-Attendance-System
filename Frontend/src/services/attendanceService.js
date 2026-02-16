// src/services/attendanceService.js

import api from "./api";

// ==========================
// EMPLOYEE APIs
// ==========================

// Check In
export const checkInUser = async () => {
  const response = await api.post("/attendance/checkin");
  return response.data;
};

// Check Out
export const checkOutUser = async () => {
  const response = await api.post("/attendance/checkout");
  return response.data;
};

// Get Today's Status
export const getTodayStatus = async () => {
  const response = await api.get("/attendance/today");
  return response.data;
};

// Get My Attendance History
export const getMyHistory = async () => {
  const response = await api.get("/attendance/my-history");
  return response.data;
};

// Get Monthly Summary
export const getMySummary = async () => {
  const response = await api.get("/attendance/my-summary");
  return response.data;
};


// ==========================
// MANAGER APIs
// ==========================

// Get All Employees Attendance
export const getAllAttendance = async () => {
  const response = await api.get("/attendance/all");
  return response.data;
};

// Get Specific Employee Attendance
export const getEmployeeAttendance = async (employeeId) => {
  const response = await api.get(`/attendance/employee/${employeeId}`);
  return response.data;
};

// Get Team Summary
export const getTeamSummary = async () => {
  const response = await api.get("/attendance/summary");
  return response.data;
};

// Get Today's Status (Manager View)
export const getTodayStatusAll = async () => {
  const response = await api.get("/attendance/today-status");
  return response.data;
};

// ==========================
// GET ALL EMPLOYEES ATTENDANCE (Manager)
// ==========================
export const getAllEmployeesAttendance = async () => {
  const response = await api.get("/attendance/all");
  return response.data;
};

// Export CSV
export const exportAttendanceCSV = async (filters) => {
  const response = await api.get("/attendance/export", {
    params: {
      ...filters,
      t: new Date().getTime(), // prevents caching
    },
    responseType: "blob",
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  return response;
};