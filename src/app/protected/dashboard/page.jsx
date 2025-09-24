'use client'

import { useState } from "react";

// ShadCN UI Components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Dashboard() {
  const [activities] = useState([
    { id: 1, title: "Activity 1", student: "John Doe", deadline: "2025-09-24", status: "Pending" },
    { id: 2, title: "Activity 2", student: "Jane Smith", deadline: "2025-09-23", status: "Submitted" },
    { id: 3, title: "Activity 3", student: "Alice Johnson", deadline: "2025-09-22", status: "Missed" },
  ]);
 const [courses] = useState([
    { id: 1, student: "John Doe", course: "Math 101", date: "2025-09-24" },
    { id: 2, student: "Jane Smith", course: "History 201", date: "2025-09-23" },
    { id: 3, student: "Alice Johnson", course: "Physics 301", date: "2025-09-22" },
  ]);
  const stats = [
    { title: "Pending", value: 12 },
    { title: "Submitted", value: 34 },
    { title: "Missed", value: 5 },
  ];

  
  return (
    <div className="flex flex-col dark:bg-gray-900 ">
      <main className="flex-1 overflow-auto p-6 max-w-7xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">Dashboard</h1>

        {/* Stats Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <CardTitle>{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-600 dark:text-indigo-400">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>{activity.student}</TableCell>
                    <TableCell>{activity.title}</TableCell>
                    <TableCell>{activity.deadline}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 text-xs rounded-md font-semibold ${
                          activity.status === "Submitted"
                            ? "bg-green-100 text-green-700"
                            : activity.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Submit Activity Form */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>{course.student}</TableCell>
                    <TableCell>{course.course}</TableCell>
                    <TableCell>{course.date}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Approve</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
