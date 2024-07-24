// import React from "react";
// import {
//   IoEllipsisVerticalOutline,
//   IoCreateOutline,
//   IoSearchOutline,
// } from "react-icons/io5";
// import { CiGrid42 } from "react-icons/ci";
// import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
// import Link from "next/link";

// interface ViewItem {
//   title: string;
//   updated: string;
//   icon: React.ReactNode;
//   link: string;
// }

// interface ChartItem {
//   title: string;
//   type: string;
//   updated: string;
// }

// const views: ViewItem[] = [
//   {
//     title: "Views by Radii",
//     updated: "4 days ago",
//     icon: (
//       <CiGrid42
//         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//         size={34}
//       />
//     ),
//     link: "/radiiView",
//   },
//   {
//     title: "Customer Movement",
//     updated: "1 day ago",
//     icon: (
//       <CiGrid42
//         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//         size={34}
//       />
//     ),
//     link: "#",
//   },
// ];

// const charts: ChartItem[] = [
//   { title: "Revenue by Product", type: "Doughnut", updated: "4 days ago" },
//   { title: "Total Sales in June", type: "Pie", updated: "4 days ago" },
// ];

// const MyViews: React.FC = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Views</h1>

//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4 w-4/5">
//           <h2 className="text-xl font-semibold">Views</h2>
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
//             <IoCreateOutline className="mr-2" />
//             Create View
//           </button>
//         </div>
//         <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//           {views.map((view, index) => (
//             <Link
//               href={view.link}
//               key={index}
//               className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
//             >
//               <div className="flex items-center">
//                 {view.icon}
//                 <div>
//                   <h3 className="font-bold mb-4">{view.title}</h3>
//                   <p className="text-gray-500">Updated {view.updated}</p>
//                 </div>
//               </div>
//               <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between items-center mb-8">
//         <p className="text-gray-500">Showing 1-10 of 15</p>
//         <div className="flex space-x-2">
//           <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
//             1
//           </button>
//           <button className="px-3 py-1 text-gray-700 rounded">2</button>
//           <button className="px-3 py-1 text-gray-700 rounded">3</button>
//           <button className="px-3 py-1 text-gray-700 rounded">4</button>
//           <button className="px-3 py-1 text-gray-700 rounded">5</button>
//           <span className="px-3 py-1">...</span>
//           <button className="px-3 py-1 text-gray-700 rounded">10</button>
//         </div>
//       </div>

//       <div>
//         <div className="flex flex-col mb-4">
//           <h2 className="text-xl font-semibold mb-4">Charts</h2>
//           <div className="relative w-[20%]">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border p-2 rounded-lg w-full pl-10"
//             />
//             <IoSearchOutline className="absolute top-[13px] left-3 text-gray-500" />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//           {charts.map((chart, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
//             >
//               <div className="flex items-center">
//                 {chart.type === "Doughnut" && (
//                   <FaChartPie
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={34}
//                   />
//                 )}
//                 {chart.type === "Pie" && (
//                   <FaChartPie
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={34}
//                   />
//                 )}
//                 {chart.type === "Bar" && (
//                   <FaChartBar
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={44}
//                   />
//                 )}
//                 {chart.type === "Line" && (
//                   <FaChartLine
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={44}
//                   />
//                 )}
//                 <div>
//                   <h3 className="font-bold">{chart.title}</h3>
//                   <div className="flex justify-between gap-4 items-center mt-4">
//                     <p className="text-gray-500">{chart.type}</p>
//                     <p className="text-gray-500">Updated {chart.updated}</p>
//                   </div>
//                 </div>
//               </div>
//               <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-8">
//         <p className="text-gray-500">Showing 1-10 of 15</p>
//         <div className="flex space-x-2">
//           <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
//             1
//           </button>
//           <button className="px-3 py-1 text-gray-700 rounded">2</button>
//           <button className="px-3 py-1 text-gray-700 rounded">3</button>
//           <button className="px-3 py-1 text-gray-700 rounded">4</button>
//           <button className="px-3 py-1 text-gray-700 rounded">5</button>
//           <span className="px-3 py-1">...</span>
//           <button className="px-3 py-1 text-gray-700 rounded">10</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyViews;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   IoEllipsisVerticalOutline,
//   IoCreateOutline,
//   IoSearchOutline,
// } from "react-icons/io5";
// import { CiGrid42 } from "react-icons/ci";
// import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
// import Link from "next/link";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// interface ViewItem {
//   title: string;
//   updated: string;
//   icon: React.ReactNode;
//   link: string;
// }

// interface ChartItem {
//   id: string;
//   title: string;
//   type: string;
//   updated: string;
// }

// const views: ViewItem[] = [
//   {
//     title: "Views by Radii",
//     updated: "4 days ago",
//     icon: (
//       <CiGrid42
//         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//         size={34}
//       />
//     ),
//     link: "/radiiView",
//   },
//   {
//     title: "Customer Movement",
//     updated: "1 day ago",
//     icon: (
//       <CiGrid42
//         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//         size={34}
//       />
//     ),
//     link: "#",
//   },
// ];

// const MyViews: React.FC = () => {
//   const [charts, setCharts] = useState<ChartItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const fetchCharts = async () => {
//       try {
//         const response = await fetch(
//           "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
//           generateAxiosConfig()
//         );
//         const data = await response.json();
//         setCharts(data);
//         console.log("Charts:", data);
//       } catch (error) {
//         console.error("Error fetching charts:", error);
//       }
//     };

//     fetchCharts();
//   }, []);

//   // Pagination logic
//   const indexOfLastChart = currentPage * itemsPerPage;
//   const indexOfFirstChart = indexOfLastChart - itemsPerPage;
//   const currentCharts = charts.slice(indexOfFirstChart, indexOfLastChart);
//   const totalPages = Math.ceil(charts.length / itemsPerPage);

//   const handleClick = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">My Views</h1>

//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4 w-4/5">
//           <h2 className="text-xl font-semibold">Views</h2>
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
//             <IoCreateOutline className="mr-2" />
//             Create View
//           </button>
//         </div>
//         <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//           {views.map((view, index) => (
//             <Link
//               href={view.link}
//               key={index}
//               className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
//             >
//               <div className="flex items-center">
//                 {view.icon}
//                 <div>
//                   <h3 className="font-bold mb-4">{view.title}</h3>
//                   <p className="text-gray-500">Updated {view.updated}</p>
//                 </div>
//               </div>
//               <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div>
//         <div className="flex flex-col mb-4">
//           <h2 className="text-xl font-semibold mb-4">Charts</h2>
//           <div className="relative w-[20%]">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border p-2 rounded-lg w-full pl-10"
//             />
//             <IoSearchOutline className="absolute top-[13px] left-3 text-gray-500" />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//           {currentCharts.map((chart, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
//             >
//               <div className="flex items-center">
//                 {chart.type === "Doughnut" && (
//                   <FaChartPie
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={34}
//                   />
//                 )}
//                 {chart.type === "Pie" && (
//                   <FaChartPie
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={34}
//                   />
//                 )}
//                 {chart.type === "Bar" && (
//                   <FaChartBar
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={44}
//                   />
//                 )}
//                 {chart.type === "Line" && (
//                   <FaChartLine
//                     className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                     size={44}
//                   />
//                 )}
//                 <div>
//                   <h3 className="font-bold">{chart.title}</h3>
//                   <div className="flex justify-between gap-4 items-center mt-4">
//                     <p className="text-gray-500">{chart.type}</p>
//                     <p className="text-gray-500">Updated {chart.updated}</p>
//                   </div>
//                 </div>
//               </div>
//               <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-8">
//         <p className="text-gray-500">
//           Showing {indexOfFirstChart + 1}-
//           {Math.min(indexOfLastChart, charts.length)} of {charts.length}
//         </p>
//         <div className="flex space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//             (page) => (
//               <button
//                 key={page}
//                 className={`px-3 py-1 ${
//                   page === currentPage
//                     ? "bg-gray-200 text-gray-700"
//                     : "text-gray-700"
//                 } rounded`}
//                 onClick={() => handleClick(page)}
//               >
//                 {page}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyViews;

"use client";


import React, { useEffect, useState } from "react";
import {
  IoEllipsisVerticalOutline,
  IoCreateOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";
import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import ChartModal from "@/app/component/ChartModal";

interface ViewItem {
  title: string;
  updated: string;
  icon: React.ReactNode;
  link: string;
}

interface ChartItem {
  chartID: string;
  chart_data: string;
  created_at: string;
  name: string;
  type: string;
  updated_at: string;
  user: string;
  organization: string;
  searchID: string;
}

const views: ViewItem[] = [
  {
    title: "Views by Radii",
    updated: "4 days ago",
    icon: (
      <CiGrid42
        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
        size={34}
      />
    ),
    link: "/radiiView",
  },
  {
    title: "Customer Movement",
    updated: "1 day ago",
    icon: (
      <CiGrid42
        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
        size={34}
      />
    ),
    link: "#",
  },
];

const MyViews: React.FC = () => {
  const [charts, setCharts] = useState<ChartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedChart, setSelectedChart] = useState<ChartItem | null>(null);
  const chartsPerPage = 5;

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await axios.get(
          "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
          generateAxiosConfig()
        );
        setCharts(response.data);
      } catch (error) {
        console.error("Error fetching charts:", error);
      }
    };

    fetchCharts();
  }, []);

  const handleChartClick = (chart: ChartItem) => {
    setSelectedChart(chart);
  };

  const closeModal = () => {
    setSelectedChart(null);
  };

  // Pagination logic
  const indexOfLastChart = currentPage * chartsPerPage;
  const indexOfFirstChart = indexOfLastChart - chartsPerPage;
  const currentCharts = charts
    .filter((chart) =>
      chart.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstChart, indexOfLastChart);

  const totalPages = Math.ceil(charts.length / chartsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Views</h1>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 w-4/5">
          <h2 className="text-xl font-semibold">Views</h2>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
            <IoCreateOutline className="mr-2" />
            Create View
          </button>
        </div>
        <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
          {views.map((view, index) => (
            <Link
              href={view.link}
              key={index}
              className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
            >
              <div className="flex items-center">
                {view.icon}
                <div>
                  <h3 className="font-bold mb-4">{view.title}</h3>
                  <p className="text-gray-500">Updated {view.updated}</p>
                </div>
              </div>
              <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-500">
          Showing {indexOfFirstChart + 1}-
          {Math.min(indexOfLastChart, charts.length)} of {charts.length}
        </p>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-gray-200" : "text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-col mb-4">
          <h2 className="text-xl font-semibold mb-4">Charts</h2>
          <div className="relative w-[20%]">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded-lg w-full pl-10"
            />
            <IoSearchOutline className="absolute top-[13px] left-3 text-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
          {currentCharts.map((chart, index) => {
            return (
              <div
                key={index}
                className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
                onClick={() => handleChartClick(chart)}
              >
                <div className="flex items-center">
                  {chart.type === "Doughnut" && (
                    <FaChartPie
                      className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                      size={34}
                    />
                  )}
                  {chart.type === "Pie" && (
                    <FaChartPie
                      className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                      size={34}
                    />
                  )}
                  {chart.type === "Bar" && (
                    <FaChartBar
                      className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                      size={44}
                    />
                  )}
                  {chart.type === "Line" && (
                    <FaChartLine
                      className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                      size={44}
                    />
                  )}
                  <div>
                    <div className="flex justify-between gap-4 items-center mt-4">
                      <p className="text-gray-500">
                        Updated{" "}
                        {new Date(chart.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="text-gray-500">
          Showing {indexOfFirstChart + 1}-
          {Math.min(indexOfLastChart, charts.length)} of {charts.length}
        </p>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-gray-200" : "text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <ChartModal
        isOpen={!!selectedChart}
        onClose={closeModal}
        chartData={selectedChart}
      />
    </div>
  );
};

export default MyViews;
