"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  title: string;
  icon?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ title, icon }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="text-[34px] font-bold text-gray-900">
          {icon}
        </Link>
        <h1 className="ml-4 text-[40px] font-bold">{title}</h1>
      </div>
      <div className="flex items-center">
        <div className="relative" onClick={toggleDropdown}>
          <div className="relative py-2 px-4 flex justify-end gap-4 mr-6 cursor-pointer">
            <div className="flex flex-col bg-[#EB5757] text-white py-1 px-6 items-center">
              <span className="text-[12px]">Current Plan</span>
              <h4 className="text-[16px]">BASIC</h4>
            </div>
          </div>
          {dropdownOpen && (
            <div
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 flex flex-col absolute top-16 right-0"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link href="/">
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/settings">
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/earnings">
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Earnings
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/logout">
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Sign out
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
