// src/components/employee/SummaryCards.jsx

export default function SummaryCards({ summary }) {
  if (!summary) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-sm text-gray-500">
          No summary available.
        </div>
      </div>
    );
  }

  const cards = [
    {
      label: "Present Days",
      value: summary.present || 0,
      accent: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      label: "Absent Days",
      value: summary.absent || 0,
      accent: "text-red-600",
      bg: "bg-red-100",
    },
    {
      label: "Late Days",
      value: summary.late || 0,
      accent: "text-yellow-600",
      bg: "bg-yellow-100",
    },
    {
      label: "Total Hours",
      value: summary.totalHours
        ? `${summary.totalHours} hrs`
        : "0 hrs",
      accent: "text-[#1E1E1E]",
      bg: "bg-gray-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
        >
          <div
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${card.bg} mb-4`}
          >
            <span className={`text-sm font-semibold ${card.accent}`}>
              {card.value}
            </span>
          </div>

          <h4 className="text-sm text-gray-600">{card.label}</h4>
        </div>
      ))}
    </div>
  );
}