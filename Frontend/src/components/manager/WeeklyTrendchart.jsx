// src/components/manager/WeeklyTrendChart.jsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function WeeklyTrendChart({ data = [] }) {
  if (!data.length) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500 text-sm">
          No weekly trend data available.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      
      <h3 className="text-lg font-semibold text-[#1E1E1E] mb-6">
        Weekly Attendance Trend
      </h3>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <BarChart data={data}>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            
            <XAxis 
              dataKey="day" 
              stroke="#6B7280"
              tick={{ fontSize: 12 }}
            />
            
            <YAxis 
              stroke="#6B7280"
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1E1E1E",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Bar 
              dataKey="present" 
              fill="#10B981"   // Emerald accent
              radius={[6, 6, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}