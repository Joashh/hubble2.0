'use client'
import TopBar from "@/components/header";
import SideBar from "@/components/sidebar";
import { useState, useEffect } from "react";

export default function Dashboard() {
 
  return (
    <div className="flex flex-col h-screen w-screen">
        <div className="">
          <TopBar/>
        </div>

        <div className="w-1/6 h-full">
          <SideBar/>
        </div>
        
    </div>
  );
}