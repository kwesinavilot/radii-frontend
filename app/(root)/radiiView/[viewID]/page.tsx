// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import axios from "axios";
// // import generateAxiosConfig from "@/app/config/axiosConfig";
// // import Image from "next/image";
// // import { TbRefresh } from "react-icons/tb";
// // import { HiDotsVertical } from "react-icons/hi";
// // import ChartSelectorModal from "@/app/component/ChartSelectorModal";
// // import ChartModal from "@/app/component/ChartModal";
// // import { ChartItem } from "@/app/types";
// // import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement,
// //   PointElement,
// //   LineElement,
// // } from "chart.js";

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement,
// //   PointElement,
// //   LineElement
// // );

// // interface View {
// //   id: string;
// //   name: string;
// //   description: string;
// // }

// // const RadiiView: React.FC = () => {
// //   const router = useRouter();
// //   const { viewID } = useParams();
// //   const [view, setView] = useState<View | null>(null);
// //   const [charts, setCharts] = useState<ChartItem[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedChart, setSelectedChart] = useState<ChartItem | null>(null);

// //   useEffect(() => {
// //     if (viewID) {
// //       fetchViewData();
// //     }
// //   }, [viewID]);

// //   const fetchViewData = async () => {
// //     try {
// //       const response = await axios.get<View>(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/`,
// //         generateAxiosConfig()
// //       );
// //       setView(response.data);
// //     } catch (error) {
// //       setError("Failed to fetch view data");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddChart = async (selectedCharts: ChartItem[]) => {
// //     try {
// //       const chartsToAdd = selectedCharts.map((chart) => ({
// //         chartID: chart.chartID,
// //         position_x: 0,
// //         position_y: 0,
// //         width: 400,
// //         height: 300,
// //       }));

// //       const response = await axios.post(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //         { charts: chartsToAdd },
// //         generateAxiosConfig()
// //       );

// //       console.log("Add Chart Response:", response.data);
// //       console.log("Charts:", charts);
// //       console.log("response:", response);

// //       if (Array.isArray(response.data)) {
// //         setCharts([...charts, ...response.data]);
// //       } else {
// //         setCharts([...charts, response.data]);
// //       }
// //     } catch (error) {
// //       console.error("Failed to add chart:", error);
// //       setError("Failed to add chart");
// //     }
// //   };

// //   const renderChart = (chart: ChartItem) => {
// //     if (!chart.chart_data) {
// //       return <p>Chart data is not available.</p>;
// //     }

// //     let parsedData;
// //     try {
// //       parsedData = JSON.parse(chart.chart_data);
// //     } catch (error) {
// //       console.error("Failed to parse chart data:", error);
// //       return <p>Invalid chart data.</p>;
// //     }

// //     const chartOptions = {
// //       plugins: {
// //         title: {
// //           display: true,
// //           text: parsedData.options?.title || "No Title Available",
// //         },
// //       },
// //       scales: {
// //         y: {
// //           beginAtZero: true,
// //         },
// //       },
// //     };

// //     switch (chart.type) {
// //       case "Bar":
// //         return <Bar data={parsedData.data} options={chartOptions} />;
// //       case "Line":
// //         return <Line data={parsedData.data} options={chartOptions} />;
// //       case "Pie":
// //         return <Pie data={parsedData.data} options={chartOptions} />;
// //       case "Doughnut":
// //         return <Doughnut data={parsedData.data} options={chartOptions} />;
// //       default:
// //         return <p>Unsupported chart type.</p>;
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="mb-4 mx-8 text-[20px]">Overview</h2>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : error ? (
// //         <p>{error}</p>
// //       ) : view === null ? (
// //         <p>View not found</p>
// //       ) : (
// //         <div className="flex justify-between items-center mb-6 border p-4 rounded-lg shadow-lg bg-white">
// //           <div className="flex items-center">
// //             <div>
// //               <h3 className="text-xl font-semibold">{view.name}</h3>
// //             </div>
// //           </div>
// //           <div className="flex space-x-4">
// //             <button
// //               className="flex items-center p-1 text-black border border-[#000] rounded"
// //               onClick={() => setIsModalOpen(true)}
// //             >
// //               <span className="ml-2">Add Chart</span>
// //             </button>
// //             <button className="flex items-center p-1 text-black border border-[#000] rounded">
// //               <TbRefresh className="size-8" />
// //             </button>
// //             <button className="flex items-center justify-center px-4 py-2 border border-[#000] text-[#000] rounded">
// //               Edit
// //             </button>
// //             <button className="flex items-center gap-2 px-4 py-2 border text-[18px] bg-[#038C7F] text-[#fff] rounded">
// //               <Image
// //                 src="/IconWhite.svg"
// //                 alt="Logo"
// //                 width={10}
// //                 height={10}
// //                 className="flex items-center"
// //               />
// //               NOVA AI
// //             </button>
// //             <HiDotsVertical className="text-[#000] text-[2.5rem] cursor-pointer" />
// //           </div>
// //         </div>
// //       )}
// //       {charts.length === 0 ? (
// //         <div>No charts have been added to this view yet.</div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           {charts.map((chart) => (
// //             <div
// //               key={chart.chartID}
// //               className="border p-4 rounded shadow-sm py-6"
// //               onClick={() => setSelectedChart(chart)}
// //             >
// //               <h3 className="font-bold mb-4">{chart.name}</h3>
// //               {renderChart(chart)}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //       <ChartSelectorModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         onSelectCharts={handleAddChart}
// //       />
// //       {selectedChart && (
// //         <ChartModal
// //           isOpen={Boolean(selectedChart)}
// //           onClose={() => setSelectedChart(null)}
// //           chartData={selectedChart}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default RadiiView;

// // RadiiView.tsx
// "use client";
// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import Image from "next/image";
// import { TbRefresh } from "react-icons/tb";
// import { HiDotsVertical } from "react-icons/hi";
// import ChartSelectorModal from "@/app/component/ChartSelectorModal";
// import ChartModal from "@/app/component/ChartModal";
// import { ChartItem } from "@/app/types";
// import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// interface View {
//   id: string;
//   name: string;
//   description: string;
// }

// interface ChartResponse {
//   chart: {
//     chartID: string;
//     name: string;
//     chart_data: string;
//     type: string;
//   };
// }

// const RadiiView: React.FC = () => {
//   const router = useRouter();
//   const { viewID } = useParams();
//   const [view, setView] = useState<View | null>(null);
//   const [charts, setCharts] = useState<ChartItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedChart, setSelectedChart] = useState<ChartItem | null>(null);

//   useEffect(() => {
//     if (viewID) {
//       fetchViewData();
//     }
//   }, [viewID]);

//   const fetchViewData = async () => {
//     try {
//       const response = await axios.get<View>(
//         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/`,
//         generateAxiosConfig()
//       );
//       setView(response.data);
//     } catch (error) {
//       setError("Failed to fetch view data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddChart = async (selectedCharts: ChartItem[]) => {
//     try {
//       const chartsToAdd = selectedCharts.map((chart) => ({
//         chartID: chart.chartID,
//         position_x: 0,
//         position_y: 0,
//         width: 400,
//         height: 300,
//       }));

//       const response = await axios.post(
//         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
//         { charts: chartsToAdd },
//         generateAxiosConfig()
//       );

//       console.log("Add Chart Response:", response.data);

//       const newCharts = response.data.view.charts.map(
//         (item: ChartResponse) => ({
//           chartID: item.chart.chartID,
//           name: item.chart.name,
//           chart_data: item.chart.chart_data,
//           type: item.chart.type,
//         })
//       );

//       setCharts((prevCharts) => [...prevCharts, ...newCharts]);
//     } catch (error) {
//       console.error("Failed to add chart:", error);
//       setError("Failed to add chart");
//     }
//   };

//   const renderChart = (chart: ChartItem) => {
//     if (!chart.chart_data) {
//       return <p>Chart data is not available.</p>;
//     }

//     let parsedData;
//     try {
//       parsedData = JSON.parse(chart.chart_data);
//     } catch (error) {
//       console.error("Failed to parse chart data:", error);
//       return <p>Invalid chart data.</p>;
//     }

//     const chartOptions = {
//       plugins: {
//         title: {
//           display: true,
//           text: parsedData.options?.title || "No Title Available",
//         },
//       },
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };

//     switch (chart.type) {
//       case "Bar":
//         return <Bar data={parsedData.data} options={chartOptions} />;
//       case "Line":
//         return <Line data={parsedData.data} options={chartOptions} />;
//       case "Pie":
//         return <Pie data={parsedData.data} />;
//       case "Doughnut":
//         return <Doughnut data={parsedData.data} />;
//       default:
//         return <p>Unsupported chart type.</p>;
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="mb-4 mx-8 text-[20px]">Overview</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : view === null ? (
//         <p>View not found</p>
//       ) : (
//         <div className="flex justify-between items-center mb-6 border p-4 rounded-lg shadow-lg bg-white">
//           <div className="flex items-center">
//             <div>
//               <h3 className="text-xl font-semibold">{view.name}</h3>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <button
//               className="flex items-center p-1 text-black border border-[#000] rounded"
//               onClick={() => setIsModalOpen(true)}
//             >
//               <span className="ml-2">Add Chart</span>
//             </button>
//             <button className="flex items-center p-1 text-black border border-[#000] rounded">
//               <TbRefresh className="size-8" />
//             </button>
//             <button className="flex items-center justify-center px-4 py-2 border border-[#000] text-[#000] rounded">
//               Edit
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 border text-[18px] bg-[#038C7F] text-[#fff] rounded">
//               <Image
//                 src="/IconWhite.svg"
//                 alt="Logo"
//                 width={10}
//                 height={10}
//                 className="flex items-center"
//               />
//               NOVA AI
//             </button>
//             <HiDotsVertical className="text-[#000] text-[2.5rem] cursor-pointer" />
//           </div>
//         </div>
//       )}
//       {charts.length === 0 ? (
//         <div>No charts have been added to this view yet.</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {charts.map((chart) => (
//             <div
//               key={chart.chartID}
//               className="border p-4 rounded shadow-sm py-6"
//               onClick={() => setSelectedChart(chart)}
//             >
//               <h3 className="font-bold mb-4">{chart.name}</h3>
//               {renderChart(chart)}
//             </div>
//           ))}
//         </div>
//       )}
//       <ChartSelectorModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSelectCharts={handleAddChart}
//       />
//       {selectedChart && (
//         <ChartModal
//           isOpen={Boolean(selectedChart)}
//           onClose={() => setSelectedChart(null)}
//           chartData={selectedChart}
//         />
//       )}
//     </div>
//   );
// };

// export default RadiiView;

"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import Image from "next/image";
import { TbRefresh } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import ChartSelectorModal from "@/app/component/ChartSelectorModal";
import ChartModal from "@/app/component/ChartModal";
import { ChartItem } from "@/app/types";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

interface View {
  id: string;
  name: string;
  description: string;
  charts: ChartResponse[];
}

interface ChartResponse {
  chart: {
    chartID: string;
    name: string;
    chart_data: string;
    type: string;
  };
}

const RadiiView: React.FC = () => {
  const router = useRouter();
  const { viewID } = useParams();
  const [view, setView] = useState<View | null>(null);
  const [charts, setCharts] = useState<ChartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState<ChartItem | null>(null);

  useEffect(() => {
    if (viewID) {
      fetchViewData();
    }
  }, [viewID]);

  const fetchViewData = async () => {
    try {
      const response = await axios.get<View>(
        `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/`,
        generateAxiosConfig()
      );
      setView(response.data);

      const chartsData = response.data.charts.map(
        (chartItem: ChartResponse) => ({
          chartID: chartItem.chart.chartID,
          name: chartItem.chart.name,
          chart_data: chartItem.chart.chart_data,
          type: chartItem.chart.type,
        })
      );
      setCharts(chartsData);
    } catch (error) {
      setError("Failed to fetch view data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddChart = async (selectedCharts: ChartItem[]) => {
    try {
      const chartsToAdd = selectedCharts.map((chart) => ({
        chartID: chart.chartID,
        position_x: 0,
        position_y: 0,
        width: 400,
        height: 300,
      }));

      const response = await axios.post(
        `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
        { charts: chartsToAdd },
        generateAxiosConfig()
      );

      console.log("Add Chart Response:", response.data);

      const newCharts = response.data.view.charts.map(
        (item: ChartResponse) => ({
          chartID: item.chart.chartID,
          name: item.chart.name,
          chart_data: item.chart.chart_data,
          type: item.chart.type,
        })
      );

      setCharts((prevCharts) => [...prevCharts, ...newCharts]);
    } catch (error) {
      console.error("Failed to add chart:", error);
      setError("Failed to add chart");
    }
  };

  const renderChart = (chart: ChartItem) => {
    if (!chart.chart_data) {
      return <p>Chart data is not available.</p>;
    }

    let parsedData;
    try {
      parsedData = JSON.parse(chart.chart_data);
    } catch (error) {
      console.error("Failed to parse chart data:", error);
      return <p>Invalid chart data.</p>;
    }

    const chartOptions = {
      plugins: {
        title: {
          display: true,
          text: parsedData.options?.title || "No Title Available",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    switch (chart.type) {
      case "Bar":
        return <Bar data={parsedData.data} options={chartOptions} />;
      case "Line":
        return <Line data={parsedData.data} options={chartOptions} />;
      case "Pie":
        return <Pie data={parsedData.data} />;
      case "Doughnut":
        return <Doughnut data={parsedData.data} />;
      default:
        return <p>Unsupported chart type.</p>;
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 mx-8 text-[20px]">Overview</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : view === null ? (
        <p>View not found</p>
      ) : (
        <div className="flex justify-between items-center mb-6 border p-4 rounded-lg shadow-lg bg-white">
          <div className="flex items-center">
            <div>
              <h3 className="text-xl font-semibold">{view.name}</h3>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className="flex items-center p-1 text-black border border-[#000] rounded"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="ml-2">Add Chart</span>
            </button>
            <button
              className="flex items-center p-1 text-black border border-[#000] rounded"
              onClick={fetchViewData}
            >
              <TbRefresh className="size-8" />
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-[#000] text-[#000] rounded">
              Edit
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border text-[18px] bg-[#038C7F] text-[#fff] rounded">
              <Image
                src="/IconWhite.svg"
                alt="Logo"
                width={10}
                height={10}
                className="flex items-center"
              />
              NOVA AI
            </button>
            <HiDotsVertical className="text-[#000] text-[2.5rem] cursor-pointer" />
          </div>
        </div>
      )}
      {charts.length === 0 ? (
        <div>No charts have been added to this view yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {charts.map((chart) => (
            <div
              key={chart.chartID}
              className="border p-4 rounded shadow-sm py-6"
              onClick={() => setSelectedChart(chart)}
            >
              <h3 className="font-bold mb-4">{chart.name}</h3>
              {renderChart(chart)}
            </div>
          ))}
        </div>
      )}
      <ChartSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectCharts={handleAddChart}
      />
      {selectedChart && (
        <ChartModal
          isOpen={Boolean(selectedChart)}
          onClose={() => setSelectedChart(null)}
          chartData={selectedChart}
        />
      )}
    </div>
  );
};

export default RadiiView;
