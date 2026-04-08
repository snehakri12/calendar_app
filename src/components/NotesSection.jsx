import { useState, useEffect } from "react";

export default function NotesSection({ selectedRangeKey }) {
  const [notes, setNotes] = useState("");

  // Load notes when range changes
  useEffect(() => {
    const saved = localStorage.getItem(selectedRangeKey);
    if (saved) {
      setNotes(saved);
    } else {
      setNotes("");
    }
  }, [selectedRangeKey]);

  // Save notes
  function handleChange(e) {
    const value = e.target.value;
    setNotes(value);
    localStorage.setItem(selectedRangeKey, value);
  }

  return (
    <textarea
      value={notes}
      onChange={handleChange}
      placeholder="Write your notes here..."
      className="
        w-full 
        h-full 
        min-h-[220px] 
        resize-none 
        border 
        rounded-lg 
        p-3 
        text-sm 
        bg-white 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-300 
        transition
      "
    />
  );
}