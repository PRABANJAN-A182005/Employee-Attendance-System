// src/utils/constants.js

// ==========================
// API BASE URL
// ==========================
export const BASE_URL = "http://localhost:5000/api";


// ==========================
// USER ROLES
// ==========================
export const ROLES = {
  EMPLOYEE: "employee",
  MANAGER: "manager",
};


// ==========================
// ATTENDANCE STATUS
// ==========================
export const ATTENDANCE_STATUS = {
  PRESENT: "present",
  ABSENT: "absent",
  LATE: "late",
  HALF_DAY: "half-day",
};


// ==========================
// STATUS COLORS (For UI Badges)
// ==========================
export const STATUS_COLORS = {
  present: "bg-green-100 text-green-700",
  absent: "bg-red-100 text-red-700",
  late: "bg-yellow-100 text-yellow-700",
  "half-day": "bg-blue-100 text-blue-700",
};


// ==========================
// LOCAL STORAGE KEYS
// ==========================
export const STORAGE_KEYS = {
  TOKEN: "attendance_token",
  USER: "attendance_user",
};


// ==========================
// DASHBOARD ROUTES
// ==========================
export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",

  EMPLOYEE_DASHBOARD: "/employee/dashboard",
  EMPLOYEE_HISTORY: "/employee/history",
  EMPLOYEE_PROFILE: "/employee/profile",

  MANAGER_DASHBOARD: "/manager/dashboard",
  MANAGER_ATTENDANCE: "/manager/attendance",
  MANAGER_REPORTS: "/manager/reports",
  MANAGER_CALENDAR: "/manager/calendar",
};