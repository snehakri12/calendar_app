import React from "react";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
        Interactive Wall Calendar
      </h1>
      <Calendar />
    </div>
  );
}
