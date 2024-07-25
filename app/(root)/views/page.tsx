// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   IoEllipsisVerticalOutline,
//   IoCreateOutline,
//   IoSearchOutline,
// } from "react-icons/io5";
// import { CiGrid42 } from "react-icons/ci";
// import {
//   FaChartPie,
//   FaChartBar,
//   FaChartLine,
//   FaTrashAlt,
// } from "react-icons/fa";
// import Link from "next/link";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import ChartModal from "@/app/component/ChartModal";
// import Navbar from "@/app/component/NavBar";

// interface ViewItem {
//   title: string;
//   updated: string;
//   icon: React.ReactNode;
//   link: string;
// }

// interface ChartItem {
//   chartID: string;
//   chart_data: string;
//   created_at: string;
//   name: string;
//   type: string;
//   updated_at: string;
//   user: string;
//   organization: string;
//   searchID: string;
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
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedChart, setSelectedChart] = useState<ChartItem | null>(null);
//   const chartsPerPage = 4;

//   useEffect(() => {
//     const fetchCharts = async () => {
//       try {
//         const response = await axios.get(
//           "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
//           generateAxiosConfig()
//         );
//         setCharts(response.data);
//       } catch (error) {
//         console.error("Error fetching charts:", error);
//       }
//     };

//     fetchCharts();
//   }, []);

//   const handleChartClick = (chart: ChartItem) => {
//     setSelectedChart(chart);
//   };

//   const closeModal = () => {
//     setSelectedChart(null);
//   };

//   const indexOfLastChart = currentPage * chartsPerPage;
//   const indexOfFirstChart = indexOfLastChart - chartsPerPage;
//   const currentCharts = charts
//     .filter((chart) =>
//       chart.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .slice(indexOfFirstChart, indexOfLastChart);

//   const totalPages = Math.ceil(charts.length / chartsPerPage);

//   return (
//     <div className="bg-gray-100 h-screen overflow-y-auto">
//       <Navbar title="My Views" />

//       <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//         <div className="mb-8">
//           <div className="flex justify-end items-end mb-4 w-4/5">
//             <button className="flex items-end px-4 py-2 bg-green-500 text-white rounded">
//               <IoCreateOutline className="mr-2" />
//               Create View
//             </button>
//           </div>
//           <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//             {views.map((view, index) => (
//               <Link
//                 href={view.link}
//                 key={index}
//                 className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
//               >
//                 <div className="flex items-center">
//                   {view.icon}
//                   <div>
//                     <h3 className="font-bold mb-4">{view.title}</h3>
//                     <p className="text-gray-500">Updated {view.updated}</p>
//                   </div>
//                 </div>
//                 <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-between items-center mb-8">
//           <p className="text-gray-500">
//             Showing {indexOfFirstChart + 1}-
//             {Math.min(indexOfLastChart, charts.length)} of {charts.length}
//           </p>
//           <div className="flex space-x-2">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-3 py-1 rounded ${
//                   currentPage === index + 1 ? "bg-gray-200" : "text-gray-700"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <div className="flex flex-col mb-4">
//             <h2 className="text-xl font-semibold mb-4">Charts</h2>
//             <div className="relative w-[20%]">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="border p-2 rounded-lg w-full pl-10"
//               />
//               <IoSearchOutline className="absolute top-[13px] left-3 text-gray-500" />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
//             {currentCharts.map((chart, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
//                   onClick={() => handleChartClick(chart)}
//                 >
//                   <div className="flex items-center">
//                     {chart.type === "Doughnut" && (
//                       <FaChartPie
//                         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                         size={34}
//                       />
//                     )}
//                     {chart.type === "Pie" && (
//                       <FaChartPie
//                         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                         size={34}
//                       />
//                     )}
//                     {chart.type === "Bar" && (
//                       <FaChartBar
//                         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                         size={44}
//                       />
//                     )}
//                     {chart.type === "Line" && (
//                       <FaChartLine
//                         className="text-2xl mr-4 text-[#038C7F] font-extrabold"
//                         size={44}
//                       />
//                     )}
//                     <div>
//                       <div className="flex justify-between gap-4 items-center mt-4">
//                         <p className="text-gray-500">
//                           Updated{" "}
//                           {new Date(chart.updated_at).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <FaTrashAlt className="text-red-500 cursor-pointer" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <p className="text-gray-500">
//             Showing {indexOfFirstChart + 1}-
//             {Math.min(indexOfLastChart, charts.length)} of {charts.length}
//           </p>
//           <div className="flex space-x-2">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-3 py-1 rounded ${
//                   currentPage === index + 1 ? "bg-gray-200" : "text-gray-700"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         <ChartModal
//           isOpen={!!selectedChart}
//           onClose={closeModal}
//           chartData={selectedChart}
//         />
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
import {
  FaChartPie,
  FaChartBar,
  FaChartLine,
  FaTrashAlt,
} from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import ChartModal from "@/app/component/ChartModal";
import Navbar from "@/app/component/NavBar";
import { toast, ToastContainer } from "react-toastify";

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
  const chartsPerPage = 4;

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

  const handleDelete = async (chartID: string) => {
    try {
      await axios.delete(
        `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/${chartID}/`,
        generateAxiosConfig()
      );
      setCharts((prevCharts) =>
        prevCharts.filter((chart) => chart.chartID !== chartID)
      );
      toast.success("Chart deleted successfully");
    } catch (error) {
      console.error("Error deleting chart:", error);
    }
  };

  const indexOfLastChart = currentPage * chartsPerPage;
  const indexOfFirstChart = indexOfLastChart - chartsPerPage;
  const currentCharts = charts
    .filter((chart) =>
      chart.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstChart, indexOfLastChart);

  const totalPages = Math.ceil(charts.length / chartsPerPage);

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100 h-screen overflow-y-auto">
        <Navbar title="My Views" />

        <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="mb-8">
            <div className="flex justify-end items-end mb-4 w-4/5">
              <button className="flex items-end px-4 py-2 bg-green-500 text-white rounded">
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
              {currentCharts.map((chart, index) => (
                <div
                  key={index}
                  className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
                >
                  <div
                    className="flex items-center"
                    onClick={() => handleChartClick(chart)}
                  >
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
                        {/* <h3 className="font-bold">{chart.title}</h3> */}
                        <p className="text-gray-500">
                          Updated{" "}
                          {new Date(chart.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <FaTrashAlt
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(chart.chartID)}
                  />
                </div>
              ))}
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
      </div>
    </>
  );
};

export default MyViews;
