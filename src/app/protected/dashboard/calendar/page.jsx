'use client'

import React from "react";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";

export default function Calendar() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
        Select a Date
      </h2>

      <ShadcnCalendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full rounded-lg border"
      />

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Selected Date: {date.toDateString()}
      </p>
    </div>
  );
}
