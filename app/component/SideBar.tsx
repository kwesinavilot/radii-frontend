// // "use client";

// // import { useState } from "react";
// // import {
// //   FaBars,
// //   FaChartLine,
// //   FaDatabase,
// //   FaFileInvoiceDollar,
// // } from "react-icons/fa";
// // import { MdDashboard, MdHelp } from "react-icons/md";
// // import clsx from "clsx";
// // import Image from "next/image";

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(true);
// //   const [activeIndex, setActiveIndex] = useState<number | null>(null);

// //   const toggleSidebar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const handleLinkClick = (index: number) => {
// //     setActiveIndex(index);
// //   };

// //   const linkClasses = (index: number) =>
// //     clsx(
// //       "relative flex items-center p-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
// //       {
// //         "bg-white text-teal-800  my-2 border-l-4 border-teal-800 rounded":
// //           activeIndex === index,
// //         "text-white": activeIndex !== index,
// //       }
// //     );

// //   const links = [
// //     {
// //       icon: <MdDashboard className="text-inherit text-2xl" />,
// //       text: "Dashboard",
// //     },
// //     {
// //       icon: <FaChartLine className="text-inherit text-2xl" />,
// //       text: "Get Insight",
// //     },
// //     {
// //       icon: <FaDatabase className="text-inherit text-2xl" />,
// //       text: "Data Sources",
// //     },
// //     {
// //       icon: <FaFileInvoiceDollar className="text-inherit text-2xl" />,
// //       text: "Billing",
// //     },
// //     { icon: <MdHelp className="text-inherit text-2xl" />, text: "Get Help" },
// //   ];

// //   return (
// //     <div
// //       className={`flex flex-col h-screen bg-teal-800 ${
// //         isOpen ? "w-64" : "w-20"
// //       } transition-width duration-300`}
// //     >
// //       <div className="flex items-center justify-between p-4">
// //         {isOpen ? (
// //           <span className="text-white text-lg font-bold">URUbytes</span>
// //         ) : (
// //           <Image src="/u-logo.png" alt="Logo" width={32} height={32} />
// //         )}
// //       </div>
// //       <nav className="flex-1 mt-10">
// //         <ul>
// //           {links.slice(0, 4).map((link, index) => (
// //             <li
// //               key={index}
// //               className={linkClasses(index)}
// //               onClick={() => handleLinkClick(index)}
// //             >
// //               {link.icon}
// //               <span
// //                 className={`ml-4 origin-left duration-200 ${
// //                   !isOpen && "opacity-0 translate-x-28 overflow-hidden"
// //                 }`}
// //               >
// //                 {link.text}
// //               </span>
// //               {activeIndex === index && (
// //                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
// //               )}
// //             </li>
// //           ))}
// //           <hr className="border-teal-600 my-2 mx-4" />
// //         </ul>
// //       </nav>
// //       <div className="px-4">
// //         <hr className="border-teal-600 my-2" />
// //         <div
// //           className="flex items-center cursor-pointer hover:bg-teal-700 p-2 rounded"
// //           onClick={toggleSidebar}
// //         >
// //           {isOpen ? (
// //             <>
// //               <Image
// //                 src="/collapse.png"
// //                 alt="Collapse"
// //                 width={20}
// //                 height={20}
// //               />
// //               <span className="ml-4 text-white">Collapse</span>
// //             </>
// //           ) : (
// //             <Image src="/collapse.png" alt="Collapse" width={32} height={32} />
// //           )}
// //         </div>
// //         <hr className="border-teal-600 my-2" />
// //         {links.slice(4).map((link, index) => (
// //           <div
// //             key={index + 4}
// //             className={linkClasses(index + 4)}
// //             onClick={() => handleLinkClick(index + 4)}
// //           >
// //             {link.icon}
// //             <span
// //               className={`ml-4 origin-left duration-200 ${
// //                 !isOpen && "opacity-0 translate-x-28 overflow-hidden"
// //               }`}
// //             >
// //               {link.text}
// //             </span>
// //             {activeIndex === index + 4 && (
// //               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
// //             )}
// //           </div>
// //         ))}
// //         <hr className="border-teal-600 my-2" />
// //       </div>
// //       <div className="p-4 flex items-center">
// //         <img
// //           src="/bright.png"
// //           alt="Profile"
// //           className="rounded-full w-10 h-10"
// //         />
// //         {isOpen && (
// //           <div className="ml-4">
// //             <p className="text-white">Bright Ahedor</p>
// //             <p className="text-white text-sm">KudiGo Technologies</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

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

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLinkClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   const linkClasses = (index: number) =>
//     clsx(
//       "relative flex items-center p-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
//       {
//         "bg-white text-teal-800 my-2 border-l-4 border-teal-800 rounded":
//           activeIndex === index,
//         "text-white": activeIndex !== index,
//       }
//     );

//   const links = [
//     {
//       icon: (
//         <MdDashboard
//           className="text-inherit"
//           style={{ fontSize: isOpen ? "24px" : "20px" }}
//         />
//       ),
//       text: "Dashboard",
//     },
//     {
//       icon: (
//         <FaChartLine
//           className="text-inherit"
//           style={{ fontSize: isOpen ? "24px" : "20px" }}
//         />
//       ),
//       text: "Get Insight",
//     },
//     {
//       icon: (
//         <FaDatabase
//           className="text-inherit"
//           style={{ fontSize: isOpen ? "24px" : "20px" }}
//         />
//       ),
//       text: "Data Sources",
//     },
//     {
//       icon: (
//         <FaFileInvoiceDollar
//           className="text-inherit"
//           style={{ fontSize: isOpen ? "24px" : "20px" }}
//         />
//       ),
//       text: "Billing",
//     },
//     {
//       icon: (
//         <MdHelp
//           className="text-inherit"
//           style={{ fontSize: isOpen ? "24px" : "20px" }}
//         />
//       ),
//       text: "Get Help",
//     },
//   ];

//   return (
//     <div
//       className={`flex flex-col h-screen bg-teal-800 ${
//         isOpen ? "w-64" : "w-20"
//       } transition-all duration-300`}
//     >
//       <div className="flex items-center justify-between p-4">
//         {isOpen ? (
//           <span className="text-white text-lg font-bold">URUbytes</span>
//         ) : (
//           <Image src="/u-logo.png" alt="Logo" width={32} height={32} />
//         )}
//       </div>
//       <nav className="flex-1 mt-10">
//         <ul>
//           {links.slice(0, 4).map((link, index) => (
//             <li
//               key={index}
//               className={linkClasses(index)}
//               onClick={() => handleLinkClick(index)}
//             >
//               {link.icon}
//               <span
//                 className={`ml-4 origin-left transition-all duration-300 ${
//                   !isOpen
//                     ? "opacity-0 translate-x-28 overflow-hidden"
//                     : "opacity-100"
//                 }`}
//               >
//                 {link.text}
//               </span>
//               {activeIndex === index && (
//                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
//               )}
//             </li>
//           ))}
//           <hr className="border-teal-600 my-2 mx-4" />
//         </ul>
//       </nav>
//       <div className="px-4">
//         <hr className="border-teal-600 my-2" />
//         <div
//           className="flex items-center cursor-pointer hover:bg-teal-700 p-2 rounded"
//           onClick={toggleSidebar}
//         >
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
//             <Image src="/collapse.png" alt="Collapse" width={32} height={32} />
//           )}
//         </div>
//         <hr className="border-teal-600 my-2" />
//         {links.slice(4).map((link, index) => (
//           <div
//             key={index + 4}
//             className={linkClasses(index + 4)}
//             onClick={() => handleLinkClick(index + 4)}
//           >
//             {link.icon}
//             <span
//               className={`ml-4 origin-left transition-all duration-300 ${
//                 !isOpen
//                   ? "opacity-0 translate-x-28 overflow-hidden"
//                   : "opacity-100"
//               }`}
//             >
//               {link.text}
//             </span>
//             {activeIndex === index + 4 && (
//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
//             )}
//           </div>
//         ))}
//         <hr className="border-teal-600 my-2" />
//       </div>
//       <div className="p-4 flex items-center">
//         <img
//           src="/bright.png"
//           alt="Profile"
//           className="rounded-full w-10 h-10"
//         />
//         {isOpen && (
//           <div className="ml-4">
//             <p className="text-white">Bright Ahedor</p>
//             <p className="text-white text-sm">KudiGo Technologies</p>
//           </div>
//         )}
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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  const linkClasses = (index: number) =>
    clsx(
      "relative flex items-center p-4 cursor-pointer hover:bg-[#fff] hover:text-teal-800 mx-2 transition-all duration-200 rounded",
      {
        "bg-white text-teal-800 my-2 border-l-4 border-teal-800 rounded":
          activeIndex === index,
        "text-white": activeIndex !== index,
      }
    );

  const links = [
    {
      icon: <MdDashboard />,
      text: "Dashboard",
    },
    {
      icon: <FaChartLine />,
      text: "Get Insight",
    },
    {
      icon: <FaDatabase />,
      text: "Data Sources",
    },
    {
      icon: <FaFileInvoiceDollar />,
      text: "Billing",
    },
    { icon: <MdHelp />, text: "Get Help" },
  ];

  return (
    <div
      className={`flex flex-col h-screen bg-teal-800 ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen ? (
          <span className="text-white text-lg font-bold">URUbytes</span>
        ) : (
          <Image src="/u-logo.png" alt="Logo" width={32} height={32} />
        )}
      </div>
      <nav className="flex-1 mt-10">
        <ul>
          {links.slice(0, 4).map((link, index) => (
            <li
              key={index}
              className={linkClasses(index)}
              onClick={() => handleLinkClick(index)}
            >
              <div className="text-inherit text-2xl">{link.icon}</div>
              <span
                className={`ml-4 origin-left duration-200 ${
                  !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {link.text}
              </span>

              {activeIndex === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
              )}
            </li>
          ))}
          <hr className="border-teal-600 my-2 mx-4" />
        </ul>
      </nav>
      <div className="px-4">
        <hr className="border-teal-600 my-2" />
        <div
          className="flex items-center cursor-pointer hover:bg-teal-700 p-2 rounded"
          onClick={toggleSidebar}
        >
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
            <Image src="/collapse.png" alt="Collapse" width={32} height={32} />
          )}
        </div>
        <hr className="border-teal-600 my-2" />
        {links.slice(4).map((link, index) => (
          <div
            key={index + 4}
            className={clsx(linkClasses(index + 4), {
              "ml-0": link.text === "Get Help",
            })}
            onClick={() => handleLinkClick(index + 4)}
          >
            <div className="text-inherit text-2xl">{link.icon}</div>
            <span
              className={`ml-4 origin-left duration-200 ${
                !isOpen && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {link.text}
            </span>
            {activeIndex === index + 4 && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-800"></div>
            )}
          </div>
        ))}
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
