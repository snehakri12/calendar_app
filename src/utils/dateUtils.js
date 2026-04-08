export function generateCalendarMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const matrix = [];
  let week = [];
  let dayCount = 1;

  const startDay = firstDay.getDay(); // 0 = Sun

  // Fill empty cells before the month starts
  for (let i = 0; i < startDay; i++) week.push(null);

  while (dayCount <= lastDay.getDate()) {
    week.push(dayCount);
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
    dayCount++;
  }

  // Fill remaining empty cells
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }

  return matrix;
}

export function isInRange(day, startDate, endDate, currentMonth, currentYear) {
  if (!startDate || !endDate || !day) return false;
  const date = new Date(currentYear, currentMonth, day);
  return date >= startDate && date <= endDate;
}
