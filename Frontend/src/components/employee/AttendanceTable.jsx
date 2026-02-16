// src/components/employee/AttendanceTable.jsx

import { formatDate, formatTime } from "../../utils/formatDate";

export default function AttendanceTable({ data = [] }) {
  if (!data.length) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500 text-sm">No attendance records found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-[#1E1E1E]">
          Attendance History
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          <thead className="bg-[#F5F5F5] text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Check In</th>
              <th className="px-6 py-3">Check Out</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total Hours</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-[#F9FAFB] transition"
              >
                <td className="px-6 py-4 text-gray-700">
                  {formatDate(item.date)}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {item.checkInTime
                    ? formatTime(item.checkInTime)
                    : "--"}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {item.checkOutTime
                    ? formatTime(item.checkOutTime)
                    : "--"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "present"
                        ? "bg-emerald-100 text-emerald-700"
                        : item.status === "late"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "absent"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.status?.toUpperCase()}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {item.totalHours ? `${item.totalHours} hrs` : "--"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}