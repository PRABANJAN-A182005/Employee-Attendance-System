import express from "express";
import {
  getEmployeeDashboard,
  getManagerDashboard,
} from "../controllers/dashboardController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/employee", protect, authorize("employee"), getEmployeeDashboard);
router.get("/manager", protect, authorize("manager"), getManagerDashboard);

export default router;