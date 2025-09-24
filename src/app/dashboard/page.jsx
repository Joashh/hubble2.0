'use client'
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen font-sans bg-white">
      {/* Hamburger icon*/}
      {!sidebarOpen && !isDesktop && (
        <button
          className="absolute top-4 left-4 z-50 block md:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <span className="block w-6 h-[2px] bg-black rounded mb-1"></span>
          <span className="block w-6 h-[2px] bg-black rounded mb-1"></span>
          <span className="block w-6 h-[2px] bg-black rounded"></span>
        </button>
      )}

      {/* Sidebar */}
      {(sidebarOpen || isDesktop) && (
        <aside className={`fixed md:static inset-y-0 left-0 bg-gray-50 shadow-md min-w-[180px] p-4 pt-16 z-40 flex flex-col items-start justify-start w-64 md:w-auto`}>
          {/* Close button*/}
          {!isDesktop && (
            <button
              className="absolute top-4 left-4 z-50 md:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <span className="block w-6 h-[2px] bg-black rounded rotate-45 absolute"></span>
              <span className="block w-6 h-[2px] bg-black rounded -rotate-45"></span>
            </button>
          )}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-[35px] font-semibold tracking-wide bg-gradient-to-r from-[#FFABAB] to-[#FF3D00] text-transparent bg-clip-text">
              HUBBLE
            </h2>
          </div>
          <nav className="flex flex-col gap-4 w-full pt-8">
            <button className="flex items-center gap-2 w-full text-gray-700 hover:text-black hover:bg-[#FFABAB] rounded px-2 py-1 transition">
              <img src="/home-icon.svg" className="w-[25px] h-[25px]" alt="" /> 
              <span className="font-semibold">Home</span>
            </button>
            <button className="flex items-center gap-2 w-full text-gray-700 hover:text-black hover:bg-[#FFABAB] rounded px-2 py-1 transition">
              <img src="/courses-icon.svg" className="w-[25px] h-[25px]" alt="" /> 
              <span className="font-semibold">Course</span>
            </button>
            <button className="flex items-center gap-2 w-full text-gray-700 hover:text-black hover:bg-[#FFABAB] rounded px-2 py-1 transition">
              <img src="/calendar-icon.svg" className="w-[25px] h-[25px]" alt="" /> 
              <span className="font-semibold">Calendar</span>
            </button>
            <button className="flex items-center gap-2 w-full text-gray-700 hover:text-black hover:bg-[#FFABAB] rounded px-2 py-1 transition">
              <img src="/activities-icon.svg" className="w-[25px] h-[25px]" alt="" /> 
              <span className="font-semibold">Activities</span>
            </button>
          </nav>
        </aside>
      )}

      {/* {Main content} */}
      <main className="flex-1 flex flex-col items-center justify-start px-8 pt-16">
        <div className="relative w-[700px] h-[55px]">
          <div className="absolute inset-0 rounded bg-gradient-to-r from-[#FFABAB] to-[#FF6F61] z-0"></div>
          <input
            type="text"
            placeholder="Search ..."
            className="relative z-10 border-none rounded w-full h-full px-12 bg-transparent placeholder-gray-700 font-semibold"
            style={{ outline: 'none' }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <svg width="24" height="24" fill="none" stroke="#FF6F61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
        </div>
      </main>

    <aside className="flex flex-col items-center justify-start p-4 min-w-[180px] pt-16">
      <img src="/" alt="Profile" className="w-[55px] h-[55px] rounded-full mb-4" />
    </aside>
    </div>
  );
}