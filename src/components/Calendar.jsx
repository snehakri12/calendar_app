import { useState, useEffect } from "react";
import CalendarGrid from "./CalendarGrid";
import NotesSection from "./NotesSection";

export default function Calendar() {
  const [dateState, setDateState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fade, setFade] = useState(true);

  const monthImages = [
    "/janu.avif","/febuu.jpg","/mar.jpg","/april.jpg",
    "/may.webp","/june.jpg","/july.jpg","/aug.avif",
    "/sept.jpg","/octooo.jpg","/nov.jpg","/dec.jpg"
  ];

  const monthThemes = [
    "from-blue-500 to-indigo-600",
    "from-pink-500 to-rose-500",
    "from-emerald-500 to-green-600",
    "from-teal-500 to-cyan-600",
    "from-yellow-500 to-orange-500",
    "from-cyan-500 to-sky-600",
    "from-indigo-500 to-purple-600",
    "from-orange-500 to-amber-600",
    "from-amber-500 to-yellow-600",
    "from-purple-500 to-fuchsia-600",
    "from-slate-600 to-gray-800",
    "from-red-500 to-rose-600",
  ];

  const currentImage = monthImages[dateState.month];
  const theme = monthThemes[dateState.month];

  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 250);
    return () => clearTimeout(t);
  }, [dateState.month]);

  function handleSelect(day) {
    const clicked = new Date(dateState.year, dateState.month, day);

    if (!startDate || endDate) {
      setStartDate(clicked);
      setEndDate(null);
      return;
    }

    // Same day clicked twice → single-day range
    if (clicked.getTime() === startDate.getTime()) {
      setEndDate(clicked);
      return;
    }

    if (clicked > startDate) {
      setEndDate(clicked);
    } else {
      // Clicked before start → restart
      setStartDate(clicked);
      setEndDate(null);
    }
  }

  function handlePrev() {
    setDateState((prev) => ({
      month: prev.month === 0 ? 11 : prev.month - 1,
      year: prev.month === 0 ? prev.year - 1 : prev.year,
    }));
  }

  function handleNext() {
    setDateState((prev) => ({
      month: prev.month === 11 ? 0 : prev.month + 1,
      year: prev.month === 11 ? prev.year + 1 : prev.year,
    }));
  }

  const rangeKey = `${dateState.year}-${dateState.month}-${startDate?.getDate() || "no"}-${endDate?.getDate() || "no"}`;

  const monthName = new Date(dateState.year, dateState.month)
    .toLocaleString("default", { month: "long" });

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border p-4">

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr] gap-6">

        {/* IMAGE */}
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <img
            src={currentImage}
            className={`w-full h-full object-cover transition-all duration-700 
            ${fade ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">

          {/* HEADER */}
          <div className="grid grid-cols-3 items-center">
            <div></div>
            <div className="text-center">
              <h1 className={`text-3xl font-black bg-gradient-to-r ${theme} bg-clip-text text-transparent`}>
                {dateState.year}
              </h1>
            </div>
            <div className="text-right">
              <h2 className={`text-xl font-bold bg-gradient-to-r ${theme} bg-clip-text text-transparent`}>
                {monthName}
              </h2>
            </div>
          </div>

          {/* CALENDAR */}
          <div className="bg-gray-50 rounded-xl p-4 shadow-md border">

            <div className="flex justify-between mb-2">
              <button
                onClick={handlePrev}
                className={`px-2 py-1 rounded bg-gradient-to-r ${theme} text-white`}
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className={`px-2 py-1 rounded bg-gradient-to-r ${theme} text-white`}
              >
                ▶
              </button>
            </div>

            <CalendarGrid
              year={dateState.year}
              month={dateState.month}
              startDate={startDate}
              endDate={endDate}
              onSelect={handleSelect}
            />
          </div>

          {/* SELECTED RANGE DISPLAY */}
          {startDate && (
            <div className={`bg-gradient-to-r ${theme} text-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm`}>
              <div className="text-sm font-semibold">
                {startDate.toLocaleDateString("default", { day: "numeric", month: "short", year: "numeric" })}
                {endDate && endDate.getTime() !== startDate.getTime() && (
                  <>
                    <span className="mx-2 opacity-75">→</span>
                    {endDate.toLocaleDateString("default", { day: "numeric", month: "short", year: "numeric" })}
                  </>
                )}
              </div>
              <button
                onClick={() => { setStartDate(null); setEndDate(null); }}
                className="text-white/70 hover:text-white text-lg leading-none ml-4"
                title="Clear selection"
              >
                ✕
            </button>
            </div>
          )}

          {/* NOTES */}
          <div className="bg-gray-50 rounded-xl p-4 shadow-inner border">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Notes</h3>
            <NotesSection selectedRangeKey={rangeKey} />
          </div>

        </div>
      </div>
    </div>
  );
}