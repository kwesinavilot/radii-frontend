// "use client";

// import React, { useState } from "react";
// import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
// import "chart.js/auto";
// import {
//   IoCopyOutline,
//   IoDownloadOutline,
//   IoShareSocialOutline,
//   IoSaveOutline,
//   IoEyeOutline,
//   IoBarChartOutline,
//   IoListOutline,
//   IoDocumentTextOutline,
// } from "react-icons/io5";
// import {
//   FaRegThumbsDown,
//   FaRegThumbsUp,
//   FaPlus,
//   FaChartLine,
//   FaChartPie,
// } from "react-icons/fa";
// import Select, { SingleValue } from "react-select";

// interface ChartData {
//   labels: string[];
//   datasets: { label: string; data: number[] }[];
// }

// interface Result {
//   insights: string;
//   chart_data: {
//     chartType: string;
//     data: ChartData;
//     options: {
//       title: string;
//       xAxisLabel: string;
//       yAxisLabel: string;
//     };
//   } | null;
//   metadata: {
//     [key: string]: {
//       file_name: string;
//     };
//   };
//   sources: string;
// }

// interface SearchResultProps {
//   result: Result;
// }

// interface CustomOption {
//   value: string;
//   label: string;
//   icon: React.ReactNode;
// }

// const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
//   const [viewType, setViewType] = useState("Text");
//   const [showInsights, setShowInsights] = useState(true);

//   const data = result.chart_data?.data || { labels: [], datasets: [] };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//     plugins: {
//       title: {
//         display: true,
//         text: result.chart_data?.options.title || "",
//       },
//     },
//   };

//   const customOptions: CustomOption[] = [
//     { value: "Text", label: "Text View", icon: <IoDocumentTextOutline /> },
//   ];

//   if (result.chart_data) {
//     customOptions.unshift(
//       { value: "Bar", label: "Bar Charts", icon: <IoBarChartOutline /> },
//       { value: "Line", label: "Line Charts", icon: <FaChartLine /> },
//       { value: "Pie", label: "Pie Charts", icon: <FaChartPie /> },
//       { value: "Doughnut", label: "Doughnut Charts", icon: <FaChartPie /> },
//       { value: "Table", label: "Table View", icon: <IoListOutline /> }
//     );
//   }

//   const customStyles = {
//     control: (provided: any) => ({
//       ...provided,
//       display: "flex",
//     }),
//     singleValue: (provided: any) => ({
//       ...provided,
//       display: "flex",
//       alignItems: "center",
//     }),
//     option: (provided: any) => ({
//       ...provided,
//       display: "flex",
//       alignItems: "center",
//     }),
//   };

//   const renderOption = (option: CustomOption) => (
//     <div className="flex items-center">
//       {option.icon}
//       <span className="ml-2">{option.label}</span>
//     </div>
//   );

//   const renderChart = () => {
//     let chartWidth = "100%";
//     if (viewType === "Pie" || viewType === "Doughnut") {
//       chartWidth = "60%";
//     }
//     return (
//       <div className="flex justify-center" style={{ width: chartWidth }}>
//         {viewType === "Bar" && <Bar data={data} options={options} />}
//         {viewType === "Line" && <Line data={data} options={options} />}
//         {viewType === "Pie" && <Pie data={data} />}
//         {viewType === "Doughnut" && <Doughnut data={data} />}
//         {viewType === "Table" && (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">Label</th>
//                 <th className="py-2 px-4 border-b text-left">Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {result.chart_data?.data.labels.map(
//                 (label: string, index: number) => (
//                   <tr key={index}>
//                     <td className="py-2 px-4 border-b">{label}</td>
//                     <td className="py-2 px-4 border-b">
//                       {result.chart_data?.data.datasets[0].data[index]}
//                     </td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         )}
//         {viewType === "Text" && (
//           <div className="text-lg mt-4">{result.insights}</div>
//         )}
//       </div>
//     );
//   };

//   const handleViewTypeChange = (selectedOption: SingleValue<CustomOption>) => {
//     if (selectedOption) {
//       setViewType(selectedOption.value);
//       setShowInsights(false);
//     }
//   };

//   const toggleInsights = () => {
//     setShowInsights(!showInsights);
//     setViewType("Text");
//   };

//   return (
//     <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4">
//         {result.chart_data?.options.title || "No Chart Available"}
//       </h2>
//       <div className="flex justify-between items-center mb-4">
//         <div className="relative">
//           <Select
//             value={customOptions.find((option) => option.value === viewType)}
//             onChange={handleViewTypeChange}
//             options={customOptions}
//             styles={customStyles}
//             formatOptionLabel={renderOption}
//           />
//         </div>
//         <div className="flex space-x-2">
//           <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
//             <IoSaveOutline className="mr-1" />
//             Save
//           </button>
//           <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
//             <FaPlus className="mr-1" />
//             Add to Views
//           </button>
//           <button
//             className="flex items-center px-4 py-2 bg-gray-200 rounded shadow"
//             onClick={toggleInsights}
//           >
//             <IoEyeOutline className="mr-1" />
//             View Details
//           </button>
//         </div>
//       </div>
//       <div className="w-full border border-gray-200 rounded-lg px-8 shadow">
//         <div className="flex justify-between items-center mb-4">
//           <div style={{ width: "100%" }}>{renderChart()}</div>
//         </div>
//       </div>
//       <div className="flex items-center justify-between mt-6">
//         <div className="flex gap-4">
//           <span>{new Date().toLocaleDateString()}</span>
//           <span>{new Date().toLocaleTimeString()}</span>
//         </div>
//         <div className="flex gap-2">
//           <p className="border border-gray-200 rounded-sm px-2 py-1">
//             <IoCopyOutline />
//           </p>
//           <p className="border border-gray-200 rounded-sm px-2 py-1">
//             <FaRegThumbsUp />
//           </p>
//           <p className="border border-gray-200 rounded-sm px-2 py-1">
//             <FaRegThumbsDown />
//           </p>
//           <p className="border border-gray-200 rounded-sm px-2 py-1">
//             <IoDownloadOutline />
//           </p>
//           <p className="border border-gray-200 rounded-sm px-2 py-1">
//             <IoShareSocialOutline />
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchResult;

"use client";

import React, { useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import {
  IoCopyOutline,
  IoDownloadOutline,
  IoShareSocialOutline,
  IoSaveOutline,
  IoEyeOutline,
  IoBarChartOutline,
  IoListOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaPlus,
  FaChartLine,
  FaChartPie,
} from "react-icons/fa";
import Select, { SingleValue } from "react-select";

interface ChartData {
  labels: string[];
  datasets: { label: string; data: number[] }[];
}

interface Result {
  insights: string;
  chart_data: {
    chartType: string;
    data: ChartData;
    options: {
      title: string;
      xAxisLabel: string;
      yAxisLabel: string;
    };
  } | null;
  metadata: {
    [key: string]: {
      file_name: string;
    };
  };
  sources: string;
}

interface SearchResultProps {
  result: Result;
}

interface CustomOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const [viewType, setViewType] = useState("Text");
  const [showInsights, setShowInsights] = useState(true);

  const data = result.chart_data?.data || { labels: [], datasets: [] };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: result.chart_data?.options?.title || "No Title Available",
      },
    },
  };

  const customOptions: CustomOption[] = [
    { value: "Text", label: "Text View", icon: <IoDocumentTextOutline /> },
  ];

  if (result.chart_data) {
    customOptions.unshift(
      { value: "Bar", label: "Bar Charts", icon: <IoBarChartOutline /> },
      { value: "Line", label: "Line Charts", icon: <FaChartLine /> },
      { value: "Pie", label: "Pie Charts", icon: <FaChartPie /> },
      { value: "Doughnut", label: "Doughnut Charts", icon: <FaChartPie /> },
      { value: "Table", label: "Table View", icon: <IoListOutline /> }
    );
  }

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      display: "flex",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    option: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  const renderOption = (option: CustomOption) => (
    <div className="flex items-center">
      {option.icon}
      <span className="ml-2">{option.label}</span>
    </div>
  );

  const renderChart = () => {
    let chartWidth = "100%";
    if (viewType === "Pie" || viewType === "Doughnut") {
      chartWidth = "60%";
    }
    return (
      <div className="flex justify-center" style={{ width: chartWidth }}>
        {viewType === "Bar" && <Bar data={data} options={options} />}
        {viewType === "Line" && <Line data={data} options={options} />}
        {viewType === "Pie" && <Pie data={data} />}
        {viewType === "Doughnut" && <Doughnut data={data} />}
        {viewType === "Table" && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Label</th>
                <th className="py-2 px-4 border-b text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {result.chart_data?.data.labels.map(
                (label: string, index: number) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{label}</td>
                    <td className="py-2 px-4 border-b">
                      {result.chart_data?.data.datasets[0].data[index]}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
        {viewType === "Text" && (
          <div className="text-lg mt-4">{result.insights}</div>
        )}
      </div>
    );
  };

  const handleViewTypeChange = (selectedOption: SingleValue<CustomOption>) => {
    if (selectedOption) {
      setViewType(selectedOption.value);
      setShowInsights(false);
    }
  };

  const toggleInsights = () => {
    setShowInsights(!showInsights);
    setViewType("Text");
  };

  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        {result.chart_data?.options?.title || "No Chart Available"}
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <Select
            value={customOptions.find((option) => option.value === viewType)}
            onChange={handleViewTypeChange}
            options={customOptions}
            styles={customStyles}
            formatOptionLabel={renderOption}
          />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
            <IoSaveOutline className="mr-1" />
            Save
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
            <FaPlus className="mr-1" />
            Add to Views
          </button>
          <button
            className="flex items-center px-4 py-2 bg-gray-200 rounded shadow"
            onClick={toggleInsights}
          >
            <IoEyeOutline className="mr-1" />
            View Details
          </button>
        </div>
      </div>
      <div className="w-full border border-gray-200 rounded-lg px-8 shadow">
        <div className="flex justify-between items-center mb-4">
          <div style={{ width: "100%" }}>{renderChart()}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-4">
          <span>{new Date().toLocaleDateString()}</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
        <div className="flex gap-2">
          <p className="border border-gray-200 rounded-sm px-2 py-1">
            <IoCopyOutline />
          </p>
          <p className="border border-gray-200 rounded-sm px-2 py-1">
            <FaRegThumbsUp />
          </p>
          <p className="border border-gray-200 rounded-sm px-2 py-1">
            <FaRegThumbsDown />
          </p>
          <p className="border border-gray-200 rounded-sm px-2 py-1">
            <IoDownloadOutline />
          </p>
          <p className="border border-gray-200 rounded-sm px-2 py-1">
            <IoShareSocialOutline />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
