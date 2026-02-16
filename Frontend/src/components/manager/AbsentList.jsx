// src/components/manager/AbsentList.jsx

export default function AbsentList({ data = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      
      {/* Header */}
      <h3 className="text-lg font-semibold text-[#1E1E1E] mb-4">
        Absent Employees Today
      </h3>

      {/* Empty State */}
      {data.length === 0 ? (
        <p className="text-sm text-gray-500">
          No employees are absent today.
        </p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {data.map((employee) => (
            <li
              key={employee._id}
              className="py-4 flex justify-between items-center hover:bg-[#F9FAFB] transition px-2 rounded-md"
            >
              <div>
                <p className="font-medium text-[#1E1E1E]">
                  {employee.name}
                </p>
                <p className="text-xs text-gray-500">
                  {employee.employeeId} • {employee.department}
                </p>
              </div>

              <span className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">
                Absent
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}