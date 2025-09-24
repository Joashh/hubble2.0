// components/DashboardLayout.jsx
'use client'

import TopBar from "@/components/header"
import SideBar from "@/components/sidebar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      
      <TopBar />

      
      <div className="flex flex-1">
        <div className="w-1/6 h-full">
          <SideBar />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
