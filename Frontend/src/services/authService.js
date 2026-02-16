// src/services/authService.js

import api from "./api.js";

// ==========================
// LOGIN
// ==========================
export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

// ==========================
// REGISTER
// ==========================
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// ==========================
// GET CURRENT USER (Optional)
// ==========================
export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};