import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    checkInTime: Date,
    checkOutTime: Date,
    status: {
      type: String,
      enum: ["present", "absent", "late", "half-day"],
      default: "present",
    },
    totalHours: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);