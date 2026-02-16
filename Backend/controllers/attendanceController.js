// controllers/attendanceController.js

import Attendance from "../models/Attendance.js";
import User from "../models/User.js";
import calculateHours from "../utils/calculateHours.js";
import csvExporter from "../utils/csvExporter.js";

/**
 * @desc    Check In
 * @route   POST /api/attendance/checkin
 * @access  Private (Employee)
 */
export const checkIn = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const existing = await Attendance.findOne({
      userId: req.user._id,
      date: today,
    });

    if (existing) {
      return res.status(400).json({ message: "Already checked in today" });
    }

    const attendance = await Attendance.create({
      userId: req.user._id,
      date: today,
      checkInTime: new Date(),
      status: "present",
    });

    res.status(201).json(attendance);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Check Out
 * @route   POST /api/attendance/checkout
 * @access  Private (Employee)
 */
export const checkOut = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const attendance = await Attendance.findOne({
      userId: req.user._id,
      date: today,
    });

    if (!attendance) {
      return res.status(400).json({ message: "Not checked in today" });
    }

    if (attendance.checkOutTime) {
      return res.status(400).json({ message: "Already checked out" });
    }

    attendance.checkOutTime = new Date();
    attendance.totalHours = calculateHours(
      attendance.checkInTime,
      attendance.checkOutTime
    );

    await attendance.save();

    res.status(200).json(attendance);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Get My Attendance History
 * @route   GET /api/attendance/my-history
 * @access  Private (Employee)
 */
export const getMyHistory = async (req, res) => {
  try {
    const history = await Attendance.find({
      userId: req.user._id,
    }).sort({ date: -1 });

    res.status(200).json(history);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Get Today's Status
 * @route   GET /api/attendance/today
 * @access  Private
 */
export const getTodayStatus = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const attendance = await Attendance.findOne({
      userId: req.user._id,
      date: today,
    });

    res.status(200).json(attendance || null);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Monthly Summary
 * @route   GET /api/attendance/my-summary
 * @access  Private
 */
export const getMySummary = async (req, res) => {
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-based

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59);

    const records = await Attendance.find({
      userId: req.user._id,
      createdAt: {
        $gte: startOfMonth,
        $lte: endOfMonth,
      },
    });

    const summary = {
      present: records.filter(r => r.status === "present").length,
      absent: records.filter(r => r.status === "absent").length,
      late: records.filter(r => r.status === "late").length,
      totalHours: records.reduce(
        (acc, r) => acc + (r.totalHours || 0),
        0
      ),
    };

    res.status(200).json(summary);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Get All Attendance (Manager)
 * @route   GET /api/attendance/all
 * @access  Private (Manager)
 */
export const getAllEmployeesAttendance = async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("userId", "name employeeId department role")
      .sort({ createdAt: -1 });

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Export CSV
 * @route   GET /api/attendance/export
 * @access  Private (Manager)
 */
export const exportAttendance = async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("userId", "name employeeId department");

    const csv = csvExporter(records);

    res.header("Content-Type", "text/csv");
    res.attachment("attendance-report.csv");
    res.send(csv);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};