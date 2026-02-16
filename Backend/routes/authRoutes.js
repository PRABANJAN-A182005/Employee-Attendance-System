// routes/authRoutes.js

import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* =========================================
   🔓 Public Routes
========================================= */

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);


/* =========================================
   🔐 Private Routes
========================================= */

// Get current logged-in user
router.get("/me", protect, getMe);

export default router;