// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";

// Home page
import Home from "./pages/Home";

// Auth Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Employee Pages
import EmployeeDashboard from "./pages/employee/emploeeDashboard";
import MyAttendanceHistory from "./pages/employee/myAttendanceHistory";
import Profile from "./pages/employee/Profile";

// Manager Pages
import ManagerDashboard from "./pages/manager/managerDashboard";
import AllEmployeesAttendance from "./pages/manager/AllEmployeeAttendance";
import Reports from "./pages/manager/report";
import TeamCalendar from "./pages/manager/Teamcalender";

// Common
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ================= Home Page ================= */}
      <Route path="/" element={<Home />} />

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= EMPLOYEE ROUTES ================= */}
      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute role="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/history"
        element={
          <ProtectedRoute role="employee">
            <MyAttendanceHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/profile"
        element={
          <ProtectedRoute role="employee">
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* ================= MANAGER ROUTES ================= */}
      <Route
        path="/manager/dashboard"
        element={
          <ProtectedRoute role="manager">
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manager/attendance"
        element={
          <ProtectedRoute role="manager">
            <AllEmployeesAttendance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manager/reports"
        element={
          <ProtectedRoute role="manager">
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manager/calendar"
        element={
          <ProtectedRoute role="manager">
            <TeamCalendar />
          </ProtectedRoute>
        }
      />

      {/* ================= 404 ================= */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;