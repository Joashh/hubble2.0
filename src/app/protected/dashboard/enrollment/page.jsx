'use client'
import { useState } from "react";

export default function Enrollment() {
  // Sample courses
  const courses = [
    { id: 1, name: "Computer Science 101", instructor: "Dr. Smith" },
    { id: 2, name: "Mathematics 101", instructor: "Prof. Johnson" },
    { id: 3, name: "Physics 101", instructor: "Dr. Brown" },
    { id: 4, name: "History 101", instructor: "Prof. Davis" },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleEnroll = () => {
    if (selectedCourse) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6 h-full">
      {/* Course List */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-auto">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">Available Courses</h2>
        <div className="flex flex-col gap-3">
          {courses.map(course => (
            <button
              key={course.id}
              onClick={() => { setSelectedCourse(course); setSubmitted(false); }}
              className={`w-full p-4 border rounded-md text-left shadow hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${
                selectedCourse?.id === course.id
                  ? "bg-indigo-200 dark:bg-indigo-700"
                  : "bg-white dark:bg-gray-700"
              }`}
            >
              <h3 className="font-semibold text-gray-700 dark:text-gray-200">{course.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Instructor: {course.instructor}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Enrollment Details */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow flex flex-col justify-between">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">Enrollment</h2>

        {selectedCourse ? (
          <>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You selected <span className="font-semibold">{selectedCourse.name}</span> by {selectedCourse.instructor}.
            </p>

            <div className="mt-auto">
              <button
                onClick={handleEnroll}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                disabled={submitted}
              >
                {submitted ? "Enrolled ✅" : "Submit Enrollment"}
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Please select a course to enroll.</p>
        )}
      </div>
    </div>
  );
}
