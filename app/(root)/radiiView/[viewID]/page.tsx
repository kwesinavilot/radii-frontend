// // "use client";

// // import React from "react";
// // import { PiUsersFill } from "react-icons/pi";
// // import { SlGraph } from "react-icons/sl";
// // import { RiBox3Fill } from "react-icons/ri";
// // import { BsGraphUp } from "react-icons/bs";
// // import { FaClockRotateLeft } from "react-icons/fa6";
// // import { TbRefresh } from "react-icons/tb";
// // import { HiDotsVertical } from "react-icons/hi";
// // import { Doughnut, Bar } from "react-chartjs-2";
// // import {
// //   Chart,
// //   ArcElement,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";
// // import Image from "next/image";

// // Chart.register(
// //   ArcElement,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // const ViewsByRadii: React.FC = () => {
// //   const doughnutData = {
// //     datasets: [
// //       {
// //         data: [70, 30],
// //         backgroundColor: ["#FF8C00", "transparent"],
// //         hoverBackgroundColor: ["#FF8C00", "transparent"],
// //         borderWidth: 0,
// //         cutout: "70%",

// //         rotation: 360,
// //       },
// //       {
// //         data: [30],
// //         backgroundColor: ["#e9ecef"],
// //         hoverBackgroundColor: ["#e9ecef"],
// //         borderWidth: 0,
// //         cutout: "80%",

// //         rotation: 360,
// //       },
// //     ],
// //   };

// //   const barData = {
// //     labels: ["M", "T", "W", "T", "F", "S", "S"],
// //     datasets: [
// //       {
// //         label: "Social Media",
// //         data: [2, 3, 2, 2, 2, 2, 2],
// //         backgroundColor: "#FFCD56",
// //         borderRadius: 20,
// //         barThickness: 12,
// //       },
// //       {
// //         label: "Games",
// //         data: [3.5, 5, 3.5, 4, 3.5, 4, 3.5],
// //         backgroundColor: "#FF6384",
// //         borderRadius: 20,
// //         barThickness: 12,
// //       },
// //       {
// //         label: "News",
// //         data: [5, 2, 5, 5, 5, 2, 5],
// //         backgroundColor: "#038C7F",
// //         borderRadius: 20,
// //         barThickness: 12,
// //       },
// //     ],
// //   };

// //   const barOptions = {
// //     plugins: {
// //       legend: {
// //         display: false,
// //         labels: {
// //           boxWidth: 10,
// //           boxHeight: 10,
// //           borderRadius: 5,
// //         },
// //       },
// //     },
// //     scales: {
// //       x: {
// //         stacked: true,
// //       },
// //       y: {
// //         stacked: true,
// //         ticks: {
// //           callback: function (tickValue: string | number) {
// //             return `${tickValue} hrs`;
// //           },
// //         },
// //       },
// //     },
// //   };

// //   return (
// // <div className="p-6">
// //   <h2 className="mb-4 mx-8 text-[20px]">Overview</h2>
// //   <div className="flex justify-between items-center mb-6 border p-4 rounded-lg shadow-sm px-8 mx-8">
// //     <h1 className="text-2xl font-bold">Views by Radii</h1>
// //     <div className="flex items-center space-x-4 ">
// //       <button className="flex items-center p-1 text-black border border-[#000] rounded">
// //         <TbRefresh className="size-8" />
// //       </button>
// //       <button className="flex items-center justify-center px-4 py-2 border border-[#000] text-[#000] rounded">
// //         Edit
// //       </button>
// //       <button className="flex items-center gap-2 px-4 py-2 border text-[18px] bg-[#038C7F] text-[#fff] rounded">
// //         <Image
// //           src="/IconWhite.svg"
// //           alt="Logo"
// //           width={10}
// //           height={10}
// //           className="flex items-center"
// //         />
// //         NOVA AI
// //       </button>
// //       <HiDotsVertical className="text-[#000] text-[2.5rem] cursor-pointer" />
// //     </div>
// //   </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-8">
// //         <div className="border p-4 rounded-lg shadow-sm px-6 ">
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-4 text-[#606060]">
// //                 Total User
// //               </h2>
// //               <p className="text-2xl font-bold">40,689</p>
// //             </div>
// //             <div className="bg-[#8280ff72] rounded-xl p-2 text-center flex items-center">
// //               {" "}
// //               <PiUsersFill className="text-2xl text-[#8280FF]" />
// //             </div>
// //           </div>
// //           <div className="flex gap-4 items-center">
// //             <SlGraph className="text-[#00B69B]" />
// //             <p className="text-[#606060]">
// //               <span className="text-[#00B69B]">8.5%</span> Up from yesterday
// //             </p>
// //           </div>
// //         </div>
// //         <div className="border p-4 rounded-lg shadow-sm px-6 ">
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-4 text-[#606060]">
// //                 Total Order
// //               </h2>
// //               <p className="text-2xl font-bold">10,293</p>
// //             </div>
// //             <div className="bg-[#fec43d5f] rounded-xl p-2 text-center flex items-center">
// //               {" "}
// //               <RiBox3Fill className="text-2xl text-[#FEC53D]" />
// //             </div>
// //           </div>
// //           <div className="flex gap-4 items-center">
// //             <SlGraph className="text-[#00B69B]" />
// //             <p className="text-[#606060]">
// //               <span className="text-[#00B69B]">1.3% </span> Up from past week
// //             </p>
// //           </div>
// //         </div>

// //         <div className="border p-4 rounded-lg shadow-sm row-span-2">
// //           <div className="flex justify-between items-center p-2">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-2">Daily Average</h2>
// //               <p className="text-2xl font-bold">2h 20m</p>
// //             </div>
// //             <p className="text-red-500">+30m this week</p>
// //           </div>
// //           <Bar data={barData} options={barOptions} />
// //           <div className="flex mt-4 space-x-4 flex-wrap items-center mx-auto justify-center">
// //             <div className="flex items-center">
// //               <div className="w-4 h-4 rounded-full bg-[#038C7F] mr-2"></div>
// //               <span className="mr-2">News</span>
// //               <span> 2hrs</span>
// //             </div>
// //             <div className="flex items-center">
// //               <div className="w-4 h-4 rounded-full bg-[#FF6384] mr-2"></div>
// //               <span className="mr-2">Games</span>
// //               <span> 30mins</span>
// //             </div>
// //             <div className="flex items-center mt-2">
// //               <div className="w-4 h-4 rounded-full bg-[#FFCD56] mr-2"></div>
// //               <span className="mr-2">Social Media</span>
// //               <span> 5hrs</span>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="border p-4 rounded-lg shadow-sm px-6 ">
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-4 text-[#606060]">
// //                 Total Sales
// //               </h2>
// //               <p className="text-2xl font-bold">$89,000</p>
// //             </div>
// //             <div className="bg-[#4ad99243] rounded-xl p-2 text-center flex items-center">
// //               {" "}
// //               <BsGraphUp className="text-2xl text-[#4AD991]" />
// //             </div>
// //           </div>
// //           <div className="flex gap-4 items-center">
// //             <SlGraph className="text-[#00B69B]" />
// //             <p className="text-[#606060]">
// //               <span className="text-[#F93C65]">4.3% </span> Down from yesterday
// //             </p>
// //           </div>
// //         </div>
// //         <div className="border p-4 rounded-lg shadow-sm px-6 ">
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-4 text-[#606060]">
// //                 Total Pending
// //               </h2>
// //               <p className="text-2xl font-bold">2,040</p>
// //             </div>
// //             <div className="bg-[#ff8f6676] rounded-xl p-2 text-center flex items-center">
// //               {" "}
// //               <FaClockRotateLeft className="text-2xl text-[#FF9066]" />
// //             </div>
// //           </div>
// //           <div className="flex gap-4 items-center">
// //             <SlGraph className="text-[#00B69B]" />
// //             <p className="text-[#606060]">
// //               <span className="text-[#00B69B]">1.8% </span> Up from yesterday
// //             </p>
// //           </div>
// //         </div>
// //         <div className="border p-8 rounded-lg shadow-sm col-span-2">
// //           <div className="flex gap-8">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-4">
// //                 Total Retention Rate
// //               </h2>
// //               <p className="text-2xl font-bold">2,040</p>
// //             </div>
// //             <div className="w-32 h-32">
// //               <Doughnut data={doughnutData} />
// //             </div>
// //           </div>

// //           <p className="text-[#00B69B]">1.8% Up from yesterday</p>
// //         </div>
// //         <div className="border p-4 rounded-lg shadow-sm px-6 ">
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h2 className="text-[13.67] font-semibold mb-4 text-[#606060]">
// //                 Total Pending
// //               </h2>
// //               <p className="text-2xl font-bold">2,040</p>
// //             </div>
// //             <div className="bg-[#ff8f6676] rounded-xl p-2 text-center flex items-center">
// //               {" "}
// //               <FaClockRotateLeft className="text-2xl text-[#FF9066]" />
// //             </div>
// //           </div>
// //           <div className="flex gap-4 items-center">
// //             <SlGraph className="text-[#00B69B]" />
// //             <p className="text-[#606060]">
// //               <span className="text-[#00B69B]">1.8% </span> Up from yesterday
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewsByRadii;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import axios from "axios";
// // import generateAxiosConfig from "@/app/config/axiosConfig";

// // interface View {
// //   id: string;
// //   name: string;
// //   description: string;
// // }

// // interface ChartItem {
// //   chartID: string;
// //   chart_data: string;
// //   created_at: string;
// //   name: string;
// //   type: string;
// //   updated_at: string;
// //   user: string;
// //   organization: string;
// //   searchID: string;
// // }

// // const RadiiView: React.FC = () => {
// //   const router = useRouter();
// //   const { viewID } = useParams();
// //   const [view, setView] = useState<View | null>(null);
// //   const [charts, setCharts] = useState<ChartItem[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     if (viewID) {
// //       fetchViewData();
// //       fetchCharts();
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
// //     }
// //   };

// //   const fetchCharts = async () => {
// //     try {
// //       const response = await axios.get<ChartItem[]>(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/?viewID=${viewID}`,
// //         generateAxiosConfig()
// //       );
// //       setCharts(response.data);
// //       console.log("Charts is fetched here:", response.data);
// //     } catch (error) {
// //       setError("Failed to fetch charts");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddChart = async () => {
// //     try {
// //       // Example of adding a chart, modify as needed
// //       const response = await axios.post(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //         {
// //           // Add your chart data here
// //         },
// //         generateAxiosConfig()
// //       );
// //       setCharts([...charts, response.data]);
// //     } catch (error) {
// //       setError("Failed to add chart");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>View Details</h1>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : error ? (
// //         <p>{error}</p>
// //       ) : view === null ? (
// //         <p>View not found</p>
// //       ) : (
// //         <>
// //           <h2>{view.name}</h2>
// //           <p>{view.description}</p>
// //           {charts.length === 0 ? (
// //             <p>No chart has been added to the view yet</p>
// //           ) : (
// //             <div>
// //               {charts.map((chart) => (
// //                 <div key={chart.chartID}>
// //                   <h3>{chart.name}</h3>
// //                   {/* Render your chart here */}
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //           <button onClick={handleAddChart}>Add Chart</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default RadiiView;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import axios from "axios";
// // import generateAxiosConfig from "@/app/config/axiosConfig";
// // import Image from "next/image";
// // import { PiUsersFill } from "react-icons/pi";
// // import { SlGraph } from "react-icons/sl";
// // import { RiBox3Fill } from "react-icons/ri";
// // import { BsGraphUp } from "react-icons/bs";
// // import { FaClockRotateLeft } from "react-icons/fa6";
// // import { TbRefresh } from "react-icons/tb";
// // import { HiDotsVertical } from "react-icons/hi";
// // import { Doughnut, Bar } from "react-chartjs-2";

// // interface View {
// //   id: string;
// //   name: string;
// //   description: string;
// // }

// // interface ChartItem {
// //   chartID: string;
// //   chart_data: string;
// //   created_at: string;
// //   name: string;
// //   type: string;
// //   updated_at: string;
// //   user: string;
// //   organization: string;
// //   searchID: string;
// // }

// // const RadiiView: React.FC = () => {
// //   const router = useRouter();
// //   const { viewID } = useParams();
// //   const [view, setView] = useState<View | null>(null);
// //   const [charts, setCharts] = useState<ChartItem[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const [newChart, setNewChart] = useState({
// //     chartID: "",
// //     position_x: 0,
// //     position_y: 0,
// //     width: 0,
// //     height: 0,
// //   });

// //   useEffect(() => {
// //     if (viewID) {
// //       fetchViewData();
// //       fetchCharts();
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
// //     }
// //   };

// //   const fetchCharts = async () => {
// //     try {
// //       const response = await axios.get<ChartItem[]>(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/?viewID=${viewID}`,
// //         generateAxiosConfig()
// //       );
// //       setCharts(response.data);
// //       console.log("Charts are fetched here:", response.data);
// //     } catch (error) {
// //       setError("Failed to fetch charts");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddChart = async () => {
// //     try {
// //       const requestData = {
// //         chartID: newChart.chartID,
// //         position_x: newChart.position_x,
// //         position_y: newChart.position_y,
// //         width: newChart.width,
// //         height: newChart.height,
// //       };

// //       console.log("Adding chart with data:", requestData);

// //       const response = await axios.post(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //         requestData,
// //         generateAxiosConfig()
// //       );

// //       setCharts([...charts, response.data]);
// //     } catch (error) {
// //       console.error("Failed to add chart:", error);
// //       setError("Failed to add chart");
// //     }
// //   };

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setNewChart({ ...newChart, [name]: value });
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
// //         <div className="flex justify-between items-center mb-6 border p-4 rounded-lg shadow-sm px-8 mx-8">
// //           <h1 className="text-2xl font-bold"> {view.name}</h1>
// //           <div className="flex items-center space-x-4 ">
// //             <button className="flex items-center p-1 text-black border border-[#000] rounded">
// //               Add Chart
// //             </button>
// //     <button className="flex items-center p-1 text-black border border-[#000] rounded">
// //       <TbRefresh className="size-8" />
// //     </button>
// //     <button className="flex items-center justify-center px-4 py-2 border border-[#000] text-[#000] rounded">
// //       Edit
// //     </button>
// //     <button className="flex items-center gap-2 px-4 py-2 border text-[18px] bg-[#038C7F] text-[#fff] rounded">
// //       <Image
// //         src="/IconWhite.svg"
// //         alt="Logo"
// //         width={10}
// //         height={10}
// //         className="flex items-center"
// //       />
// //       NOVA AI
// //     </button>
// //     <HiDotsVertical className="text-[#000] text-[2.5rem] cursor-pointer" />
// //   </div>
// // </div>
// //       )}
// //       {charts.length === 0 ? (
// //         <p>No chart has been added to the view yet</p>
// //       ) : (
// //         <div>
// //           {charts.map((chart) => (
// //             <div key={chart.chartID}></div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RadiiView;

// // RadiiView.tsx

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import axios from "axios";
// // import generateAxiosConfig from "@/app/config/axiosConfig";
// // import Image from "next/image";
// // import { TbRefresh } from "react-icons/tb";
// // import { HiDotsVertical } from "react-icons/hi";
// // import ChartSelectorModal from "@/app/component/ChartSelectorModal";
// // import { ChartItem } from "@/app/types";

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

// //   const [newChart, setNewChart] = useState({
// //     chartID: "",
// //     position_x: 0,
// //     position_y: 0,
// //     width: 0,
// //     height: 0,
// //   });

// //   useEffect(() => {
// //     if (viewID) {
// //       fetchViewData();
// //       fetchCharts();
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
// //     }
// //   };

// //   const fetchCharts = async () => {
// //     try {
// //       const response = await axios.get<ChartItem[]>(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/?viewID=${viewID}`,
// //         generateAxiosConfig()
// //       );
// //       setCharts(response.data);
// //     } catch (error) {
// //       setError("Failed to fetch charts");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddChart = async (selectedCharts: ChartItem[]) => {
// //     try {
// //       const chartsToAdd = selectedCharts.map((chart) => ({
// //         chartID: chart.chartID,
// //         position_x: newChart.position_x,
// //         position_y: newChart.position_y,
// //         width: newChart.width,
// //         height: newChart.height,
// //       }));

// //       const responses = await Promise.all(
// //         chartsToAdd.map((chartData) =>
// //           axios.post(
// //             `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //             chartData,
// //             generateAxiosConfig()
// //           )
// //         )
// //       );

// //       setCharts([...charts, ...responses.map((res) => res.data)]);
// //     } catch (error) {
// //       console.error("Failed to add chart:", error);
// //       setError("Failed to add chart");
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
// //       <ChartSelectorModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         onSelectCharts={handleAddChart}
// //       />
// //     </div>
// //   );
// // };

// // export default RadiiView;

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
// // } from "chart.js";

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ArcElement
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

// //   const [newChart, setNewChart] = useState({
// //     chartID: "",
// //     position_x: 0,
// //     position_y: 0,
// //     width: 0,
// //     height: 0,
// //   });

// //   useEffect(() => {
// //     if (viewID) {
// //       fetchViewData();
// //       fetchCharts();
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
// //     }
// //   };

// //   const fetchCharts = async () => {
// //     try {
// //       const response = await axios.get<ChartItem[]>(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/?viewID=${viewID}`,
// //         generateAxiosConfig()
// //       );
// //       setCharts(response.data);
// //     } catch (error) {
// //       setError("Failed to fetch charts");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddChart = async (selectedCharts: ChartItem[]) => {
// //     try {
// //       const chartsToAdd = selectedCharts.map((chart) => ({
// //         chartID: chart.chartID,
// //         position_x: newChart.position_x,
// //         position_y: newChart.position_y,
// //         width: newChart.width,
// //         height: newChart.height,
// //       }));

// //       const responses = await Promise.all(
// //         chartsToAdd.map((chartData) =>
// //           axios.post(
// //             `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //             chartData,
// //             generateAxiosConfig()
// //           )
// //         )
// //       );

// //       setCharts([...charts, ...responses.map((res) => res.data)]);
// //     } catch (error) {
// //       console.error("Failed to add chart:", error);
// //       setError("Failed to add chart");
// //     }
// //   };

// //   const renderChart = (chart: ChartItem) => {
// //     const parsedData = JSON.parse(chart.chart_data);
// //     const chartOptions = {
// //       plugins: {
// //         title: {
// //           display: true,
// //           text: parsedData.options.title || "No Title Available",
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
// //         return null;
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
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         {charts.map((chart) => (
// //           <div
// //             key={chart.chartID}
// //             className="border p-4 rounded shadow-sm py-6"
// //             onClick={() => setSelectedChart(chart)}
// //           >
// //             <h3 className="font-bold mb-4">{chart.name}</h3>
// //             {renderChart(chart)}
// //           </div>
// //         ))}
// //       </div>
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

// //   const [newChart, setNewChart] = useState({
// //     chartID: "",
// //     position_x: 0,
// //     position_y: 0,
// //     width: 0,
// //     height: 0,
// //   });

// //   useEffect(() => {
// //     if (viewID) {
// //       fetchViewData();
// //       fetchCharts();
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
// //     }
// //   };

// //   const fetchCharts = async () => {
// //     try {
// //       const response = await axios.get<ChartItem[]>(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/?viewID=${viewID}`,
// //         generateAxiosConfig()
// //       );
// //       setCharts(response.data);
// //     } catch (error) {
// //       setError("Failed to fetch charts");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddChart = async (selectedCharts: ChartItem[]) => {
// //     try {
// //       const chartsToAdd = selectedCharts.map((chart) => ({
// //         chartID: chart.chartID,
// //         position_x: newChart.position_x,
// //         position_y: newChart.position_y,
// //         width: newChart.width,
// //         height: newChart.height,
// //       }));

// //       const responses = await Promise.all(
// //         chartsToAdd.map((chartData) =>
// //           axios.post(
// //             `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //             chartData.chartID,
// //             generateAxiosConfig()
// //           )
// //         )
// //       );

// //       setCharts([...charts, ...responses.map((res) => res.data)]);
// //     } catch (error) {
// //       console.error("Failed to add chart:", error);
// //       setError("Failed to add chart");
// //     }
// //   };

// //   const renderChart = (chart: ChartItem) => {
// //     const parsedData = JSON.parse(chart.chart_data);
// //     const chartOptions = {
// //       plugins: {
// //         title: {
// //           display: true,
// //           text: parsedData.options.title || "No Title Available",
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
// //         return null;
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
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         {charts.map((chart) => (
// //           <div
// //             key={chart.chartID}
// //             className="border p-4 rounded shadow-sm py-6"
// //             onClick={() => setSelectedChart(chart)}
// //           >
// //             <h3 className="font-bold mb-4">{chart.name}</h3>
// //             {renderChart(chart)}
// //           </div>
// //         ))}
// //       </div>
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
// //       }));

// //       const response = await axios.post(
// //         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //         chartsToAdd,
// //         generateAxiosConfig()
// //       );

// //       setCharts([...charts, ...response.data]);
// //     } catch (error) {
// //       console.error("Failed to add chart:", error);
// //       setError("Failed to add chart");
// //     }
// //   };

// //   const renderChart = (chart: ChartItem) => {
// //     const parsedData = JSON.parse(chart.chart_data);
// //     const chartOptions = {
// //       plugins: {
// //         title: {
// //           display: true,
// //           text: parsedData.options.title || "No Title Available",
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
// //         return null;
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

// //   // const handleAddChart = async (selectedCharts: ChartItem[]) => {
// //   //   try {
// //   //     const chartsToAdd = selectedCharts.map((chart) => ({
// //   //       chartID: chart.chartID,
// //   //     }));

// //   //     const response = await axios.post(
// //   //       `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
// //   //       { charts: chartsToAdd }, // Wrap the charts in an object with a "charts" key
// //   //       generateAxiosConfig()
// //   //     );

// //   //     setCharts([...charts, ...response.data]);
// //   //   } catch (error) {
// //   //     console.error("Failed to add chart:", error);
// //   //     setError("Failed to add chart");
// //   //   }
// //   // };

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
// //     const parsedData = JSON.parse(chart.chart_data);
// //     const chartOptions = {
// //       plugins: {
// //         title: {
// //           display: true,
// //           text: parsedData.options.title || "No Title Available",
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
// //         return null;
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
//         position_x: 0, // Add appropriate values if required
//         position_y: 0, // Add appropriate values if required
//         width: 400, // Add appropriate values if required
//         height: 300, // Add appropriate values if required
//       }));

//       const response = await axios.post(
//         `https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/${viewID}/add_chart/`,
//         { charts: chartsToAdd },
//         generateAxiosConfig()
//       );

//       console.log("Add Chart Response:", response.data);

//       if (Array.isArray(response.data)) {
//         setCharts([...charts, ...response.data]);
//       } else {
//         setCharts([...charts, response.data]);
//       }
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
//         return <Pie data={parsedData.data} options={chartOptions} />;
//       case "Doughnut":
//         return <Doughnut data={parsedData.data} options={chartOptions} />;
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
      console.log("Charts:", charts);
      console.log("response:", response);

      if (Array.isArray(response.data)) {
        setCharts([...charts, ...response.data]);
      } else {
        setCharts([...charts, response.data]);
      }
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
        return <Pie data={parsedData.data} options={chartOptions} />;
      case "Doughnut":
        return <Doughnut data={parsedData.data} options={chartOptions} />;
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
            <button className="flex items-center p-1 text-black border border-[#000] rounded">
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