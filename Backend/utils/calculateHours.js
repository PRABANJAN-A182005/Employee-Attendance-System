// utils/calculateHours.js

const calculateHours = (checkInTime, checkOutTime) => {
  if (!checkInTime || !checkOutTime) return 0;

  const start = new Date(checkInTime);
  const end = new Date(checkOutTime);

  const diffInMs = end - start;

  if (diffInMs <= 0) return 0;

  const hours = diffInMs / (1000 * 60 * 60);

  // Return value rounded to 2 decimal places
  return parseFloat(hours.toFixed(2));
};

export default calculateHours;