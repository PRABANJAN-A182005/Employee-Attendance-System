// utils/csvExporter.js

const csvExporter = (records) => {
  if (!records || records.length === 0) {
    return "No records found";
  }

  // CSV Header
  const header = [
    "Name",
    "Employee ID",
    "Department",
    "Date",
    "Check In",
    "Check Out",
    "Status",
    "Total Hours",
  ];

  const rows = records.map((record) => {
    const user = record.userId || {};

    return [
      user.name || "",
      user.employeeId || "",
      user.department || "",
      record.date || "",
      record.checkInTime
        ? new Date(record.checkInTime).toLocaleTimeString()
        : "",
      record.checkOutTime
        ? new Date(record.checkOutTime).toLocaleTimeString()
        : "",
      record.status || "",
      record.totalHours || 0,
    ].join(",");
  });

  return [header.join(","), ...rows].join("\n");
};

export default csvExporter;