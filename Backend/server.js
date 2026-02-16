// server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

/* =================================================
   Global Middlewares
================================================= */

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Security headers
app.use(helmet());

// Logging (development only)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

/* =================================================
   API Routes
================================================= */

app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/dashboard", dashboardRoutes);

/* =================================================
   Health Check Route
================================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Employee Attendance API Running 🚀",
  });
});

/* =================================================
   Error Handling (Must Be Last)
================================================= */

// 404 Not Found
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

/* =================================================
   Start Server
================================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});