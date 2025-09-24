'use client'

import { useState, useEffect } from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { LogoutButton } from './logout-button';
import { useRouter } from 'next/navigation';
export default function TopBar() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const navItems = [
  { label: "Home", icon: "/home-icon.svg", route: "/protected/dashboard/" },
  { label: "Course", icon: "/courses-icon.svg", route: "/protected/dashboard/course" },
  { label: "Calendar", icon: "/calendar-icon.svg", route: "/protected/dashboard/calendar" },
  { label: "Activities", icon: "/activities-icon.svg", route: "/protected/dashboard/activities" },
  {label: "Enrollment", icon: "/toga.svg", route: "/protected/dashboard/enrollment"},
];


  return (
    <header className="flex  items-center justify-between  bg-gray-100 p-4 w-full shadow-md">
     
     <div className="hidden md:block">
       <h1 className="font-sans font-extrabold text-3xl">Hubble</h1>
     </div>
    

      <div className="flex w-full gap-4 justify-between md:justify-center px-10 sm:px-0">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => router.push(item.route)} 
            className="flex  items-center sm:gap-2   text-gray-700 hover:text-black  hover:bg-[#e9e9e9] cursor-pointer rounded px-3 py-1 transition"
          >
            <img src={item.icon} className="w-[25px] h-[25px]" alt={item.label} />
            <span className="font-semibold hidden sm:block">{item.label}</span>
          </button>
        ))}
      </div>


      <div className="hidden md:flex items-center gap-4 ">
        <UserCircleIcon className="w-10 h-10 text-gray-500" />
        <LogoutButton />
      </div>

    </header>
  );
}
