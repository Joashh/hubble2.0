'use client'
import MainContent from "@/components/header";
import SideBar from "@/components/sidebar";
import { useState, useEffect } from "react";

export default function Dashboard() {
 
  return (
    <div className="flex h-screen font-sans bg-white">
     
     <SideBar/>
     <MainContent/>
     
    </div>
  );
}