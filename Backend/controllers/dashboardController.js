// controllers/dashboardController.js

import Attendance from "../models/Attendance.js";
import User from "../models/User.js";

/**
 * @desc    Employee Dashboard Data
 * @route   GET /api/dashboard/employee
 * @access  Private (Employee)
 */
export const getEmployeeDashboard = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = new Date().toISOString().split("T")[0];

    // Today's attendance
    const todayStatus = await Attendance.findOne({
      userId,
      date: today,
    });

    // This month's records
    const monthStart = new Date();
    monthStart.setDate(1);

    const monthlyRecords = await Attendance.find({
      userId,
      createdAt: { $gte: monthStart },
    });

    const summary = {
      present: monthlyRecords.filter(r => r.status === "present").length,
      absent: monthlyRecords.filter(r => r.status === "absent").length,
      late: monthlyRecords.filter(r => r.status === "late").length,
      totalHours: monthlyRecords.reduce(
        (acc, r) => acc + (r.totalHours || 0),
        0
      ),
    };

    // Last 7 days
    const recentAttendance = await Attendance.find({ userId })
      .sort({ date: -1 })
      .limit(7);

    res.status(200).json({
      todayStatus,
      summary,
      recentAttendance,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



/**
 * @desc    Manager Dashboard Data
 * @route   GET /api/dashboard/manager
 * @access  Private (Manager)
 */
export const getManagerDashboard = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    // Total employees
    const totalEmployees = await User.countDocuments({ role: "employee" });

    // Today's attendance
    const todayRecords = await Attendance.find({ date: today })
      .populate("userId", "name employeeId department");

    const presentToday = todayRecords.filter(
      r => r.status === "present"
    ).length;

    const absentToday = totalEmployees - presentToday;

    const absentEmployees = await User.find({
      role: "employee",
      _id: {
        $nin: todayRecords.map(r => r.userId._id),
      },
    }).select("name employeeId department");

    // Weekly Trend (last 7 days)
    const weeklyTrend = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formatted = date.toISOString().split("T")[0];

      const count = await Attendance.countDocuments({
        date: formatted,
        status: "present",
      });

      weeklyTrend.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        present: count,
      });
    }

    // Department-wise attendance
    const departmentWiseRaw = await Attendance.aggregate([
      { $match: { date: today } },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $group: {
          _id: "$user.department",
          count: { $sum: 1 },
        },
      },
    ]);

    const departmentWise = departmentWiseRaw.map(item => ({
      department: item._id,
      count: item.count,
    }));

    res.status(200).json({
      totalEmployees,
      presentToday,
      absentToday,
      weeklyTrend,
      departmentWise,
      absentEmployees,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};