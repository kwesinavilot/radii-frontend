"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaBars,
  FaChartLine,
  FaDatabase,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { MdDashboard, MdHelp } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-teal-800 ${
        isOpen ? "w-64" : "w-20"
      } transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen ? (
          <span className="text-white text-lg font-bold">URUbytes</span>
        ) : (
          <Image src="/u-logo.png" alt="Logo" className="w-8 h-8" />
        )}
      </div>
      <nav className="flex-1 mt-10">
        <ul>
          <li className="flex items-center p-4 cursor-pointer hover:bg-teal-700">
            <MdDashboard className="text-white" />
            {isOpen && <span className="ml-4 text-white">Dashboard</span>}
          </li>
          <li className="flex items-center p-4 cursor-pointer hover:bg-teal-700">
            <FaChartLine className="text-white" />
            {isOpen && <span className="ml-4 text-white">Get Insight</span>}
          </li>
          <li className="flex items-center p-4 cursor-pointer hover:bg-teal-700">
            <FaDatabase className="text-white" />
            {isOpen && <span className="ml-4 text-white">Data Sources</span>}
          </li>
          <li className="flex items-center p-4 cursor-pointer hover:bg-teal-700">
            <FaFileInvoiceDollar className="text-white" />
            {isOpen && <span className="ml-4 text-white">Billing</span>}
          </li>
          <hr className="border-teal-600 my-2 mx-4" />
        </ul>
      </nav>
      <div className="px-4">
        <hr className="border-teal-600 my-2" />
        <div
          className="flex items-center cursor-pointer hover:bg-teal-700 p-2 rounded"
          onClick={toggleSidebar}
        >
          <FaBars className="text-white" />
          {isOpen && <span className="ml-4 text-white">Collapse</span>}
        </div>
        <hr className="border-teal-600 my-2" />
        <div className="flex items-center cursor-pointer hover:bg-teal-700 p-2 rounded">
          <MdHelp className="text-white" />
          {isOpen && <span className="ml-4 text-white">Get Help</span>}
        </div>
        <hr className="border-teal-600 my-2" />
      </div>
      <div className="p-4 flex items-center">
        <img
          src="/bright.png"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        {isOpen && (
          <div className="ml-4">
            <p className="text-white">Bright Ahedor</p>
            <p className="text-white text-sm">KudiGo Technologies</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
