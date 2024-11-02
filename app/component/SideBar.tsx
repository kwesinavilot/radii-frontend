"use client";
import { useState, useEffect } from "react";
import { FaChartLine, FaDatabase, FaFileInvoiceDollar } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdDashboard, MdHelp, MdViewInAr } from "react-icons/md";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UserModal from "./UserModal";
import { useSelector } from "react-redux";
import axios from "axios";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isCollapseActive, setIsCollapseActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const token = useSelector((state: any) => state.auth.token);
  const userID = useSelector((state: any) => state.auth.userID);
  const [username, setUsername] = useState<string | null>(null);

  const capitalizeName = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  useEffect(() => {
    if (token && userID) {
      const fetchUsername = async () => {
        try {
          const response = await axios.get(
            `https://hammerhead-app-zjkr8.ondigitalocean.app/accounts/users/${userID}/`,
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          const capitalizedName = capitalizeName(response.data.name);
          setUsername(capitalizedName);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      };
      fetchUsername();
    }
  }, [token, userID]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsCollapseActive(!isCollapseActive);
  };

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    setIsCollapseActive(false);
  };

  const linkClasses = (index: number) =>
    clsx(
      "relative flex items-center py-4 px-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
      {
        "bg-white text-teal-800 my-2 border-l-4 border-teal-800 rounded":
          activeIndex === index,
        "text-white": activeIndex !== index,
      }
    );

  const collapseClasses = clsx(
    "flex items-center p-4 cursor-pointer hover:text-teal-800 mx-2 transition-all duration-200 rounded px-4",
    {
      "text-teal-800 my-2 border-l-4 border-white rounded": isCollapseActive,
    }
  );

  const links = [
    {
      icon: <MdDashboard />,
      text: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: <FaChartLine />,
      text: "Get Insight",
      route: "/insight",
    },
    {
      icon: <FaDatabase />,
      text: "Data Sources",
      route: "/dataSources",
    },
    {
      icon: <MdViewInAr />,
      text: "Views",
      route: "/views",
    },
    // {
    //   icon: <FaFileInvoiceDollar />,
    //   text: "Billing",
    //   route: "/billing",
    // },
  ];

  const bottomLinks = [
    { icon: <MdHelp />, text: "Get Help", route: "/getHelp" },
    {
      icon: <FaCircleUser className="rounded-full" />,
      text: username || "User",
      route: "#",
      onClick: () => setIsModalOpen(true),
    },
  ];

  const isActive = (route: string) => route === pathname;

  const handleLogoutSuccess = () => {
    console.log("Logout successful");
  };

  return (
    <div
      className={`flex flex-col h-screen bg-[#038C7F] ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 mt-4">
        {isOpen ? (
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={42}
            className="pl-2"
          />
        ) : (
          <Image
            src="/i-logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="pl-2"
          />
        )}
      </div>
      <nav className="flex-1">
        <ul>
          {links.map((link, index) => (
            <li
              key={`top-link-${index}`}
              onClick={() => handleLinkClick(index)}
            >
              <Link href={link.route} className={linkClasses(index)}>
                <div className="text-inherit text-2xl">{link.icon}</div>
                <span
                  className={`ml-4 origin-left duration-200 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {link.text}
                </span>
              </Link>

              {isActive(link.route) && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
              )}
            </li>
          ))}
          <hr className="border-[#fff] my-4" />
        </ul>
      </nav>
      <div className="">
        <div onClick={toggleSidebar} className={collapseClasses}>
          {isOpen ? (
            <>
              <Image
                src="/collapse.png"
                alt="Collapse"
                width={20}
                height={20}
              />
              <span className="ml-4 text-white">Collapse</span>
            </>
          ) : (
            <Image src="/collapse.png" alt="Collapse" width={24} height={24} />
          )}
        </div>
        <hr className="border-[#fff] my-2" />
        <nav className="flex-1">
          <ul>
            {bottomLinks.map((link, index) => (
              <div key={`bottom-link-wrapper-${index}`}>
                <li
                  key={`bottom-link-${index}`}
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    handleLinkClick(index + links.length);
                  }}
                >
                  <Link
                    href={link.route}
                    className={linkClasses(index + links.length)}
                  >
                    <div className="text-inherit text-2xl">{link.icon}</div>
                    <span
                      className={`ml-4 origin-left duration-200 ${
                        !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {link.text}
                    </span>
                  </Link>
                  {isActive(link.route) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
                  )}
                </li>
                {index === 0 && <hr className="border-[#fff] my-2" />}
              </div>
            ))}
          </ul>
        </nav>
      </div>
      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          onLogoutSuccess={handleLogoutSuccess}
        />
      )}
    </div>
  );
};

export default Sidebar;
