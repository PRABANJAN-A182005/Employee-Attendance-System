// src/services/dashboardService.js

import api from "./api";

// ==========================
// EMPLOYEE DASHBOARD
// ==========================
export const getEmployeeDashboard = async () => {
  const response = await api.get("/dashboard/employee");
  return response.data;
};

// ==========================
// MANAGER DASHBOARD
// ==========================
export const getManagerDashboard = async () => {
  const response = await api.get("/dashboard/manager");
  return response.data;
};