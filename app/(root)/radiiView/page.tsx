// "use client";

// import React from "react";
// import { IoRefreshOutline, IoEllipsisVerticalOutline } from "react-icons/io5";
// import { FaUser, FaBoxOpen, FaDollarSign, FaClock } from "react-icons/fa";
// import { Doughnut, Bar } from "react-chartjs-2";
// import {
//   Chart,
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// Chart.register(
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const ViewsByRadii: React.FC = () => {
//   const doughnutData = {
//     // labels: ["Completed", "Pending"],
//     datasets: [
//       {
//         data: [60, 40],
//         backgroundColor: ["#038C7F", "#FFCD56"],
//         hoverBackgroundColor: ["#038C7F", "#FFCD56"],
//       },
//     ],
//   };

//   const barData = {
//     labels: ["M", "T", "W", "T", "F", "S", "S"],
//     datasets: [
//       {
//         label: "News",
//         data: [2, 2, 2, 2, 2, 2, 2],
//         backgroundColor: "#038C7F",
//       },
//       {
//         label: "Games",
//         data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
//         backgroundColor: "#FFCD56",
//       },
//       {
//         label: "Social Media",
//         data: [5, 5, 5, 5, 5, 5, 5],
//         backgroundColor: "#FF6384",
//       },
//     ],
//   };

//   const barOptions = {
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Views by Radii</h1>
//         <div className="flex items-center space-x-4">
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
//             <IoRefreshOutline className="mr-2" />
//             Refresh
//           </button>
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
//             Edit
//           </button>
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
//             View Insights
//           </button>
//           <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//         <div className="border p-4 rounded-lg shadow-sm flex items-center">
//           <FaUser className="text-2xl mr-4 text-[#038C7F]" />
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Total User</h2>
//             <p className="text-2xl font-bold">40,689</p>
//             <p className="text-green-500">8.5% Up from yesterday</p>
//           </div>
//         </div>
//         <div className="border p-4 rounded-lg shadow-sm flex items-center">
//           <FaBoxOpen className="text-2xl mr-4 text-[#038C7F]" />
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Total Order</h2>
//             <p className="text-2xl font-bold">10,293</p>
//             <p className="text-green-500">1.3% Up from past week</p>
//           </div>
//         </div>
//         <div className="border p-4 rounded-lg shadow-sm row-span-2">
//           <h2 className="text-lg font-semibold mb-4">Daily Average</h2>
//           <p className="text-2xl font-bold">2h 20m</p>
//           <p className="text-red-500">+30m this week</p>
//           <Bar data={barData} options={barOptions} />
//         </div>
//         <div className="border p-4 rounded-lg shadow-sm flex items-center">
//           <FaDollarSign className="text-2xl mr-4 text-[#038C7F]" />
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Total Sales</h2>
//             <p className="text-2xl font-bold">$89,000</p>
//             <p className="text-red-500">4.3% Down from yesterday</p>
//           </div>
//         </div>

//         <div className="border p-4 rounded-lg shadow-sm flex items-center">
//           <FaClock className="text-2xl mr-4 text-[#038C7F]" />
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Total Pending</h2>
//             <p className="text-2xl font-bold">2,040</p>
//             <p className="text-green-500">1.8% Up from yesterday</p>
//           </div>
//         </div>
//         <div className="border p-8 rounded-lg shadow-sm col-span-2">
//           <div className="flex gap-8">
//             <div>
//               <h2 className="text-lg font-semibold mb-4">
//                 Total Retention Rate
//               </h2>
//               <p className="text-2xl font-bold">2,040</p>
//             </div>
//             <div className="w-32 h-32 ">
//               <Doughnut data={doughnutData} />
//             </div>
//           </div>

//           <p className="text-green-500 ">1.8% Up from yesterday</p>
//         </div>
//         <div className="border p-4 rounded-lg shadow-sm flex items-center">
//           <FaClock className="text-2xl mr-4 text-[#038C7F]" />
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Total Pending</h2>
//             <p className="text-2xl font-bold">2,040</p>
//             <p className="text-green-500">1.8% Up from yesterday</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewsByRadii;

"use client";

import React from "react";
import { IoRefreshOutline, IoEllipsisVerticalOutline } from "react-icons/io5";
import { FaUser, FaBoxOpen, FaDollarSign, FaClock } from "react-icons/fa";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ViewsByRadii: React.FC = () => {
  const doughnutData = {
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#FF8C00", "#FFCD56"],
        hoverBackgroundColor: ["#FF8C00", "#FFCD56"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Social Media",
        data: [2, 3, 2, 2, 2, 2, 2],
        backgroundColor: "#FFCD56",
        borderRadius: 20,
        barThickness: 12,
      },
      {
        label: "Games",
        data: [3.5, 5, 3.5, 6, 3.5, 4, 3.5],
        backgroundColor: "#FF6384",
        borderRadius: 20,
        barThickness: 12,
      },

      {
        label: "News",

        data: [5, 2, 5, 3, 5, 2, 5],
        backgroundColor: "#038C7F",
        borderRadius: 20,
        barThickness: 12,
      },
    ],
  };

  const barOptions = {
    plugins: {
      legend: {
        display: false,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          borderRadius: 5,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (tickValue: string | number) {
            return `${tickValue} hrs`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Views by Radii</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
            <IoRefreshOutline className="mr-2" />
            Refresh
          </button>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
            Edit
          </button>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded">
            View Insights
          </button>
          <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="border p-4 rounded-lg shadow-sm flex items-center">
          <FaUser className="text-2xl mr-4 text-[#038C7F]" />
          <div>
            <h2 className="text-lg font-semibold mb-4">Total User</h2>
            <p className="text-2xl font-bold">40,689</p>
            <p className="text-green-500">8.5% Up from yesterday</p>
          </div>
        </div>
        <div className="border p-4 rounded-lg shadow-sm flex items-center">
          <FaBoxOpen className="text-2xl mr-4 text-[#038C7F]" />
          <div>
            <h2 className="text-lg font-semibold mb-4">Total Order</h2>
            <p className="text-2xl font-bold">10,293</p>
            <p className="text-green-500">1.3% Up from past week</p>
          </div>
        </div>
        <div className="border p-4 rounded-lg shadow-sm row-span-2">
          <div className="flex justify-between items-center p-2">
            <div>
              <h2 className="text-lg font-semibold mb-2">Daily Average</h2>
              <p className="text-2xl font-bold">2h 20m</p>
            </div>
            <p className="text-red-500">+30m this week</p>
          </div>
          <Bar data={barData} options={barOptions} />
          <div className="flex mt-4 space-x-4 flex-wrap items-center mx-auto justify-center">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#038C7F] mr-2"></div>
              <span>News 2hrs</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#FF6384] mr-2"></div>
              <span>Games 30mins</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#FFCD56] mr-2"></div>
              <span>Social Media 5hrs</span>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-lg shadow-sm flex items-center">
          <FaDollarSign className="text-2xl mr-4 text-[#038C7F]" />
          <div>
            <h2 className="text-lg font-semibold mb-4">Total Sales</h2>
            <p className="text-2xl font-bold">$89,000</p>
            <p className="text-red-500">4.3% Down from yesterday</p>
          </div>
        </div>

        <div className="border p-4 rounded-lg shadow-sm flex items-center">
          <FaClock className="text-2xl mr-4 text-[#038C7F]" />
          <div>
            <h2 className="text-lg font-semibold mb-4">Total Pending</h2>
            <p className="text-2xl font-bold">2,040</p>
            <p className="text-green-500">1.8% Up from yesterday</p>
          </div>
        </div>
        <div className="border p-8 rounded-lg shadow-sm col-span-2">
          <div className="flex gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Total Retention Rate
              </h2>
              <p className="text-2xl font-bold">2,040</p>
            </div>
            <div className="w-32 h-32">
              <Doughnut data={doughnutData} />
            </div>
          </div>

          <p className="text-green-500">1.8% Up from yesterday</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm flex items-center">
          <FaClock className="text-2xl mr-4 text-[#038C7F]" />
          <div>
            <h2 className="text-lg font-semibold mb-4">Total Pending</h2>
            <p className="text-2xl font-bold">2,040</p>
            <p className="text-green-500">1.8% Up from yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsByRadii;
