// src/components/common/Sidebar.jsx

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const linkClasses = ({ isActive }) =>
    `block px-6 py-3 rounded-md text-sm font-medium transition ${
      isActive
        ? "bg-emerald-500 text-black"
        : "text-gray-400 hover:bg-[#2A2A2A] hover:text-emerald-500"
    }`;

  return (
    <aside className="w-64 bg-[#1E1E1E] min-h-screen px-4 py-6">
      
      {/* Title */}
      <h2 className="text-gray-200 text-lg font-semibold mb-8 tracking-wide">
        Navigation
      </h2>

      {/* Employee Links */}
      {user?.role === "employee" && (
        <nav className="space-y-2">
          <NavLink to="/employee/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/employee/history" className={linkClasses}>
            Attendance History
          </NavLink>
          <NavLink to="/employee/profile" className={linkClasses}>
            Profile
          </NavLink>
        </nav>
      )}

      {/* Manager Links */}
      {user?.role === "manager" && (
        <nav className="space-y-2">
          <NavLink to="/manager/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/manager/attendance" className={linkClasses}>
            All Attendance
          </NavLink>
          <NavLink to="/manager/reports" className={linkClasses}>
            Reports
          </NavLink>
          <NavLink to="/manager/calendar" className={linkClasses}>
            Team Calendar
          </NavLink>
        </nav>
      )}
    </aside>
  );
}