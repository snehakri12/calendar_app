export default function DateCell({
  day, startDate, endDate, currentMonth, currentYear, onSelect,
}) {
  if (!day) return <td className="p-1" />;

  const normalize = (d) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const date = normalize(new Date(currentYear, currentMonth, day));
  const s = startDate ? normalize(startDate) : null;
  const e = endDate ? normalize(endDate) : null;

  const isStart   = s && date.getTime() === s.getTime();
  const isEnd     = e && date.getTime() === e.getTime();
  const isInRange = s && e && date.getTime() > s.getTime() && date.getTime() < e.getTime();
  const isSingle  = isStart && !e;

  // TD background — the continuous blue strip
  let cellBg = "";
  if (isStart && e)   cellBg = "bg-blue-100 rounded-l-full";
  else if (isEnd)     cellBg = "bg-blue-100 rounded-r-full";
  else if (isInRange) cellBg = "bg-blue-100";
  // isSingle → no strip, just the solid circle below

  // Button circle on top of the strip
  // ✅ rounded-full is in the base so hover on plain days is always a pill
  let btn = "w-10 h-10 flex items-center justify-center text-sm font-semibold transition-all duration-200 rounded-full";
  if (isStart || isEnd || isSingle) btn += " bg-blue-600 text-white shadow-md";
  else if (isInRange)               btn += " text-blue-800 hover:bg-blue-200";
  else                              btn += " text-gray-700 hover:bg-gray-200";

  return (
    <td className={`p-0 ${cellBg}`}>
      <div className="flex items-center justify-center h-12">
        <button onClick={() => onSelect(day)} className={btn}>
          {day}
        </button>
      </div>
    </td>
  );
}