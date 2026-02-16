// src/components/manager/DepartmentChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DepartmentChart({ data = [] }) {
  if (!data.length) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500 text-sm">
          No department data available.
        </p>
      </div>
    );
  }

  // Custom Professional Color Palette (No Blue)
  const COLORS = [
    "#10B981", // Emerald
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#6B7280", // Gray
    "#111827", // Dark Charcoal
  ];

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      
      <h3 className="text-lg font-semibold text-[#1E1E1E] mb-6">
        Department-wise Attendance
      </h3>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="department"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={50}
              paddingAngle={3}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1E1E1E",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}