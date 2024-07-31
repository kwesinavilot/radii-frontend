// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import generateAxiosConfig from "@/app/config/axiosConfig";
// // import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
// // import { truncateText } from "@/app/utils/truncateText";
// // import { ChartItem } from "@/app/types";

// // interface ChartSelectorModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onSelectCharts: (selectedCharts: ChartItem[]) => void;
// // }

// // const ChartSelectorModal: React.FC<ChartSelectorModalProps> = ({
// //   isOpen,
// //   onClose,
// //   onSelectCharts,
// // }) => {
// //   const [charts, setCharts] = useState<ChartItem[]>([]);
// //   const [selectedChartIds, setSelectedChartIds] = useState<Set<string>>(
// //     new Set()
// //   );

// //   useEffect(() => {
// //     const fetchCharts = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
// //           generateAxiosConfig()
// //         );
// //         setCharts(response.data.reverse());
// //       } catch (error) {
// //         console.error("Error fetching charts:", error);
// //       }
// //     };

// //     fetchCharts();
// //   }, []);

// //   const toggleChartSelection = (chartID: string) => {
// //     setSelectedChartIds((prev) => {
// //       const newSet = new Set(prev);
// //       if (newSet.has(chartID)) {
// //         newSet.delete(chartID);
// //       } else {
// //         newSet.add(chartID);
// //       }
// //       return newSet;
// //     });
// //   };

// //   const handleSelect = () => {
// //     const selectedCharts = charts.filter((chart) =>
// //       selectedChartIds.has(chart.chartID)
// //     );
// //     onSelectCharts(selectedCharts);
// //     onClose();
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 overflow-y-auto">
// //         <h2 className="text-xl font-semibold mb-4">Select Charts</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {charts.map((chart) => (
// //             <div
// //               key={chart.chartID}
// //               className={`border p-4 rounded-lg shadow-sm ${
// //                 selectedChartIds.has(chart.chartID) ? "bg-gray-200" : ""
// //               }`}
// //               onClick={() => toggleChartSelection(chart.chartID)}
// //             >
// //               <h3 className="font-bold mb-2">{chart.name}</h3>
// //               <div className="flex items-center space-x-2">
// //                 {chart.type === "Bar" && <FaChartBar />}
// //                 {chart.type === "Line" && <FaChartLine />}
// //                 {(chart.type === "Pie" || chart.type === "Doughnut") && (
// //                   <FaChartPie />
// //                 )}
// //                 {/* <p>{truncateText(chart.description, 20)}</p> */}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="flex justify-end mt-4">
// //           <button
// //             className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded mr-2"
// //             onClick={onClose}
// //           >
// //             Cancel
// //           </button>
// //           <button
// //             className="bg-[#038C7F] hover:bg-[#038C7F] text-white font-semibold py-2 px-4 rounded"
// //             onClick={handleSelect}
// //           >
// //             Add Selected Charts
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChartSelectorModal;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
// import { ChartItem } from "@/app/types";

// interface ChartSelectorModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelectCharts: (selectedCharts: ChartItem[]) => void;
// }

// const ChartSelectorModal: React.FC<ChartSelectorModalProps> = ({
//   isOpen,
//   onClose,
//   onSelectCharts,
// }) => {
//   const [charts, setCharts] = useState<ChartItem[]>([]);
//   const [selectedChartIds, setSelectedChartIds] = useState<Set<string>>(
//     new Set()
//   );

//   useEffect(() => {
//     const fetchCharts = async () => {
//       try {
//         const response = await axios.get(
//           "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
//           generateAxiosConfig()
//         );
//         setCharts(response.data.reverse());
//       } catch (error) {
//         console.error("Error fetching charts:", error);
//       }
//     };

//     fetchCharts();
//   }, []);

//   const toggleChartSelection = (chartID: string) => {
//     setSelectedChartIds((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(chartID)) {
//         newSet.delete(chartID);
//       } else {
//         newSet.add(chartID);
//       }
//       return newSet;
//     });
//   };

//   const handleSelect = () => {
//     const selectedCharts = charts.filter((chart) =>
//       selectedChartIds.has(chart.chartID)
//     );
//     onSelectCharts(selectedCharts);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white w-full max-w-4xl p-6 rounded shadow-lg">
//         <h2 className="text-2xl mb-4">Select Charts to Add</h2>
//         <div className="max-h-[400px] overflow-y-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {charts.map((chart) => (
//               <div
//                 key={chart.chartID}
//                 className={`border p-4 rounded cursor-pointer ${
//                   selectedChartIds.has(chart.chartID)
//                     ? "border-blue-500"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => toggleChartSelection(chart.chartID)}
//               >
//                 <h3 className="font-bold mb-2">{chart.name}</h3>

//                 <div className="text-gray-500">
//                   Type: {chart.type}
//                   <span className="ml-2">
//                     {chart.type === "Pie" && <FaChartPie />}
//                     {chart.type === "Bar" && <FaChartBar />}
//                     {chart.type === "Line" && <FaChartLine />}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-end mt-4">
//           <button
//             className="mr-4 px-4 py-2 bg-gray-200 text-gray-800 rounded"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//             onClick={handleSelect}
//           >
//             Add Selected Charts
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartSelectorModal;

import React, { useState, useEffect } from "react";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { FaChartPie, FaChartBar, FaChartLine } from "react-icons/fa";
import { ChartItem } from "@/app/types";

interface ChartSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCharts: (selectedCharts: ChartItem[]) => void;
}

const ChartSelectorModal: React.FC<ChartSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectCharts,
}) => {
  const [charts, setCharts] = useState<ChartItem[]>([]);
  const [selectedCharts, setSelectedCharts] = useState<ChartItem[]>([]);

  useEffect(() => {
    fetchAvailableCharts();
  }, []);

  const fetchAvailableCharts = async () => {
    try {
      const response = await axios.get<ChartItem[]>(
        `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/`,
        generateAxiosConfig()
      );
      setCharts(response.data);
    } catch (error) {
      console.error("Failed to fetch charts:", error);
    }
  };

  const handleChartSelection = (chart: ChartItem) => {
    setSelectedCharts((prev) =>
      prev.some((selected) => selected.chartID === chart.chartID)
        ? prev.filter((selected) => selected.chartID !== chart.chartID)
        : [...prev, chart]
    );
  };

  const handleConfirmSelection = () => {
    onSelectCharts(selectedCharts);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Select Charts to Add</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {charts.map((chart) => (
            <div
              key={chart.chartID}
              className={`p-4 border rounded cursor-pointer ${
                selectedCharts.some(
                  (selected) => selected.chartID === chart.chartID
                )
                  ? "bg-blue-100 border-blue-500"
                  : ""
              }`}
              onClick={() => handleChartSelection(chart)}
            >
              <h3 className="font-bold mb-2">{chart.name}</h3>
              <div className="text-gray-600">
                {chart.type === "Bar" && <FaChartBar />}
                {chart.type === "Pie" && <FaChartPie />}
                {chart.type === "Line" && <FaChartLine />}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleConfirmSelection}
          >
            Add Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartSelectorModal;
