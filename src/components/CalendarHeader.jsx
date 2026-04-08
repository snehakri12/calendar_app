import React from "react";

export default function CalendarHeader({ month, year, onPrev, onNext }) {
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  return (
    <div className="flex items-center justify-between py-4 text-blue-600 font-semibold">
      <button onClick={onPrev}>◀</button>
      <button onClick={onNext}>▶</button>
    </div>
  );
}
