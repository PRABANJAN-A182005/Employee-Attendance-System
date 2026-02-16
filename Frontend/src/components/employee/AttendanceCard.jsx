// src/components/employee/AttendanceCard.jsx

import { formatTime, formatDate } from "../../utils/formatDate.js";

export default function AttendanceCard({ data }) {
  if (!data) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500 text-sm">No attendance data available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#1E1E1E]">
          Today’s Attendance
        </h3>
        <span className="text-sm text-gray-500">
          {formatDate(data.date)}
        </span>
      </div>

      {/* Status */}
      <div className="mb-6">
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            data.status === "present"
              ? "bg-emerald-100 text-emerald-700"
              : data.status === "late"
              ? "bg-yellow-100 text-yellow-700"
              : data.status === "absent"
              ? "bg-red-100 text-red-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {data.status?.toUpperCase() || "NOT CHECKED IN"}
        </span>
      </div>

      {/* Time Details */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        
        <div className="bg-[#F5F5F5] p-4 rounded-lg">
          <p className="text-gray-500">Check In</p>
          <p className="font-medium text-[#1E1E1E] mt-1">
            {data.checkInTime ? formatTime(data.checkInTime) : "--"}
          </p>
        </div>

        <div className="bg-[#F5F5F5] p-4 rounded-lg">
          <p className="text-gray-500">Check Out</p>
          <p className="font-medium text-[#1E1E1E] mt-1">
            {data.checkOutTime ? formatTime(data.checkOutTime) : "--"}
          </p>
        </div>

        <div className="col-span-2 bg-[#F5F5F5] p-4 rounded-lg">
          <p className="text-gray-500">Total Hours</p>
          <p className="font-medium text-[#1E1E1E] mt-1">
            {data.totalHours ? `${data.totalHours} hrs` : "--"}
          </p>
        </div>

      </div>
    </div>
  );
}