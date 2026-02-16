// src/components/common/Navbar.jsx

import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-[#1E1E1E] text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo Section */}
      <div className="text-lg font-semibold tracking-wide">
        <span className="text-emerald-500">EMPLOYEE</span>TRACK
      </div>

      {/* Right Section */}
      {user && (
        <div className="flex items-center gap-6 text-sm">
          
          <span className="text-gray-300">
            {user.name}
          </span>

          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-500 hover:text-black transition duration-300"
          >
            Logout
          </button>

        </div>
      )}
    </nav>
  );
}