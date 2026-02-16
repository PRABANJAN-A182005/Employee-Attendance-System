// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../services/authService.js";
import { STORAGE_KEYS } from "../utils/constants.js";

const AuthContext = createContext({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Restore user on refresh
  // ==========================
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // ==========================
  // Login
  // ==========================
  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);

      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data));
      localStorage.setItem(STORAGE_KEYS.TOKEN, data.token);

      setUser(data);

      return data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // ==========================
  // Register
  // ==========================
  const register = async (userData) => {
    try {
      const data = await registerUser(userData);

      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data));
      localStorage.setItem(STORAGE_KEYS.TOKEN, data.token);

      setUser(data);

      return data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  // ==========================
  // Logout
  // ==========================
  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};