'use client'
import CodeEditor from "@/components/codeeditor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Activities() {
  const stats = [
    { title: "Pending", count: 12 },
    { title: "Submitted", count: 34 },
    { title: "Missed", count: 5 },
  ];
  const [showcode, setshowcode] = useState(false);

  const activities = [
    { id: 1, title: "Activity 1", instructions: "Complete the exercises in chapter 1.", deadline: "2025-09-28" },
    { id: 2, title: "Activity 2", instructions: "Submit a short essay on modern tech.", deadline: "2025-09-30" },
    { id: 3, title: "Activity 3", instructions: "Solve the programming challenges.", deadline: "2025-10-02" },
    { id: 4, title: "Activity 4", instructions: "Create a poster for your team project.", deadline: "2025-10-05" },
    { id: 5, title: "Activity 5", instructions: "Design a presentation slide deck.", deadline: "2025-10-06" },
    { id: 6, title: "Activity 6", instructions: "Write a reflective essay.", deadline: "2025-10-08" },

  ];

  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="flex flex-col gap-4 p-4 h-full max-h-full">
      {/* Stats Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white border dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {stat.title}
            </h2>
            <p className="text-3xl font-bold mt-2 text-indigo-600 dark:text-indigo-400">
              {stat.count}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
        {/* Activity Wall */}
        <div className="flex flex-col gap-3 w-full lg:w-2/3 bg-gray-100 rounded-md p-3 overflow-y-auto ">
          <h1 className="font-sans font-bold text-xl text-gray-600 sticky top-0 bg-gray-100 dark:bg-gray-800 z-10 p-2">
            Activities:
          </h1>
          {activities.map((activity) => (
            <button
              key={activity.id}
              onClick={() => setSelectedActivity(activity)}
              className={`w-full flex justify-between  cursor-pointer border text-left p-4 rounded-md shadow hover:bg-indigo-100 dark:hover:bg-indigo-800 transition ${selectedActivity?.id === activity.id
                ? "bg-indigo-200 dark:bg-indigo-700"
                : "bg-white dark:bg-gray-800"
                }`}
            >
              <h1 className="font-sans flex flex-col">
                {activity.title}
                <span className="text-xs">
                  {activity.instructions}
                </span>
              </h1>
              <h1 className="font-sans text-sm">
                {activity.deadline}
              </h1>

            </button>
          ))}
        </div>

        {/* Activity Details & Submission */}
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 shadow rounded-lg p-6 border" style={{ maxHeight: "calc(100vh - 6rem)" }}>
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              {selectedActivity ? `${selectedActivity.title} - Instructions` : "Instructions"}
            </h3>
            <button className="rounded-md bg-black text-white p-2 text-sm cursor-pointer" onClick={() => setshowcode(prev => !prev)}
            >Open Code Editor</button>
          </div>

          <div className="flex-1 overflow-y-auto mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              {selectedActivity
                ? selectedActivity.instructions
                : "Please select any activity."}
            </p>

            {showcode && <CodeEditor setshowcode={setshowcode}/>}


          </div>

          {/* Submission Bin */}
          <div className="mt-auto">
            <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Submit Your File
            </h4>
            <input
              type="file"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              disabled={!selectedActivity}
            />
            <button
              className="mt-4 cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              disabled={!selectedActivity}
            >
              Submit
            </button>
          </div>
        </div>
      </div>



    </div>
  );
}
