'use client'
import { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper to get first day of month and total days
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const days = [];
  // Fill blank days for first week
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const today = new Date();

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">Calendar</h1>

      {/* Month Navigation */}
      <div className="flex justify-between items-center w-full max-w-md mb-4">
        <button
          onClick={prevMonth}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ◀
        </button>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </h2>
        <button
          onClick={nextMonth}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ▶
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 w-full max-w-md gap-1">
        {dayNames.map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600 dark:text-gray-400">
            {day}
          </div>
        ))}
        {days.map((day, index) => {
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={index}
              className={`h-10 flex items-center justify-center rounded ${
                isToday ? "bg-indigo-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
