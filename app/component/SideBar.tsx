// "use client";

// import { useState } from "react";
// import {
//   FaBars,
//   FaChartLine,
//   FaDatabase,
//   FaFileInvoiceDollar,
// } from "react-icons/fa";
// import { MdDashboard, MdHelp } from "react-icons/md";
// import clsx from "clsx";
// import Image from "next/image";
// import style from "./Sidebar.module.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isCollapseActive, setIsCollapseActive] = useState(false);
//   const [isUserActive, setIsUserActive] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setIsCollapseActive(!isCollapseActive);
//   };

//   const handleLinkClick = (index: number) => {
//     setActiveIndex(index);
//     setIsUserActive(false);
//     setIsCollapseActive(false);
//   };

//   const handleUserClick = () => {
//     setIsUserActive(true);
//     setActiveIndex(null);
//     setIsCollapseActive(false);
//   };

//   const linkClasses = (index: number) =>
//     clsx(
//       "relative flex items-center py-4  px-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
//       {
//         "bg-white text-teal-800 my-2 border-l-4 border-teal-800 rounded":
//           activeIndex === index,
//         "text-white": activeIndex !== index,
//       }
//     );

//   const collapseClasses = clsx(
//     "flex items-center p-4 cursor-pointer hover:text-teal-800 mx-2 transition-all duration-200 rounded px-4",
//     {
//       "text-teal-800 my-2 border-l-4 border-white rounded": isCollapseActive,
//     }
//   );

//   const userClasses = clsx(
//     "px-2 py-4 flex items-center cursor-pointer px-4 mb-2 text-white hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
//     {
//       "bg-white text-teal-800 my-2 border-l-4 border-white rounded":
//         isUserActive,
//     }
//   );

//   const links = [
//     {
//       icon: <MdDashboard />,
//       text: "Dashboard",
//     },
//     {
//       icon: <FaChartLine />,
//       text: "Get Insight",
//     },
//     {
//       icon: <FaDatabase />,
//       text: "Data Sources",
//     },
//     {
//       icon: <FaDatabase />,
//       text: "Views",
//     },
//     {
//       icon: <FaFileInvoiceDollar />,
//       text: "Billing",
//     },
//     { icon: <MdHelp />, text: "Get Help" },
//   ];

//   return (
//     <div
//       className={`flex flex-col h-screen bg-[#038C7F]  ${
//         isOpen ? "w-64" : "w-20"
//       } transition-all duration-300`}
//     >
//       <div className="flex items-center justify-between p-4  mt-10">
//         {isOpen ? (
//           <span className="text-white text-lg font-bold">URUbytes</span>
//         ) : (
//           <Image src="/u-logo.png" alt="Logo" width={32} height={32} />
//         )}
//       </div>
//       <nav className="flex-1">
//         <ul>
//           {links.slice(0, 4).map((link, index) => (
//             <li
//               key={index}
//               className={linkClasses(index)}
//               onClick={() => handleLinkClick(index)}
//             >
//               <div className="text-inherit text-2xl">{link.icon}</div>
//               <span
//                 className={`ml-4 origin-left duration-200 ${
//                   !isOpen && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {link.text}
//               </span>

//               {activeIndex === index && (
//                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
//               )}
//             </li>
//           ))}
//           <hr className="border-[#fff] my-4" />
//         </ul>
//       </nav>
//       <div className="">
//         <hr className="border-[#fff] my-2" />
//         <div onClick={toggleSidebar} className={collapseClasses}>
//           {isOpen ? (
//             <>
//               <Image
//                 src="/collapse.png"
//                 alt="Collapse"
//                 width={20}
//                 height={20}
//               />
//               <span className="ml-4 text-white">Collapse</span>
//             </>
//           ) : (
//             <Image src="/collapse.png" alt="Collapse" width={24} height={24} />
//           )}
//         </div>
//         <hr className="border-[#fff] my-2" />
//         {links.slice(4).map((link, index) => (
//           <div
//             key={index + 4}
//             className={clsx(linkClasses(index + 4), {
//               "ml-0 p-2": link.text === "Get Help",
//             })}
//             onClick={() => handleLinkClick(index + 4)}
//           >
//             <div className="text-inherit text-2xl">{link.icon}</div>
//             <span
//               className={`ml-4 origin-left duration-200 ${
//                 !isOpen && "opacity-0 translate-x-28 overflow-hidden"
//               }`}
//             >
//               {link.text}
//             </span>
//             {activeIndex === index + 4 && (
//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
//             )}
//           </div>
//         ))}
//         <hr className="border-[#fff] my-2" />

//         <div className={userClasses} onClick={handleUserClick}>
//           <Image
//             src="/bright.png"
//             alt="Profile"
//             className="rounded-full"
//             width={36}
//             height={36}
//           />
//           {isOpen && (
//             <div className="ml-4 ">
//               <p className="text-[12px]">Bright Ahedor</p>
//               <p className="text-[12px]">KudiGo Technologies</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// "use client";

// import { useState } from "react";
// import {
//   FaBars,
//   FaChartLine,
//   FaDatabase,
//   FaFileInvoiceDollar,
// } from "react-icons/fa";
// import { MdDashboard, MdHelp } from "react-icons/md";
// import clsx from "clsx";
// import Image from "next/image";
// import { usePathname } from "next/navigation"; // Import usePathname from your pathname library
// import style from "./Sidebar.module.css";
// import Link from "next/link";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isCollapseActive, setIsCollapseActive] = useState(false);
//   const [isUserActive, setIsUserActive] = useState(false);
//   const pathname = usePathname();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setIsCollapseActive(!isCollapseActive);
//   };

//   const handleLinkClick = (index: number) => {
//     setActiveIndex(index);
//     setIsUserActive(false);
//     setIsCollapseActive(false);
//   };

//   const handleUserClick = () => {
//     setIsUserActive(true);
//     setActiveIndex(null);
//     setIsCollapseActive(false);
//   };

//   const linkClasses = (index: number) =>
//     clsx(
//       "relative flex items-center py-4  px-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
//       {
//         "bg-white text-teal-800 my-2 border-l-4 border-teal-800 rounded":
//           activeIndex === index,
//         "text-white": activeIndex !== index,
//       }
//     );

//   const collapseClasses = clsx(
//     "flex items-center p-4 cursor-pointer hover:text-teal-800 mx-2 transition-all duration-200 rounded px-4",
//     {
//       "text-teal-800 my-2 border-l-4 border-white rounded": isCollapseActive,
//     }
//   );

//   const userClasses = clsx(
//     "px-2 py-4 flex items-center cursor-pointer px-4 mb-2 text-white hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
//     {
//       "bg-white text-teal-800 my-2 border-l-4 border-white rounded":
//         isUserActive,
//     }
//   );

//   const isActive = (route: string) =>
//     route === pathname || pathname.startsWith(`${route}/`);
//   //   const isActive = (route: string) => route === pathname;

//   const links = [
//     {
//       icon: <MdDashboard />,
//       text: "Dashboard",
//       route: "/",
//     },
//     {
//       icon: <FaChartLine />,
//       text: "Get Insight",
//       route: "/insight",
//     },
//     {
//       icon: <FaDatabase />,
//       text: "Data Sources",
//       route: "/dataSources",
//     },
//     {
//       icon: <FaDatabase />,
//       text: "Views",
//       route: "/views",
//     },
//     {
//       icon: <FaFileInvoiceDollar />,
//       text: "Billing",
//       route: "/billing",
//     },
//   ];

//   const bottomLinks = [
//     { icon: <MdHelp />, text: "Get Help", route: "/help" },
//     {
//       icon: (
//         <Image
//           src="/bright.png"
//           alt="Profile"
//           className="rounded-full"
//           width={36}
//           height={36}
//         />
//       ),
//       text: "User",
//       route: "/user",
//     },
//   ];

//   return (
//     <div
//       className={`flex flex-col h-screen bg-[#038C7F]  ${
//         isOpen ? "w-64" : "w-20"
//       } transition-all duration-300`}
//     >
//       <div className="flex items-center justify-between p-4  mt-10">
//         {isOpen ? (
//           <span className="text-white text-lg font-bold">URUbytes</span>
//         ) : (
//           <Image src="/u-logo.png" alt="Logo" width={32} height={32} />
//         )}
//       </div>
//       <nav className="flex-1">
//         <ul>
//           {links.map((link, index) => (
//             <li key={index} onClick={() => handleLinkClick(index)}>
//               <Link
//                 href={link.route}
//                 key={index}
//                 className={linkClasses(index)}
//                 onClick={() => handleLinkClick(index)}
//               >
//                 <div className="text-inherit text-2xl">{link.icon}</div>
//                 <span
//                   className={`ml-4 origin-left duration-200 ${
//                     !isOpen && "opacity-0 translate-x-28 overflow-hidden"
//                   }`}
//                 >
//                   {link.text}
//                 </span>
//               </Link>

//               {isActive(link.route) && (
//                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
//               )}
//             </li>
//           ))}
//           <hr className="border-[#fff] my-4" />
//         </ul>
//       </nav>
//       <div className="">
//         <hr className="border-[#fff] my-2" />
//         <div onClick={toggleSidebar} className={collapseClasses}>
//           {isOpen ? (
//             <>
//               <Image
//                 src="/collapse.png"
//                 alt="Collapse"
//                 width={20}
//                 height={20}
//               />
//               <span className="ml-4 text-white">Collapse</span>
//             </>
//           ) : (
//             <Image src="/collapse.png" alt="Collapse" width={24} height={24} />
//           )}
//         </div>
//         <hr className="border-[#fff] my-2" />
//         {/* Bottom links */}
//         <nav className="flex-1">
//           <ul>
//             {bottomLinks.map((link, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleLinkClick(index + links.length)}
//               >
//                 <Link
//                   href={link.route}
//                   key={index}
//                   className={linkClasses(index)}
//                   onClick={() => handleLinkClick(index)}
//                 >
//                   <div className="text-inherit text-2xl">{link.icon}</div>
//                   <span
//                     className={`ml-4 origin-left duration-200 ${
//                       !isOpen && "opacity-0 translate-x-28 overflow-hidden"
//                     }`}
//                   >
//                     {link.text}
//                   </span>
//                 </Link>
//                 {isActive(link.route) && (
//                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";

import { useState } from "react";
import {
  FaBars,
  FaChartLine,
  FaDatabase,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { MdDashboard, MdHelp } from "react-icons/md";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import style from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isCollapseActive, setIsCollapseActive] = useState(false);
  const pathname = usePathname();

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
      "relative flex items-center py-4  px-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
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
      route: "/",
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
      icon: <FaDatabase />,
      text: "Views",
      route: "/views",
    },
    {
      icon: <FaFileInvoiceDollar />,
      text: "Billing",
      route: "/billing",
    },
  ];

  const bottomLinks = [
    { icon: <MdHelp />, text: "Get Help", route: "/help" },
    {
      icon: (
        <Image
          src="/bright.png"
          alt="Profile"
          className="rounded-full"
          width={36}
          height={36}
        />
      ),
      text: "User",
      route: "/user",
    },
  ];

  const isActive = (route: string) => route === pathname;

  return (
    <div
      className={`flex flex-col h-screen bg-[#038C7F]  ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4  mt-10">
        {isOpen ? (
          <span className="text-white text-lg font-bold">URUbytes</span>
        ) : (
          <Image src="/u-logo.png" alt="Logo" width={32} height={32} />
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
        <hr className="border-[#fff] my-2" />
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
              <li
                key={`bottom-link-${index}`}
                onClick={() => handleLinkClick(index + links.length)}
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
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
