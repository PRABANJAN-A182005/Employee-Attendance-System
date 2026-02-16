// routes/attendanceRoutes.js

import express from "express";
import {
  checkIn,
  checkOut,
  getMyHistory,
  getMySummary,
  getTodayStatus,
  getAllEmployeesAttendance,
  exportAttendance,
} from "../controllers/attendanceController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

/* ===================================================
   👨‍💼 Employee Routes
=================================================== */

// Check In
router.post("/checkin", protect, authorize("employee"), checkIn);

// Check Out
router.post("/checkout", protect, authorize("employee"), checkOut);

// My Attendance History
router.get("/my-history", protect, authorize("employee"), getMyHistory);

// Monthly Summary
router.get("/my-summary", protect, authorize("employee"), getMySummary);

// Today's Status
router.get("/today", protect, authorize("employee"), getTodayStatus);


/* ===================================================
   👨‍💼 Manager Routes
=================================================== */

// All Employees Attendance
router.get("/all", protect, authorize("manager"), getAllEmployeesAttendance);

// Export CSV
router.get("/export", protect, authorize("manager"), exportAttendance);

export default router;