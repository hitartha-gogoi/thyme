"use client"; // Required in Next.js 15 for interactivity
import { useState, useEffect, useRef } from "react"
import Image from "next/image";
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import Sidebar from "@/components/Sidebar";

function Navbar(){

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };


  return (
    <div className="z-[9999] w-full h-30 flex flex-col justify-center fixed top-0 left-0 border-b-2 border-neutral-800">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

        {/* GREEN TOP BAR */}
        <div className="flex flex-row w-full h-10 bg-green-900 justify-center items-center sm:px-10 px-2 text-xs">
          <span className="text-gray-200 font-semibold hover:shadow-xl hover:text-white transition-transform duration-200 ease-in-out mx-4 banner-text">Nemozyn is now <span className="font-bold text-white text-base mx-2">THYME </span> | Explore our new arrivals</span>
        </div>

        {/* WHITE TOP BAR */}
        <div className="flex flex-row h-10 bg-white justify-between items-center sm:px-10 px-2 text-xs">

          <div className="flex flex-row h-10 bg-white justify-between items-center sm:px-10 px-2 text-xs">
            <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Shop organic</span>
            <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Journal</span>
            <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">sustainibility report</span>
          </div>

          <span className="text-black font-semibold hover:shadow-xl hover:text-white transition-transform duration-200 ease-in-out mx-4 banner-text"><span className="font-bold text-black text-xl mx-2">THYME </span></span>

          <div className="flex flex-row h-10 bg-white justify-between items-center sm:px-10 px-2 text-xs">
          <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Favourite</span>
          <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Contact</span>
          <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Account</span>
          </div>
        </div>

        {/* GRAY TOP BAR */}
        <div className="flex flex-row h-10 bg-gray-200 justify-between items-center sm:px-10 px-2 text-xs border-t-2 border-black">
        <span className="text-black font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text"></span>
          <div className="flex flex-row h-10 justify-between items-center sm:px-10 px-2 text-xs">
            <span className="text-black font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Bestsellers</span>
            <span className="text-black font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">New Arrivals</span>
            <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Topwear</span>
            <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Bottomwear</span>
            <span className="text-black hidden sm:block font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Accessories</span>
            <span className="text-red-500 font-semibold hover:shadow-xl hover:text-red-500 transition-transform duration-200 ease-in-out mx-4 banner-text">Sale</span>
          </div>
          <span className="text-black font-semibold hover:shadow-xl hover:text-gray-600 transition-transform duration-200 ease-in-out mx-4 banner-text">Cart</span>
        </div>



      </div>

    
  );
};

export default Navbar;
