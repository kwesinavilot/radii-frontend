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
//   // FaChartDonut,
// } from "react-icons/fa";
// import Select, { SingleValue } from "react-select";

// interface Result {
//   type: string;
//   title: string;
//   status: string;
//   dateAdded: string;
//   lastUpdated: string;
//   data: {
//     labels: string[];
//     values: number[];
//   };
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
//   const [viewType, setViewType] = useState("Table");

//   // Check if result.data exists and has the necessary properties
//   const hasValidData =
//     result.data &&
//     Array.isArray(result.data.labels) &&
//     Array.isArray(result.data.values);

//   const data = hasValidData
//     ? {
//         labels: result.data.labels,
//         datasets: [
//           {
//             label: result.title,
//             data: result.data.values,
//             backgroundColor: "#038C7F",
//           },
//         ],
//       }
//     : { labels: [], datasets: [] };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   const customOptions: CustomOption[] = [
//     { value: "Bar", label: "Bar Charts", icon: <IoBarChartOutline /> },
//     { value: "Line", label: "Line Charts", icon: <FaChartLine /> },
//     { value: "Pie", label: "Pie Charts", icon: <FaChartPie /> },
//     // { value: "Doughnut", label: "Doughnut Charts", icon: <FaChartDonut /> },
//     { value: "Text", label: "Text View", icon: <IoDocumentTextOutline /> },
//     { value: "Table", label: "Table View", icon: <IoListOutline /> },
//   ];

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
//     if (!hasValidData) {
//       return <p className="text-red-500">Invalid data format</p>;
//     }

//     switch (viewType) {
//       case "Bar":
//         return <Bar data={data} options={options} />;
//       case "Line":
//         return <Line data={data} options={options} />;
//       case "Pie":
//         return <Pie data={data} />;
//       case "Doughnut":
//         return <Doughnut data={data} />;
//       case "Text":
//         return (
//           <div className="text-lg mt-4">
//             {result.data.values.map((value: number, index: number) => (
//               <p key={index}>{`${result.data.labels[index]}: ${value}`}</p>
//             ))}
//           </div>
//         );
//       case "Table":
//         return (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Label</th>
//                 <th className="py-2 px-4 border-b">Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {result.data.labels.map((label: string, index: number) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 border-b">{label}</td>
//                   <td className="py-2 px-4 border-b">
//                     {result.data.values[index]}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4">{result.title}</h2>
//       <div className="flex justify-between items-center mb-4">
//         <div className="relative">
//           <Select
//             value={customOptions.find((option) => option.value === viewType)}
//             onChange={(selectedOption: SingleValue<CustomOption>) =>
//               selectedOption && setViewType(selectedOption.value)
//             }
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
//           <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
//             <IoEyeOutline className="mr-1" />
//             View Reference
//           </button>
//         </div>
//       </div>
//       <div className="w-full sm:w-4/6 border border-gray-200 rounded-lg shadow">
//         <div className="flex justify-between items-center mb-4">
//           <div style={{ width: "100%" }}>{renderChart()}</div>
//         </div>
//         <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-xl font-semibold mb-2">Top Performance</p>
//               <p className="text-4xl font-bold mb-2">30%</p>
//               <p className="text-gray-500">
//                 Your top performance is 30% better compared to last month.
//               </p>
//             </div>
//             <div className="text-right">
//               <button className="px-4 py-2 bg-gray-200 rounded shadow">
//                 Details
//               </button>
//             </div>
//           </div>
//           <p className="text-gray-500 text-right mt-4">{result.lastUpdated}</p>
//         </div>
//       </div>
//       <div className="flex items-center justify-between mt-6">
//         <div className="flex gap-4">
//           <span>{result.dateAdded}</span>
//           <span>{new Date(result.dateAdded).toLocaleTimeString()}</span>
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
  // FaChartDonut,
} from "react-icons/fa";
import Select, { SingleValue } from "react-select";

interface Result {
  insights: string;
  sources: string;
  metadata: Record<string, any>;
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

  const customOptions: CustomOption[] = [
    { value: "Bar", label: "Bar Charts", icon: <IoBarChartOutline /> },
    { value: "Line", label: "Line Charts", icon: <FaChartLine /> },
    { value: "Pie", label: "Pie Charts", icon: <FaChartPie /> },
    // { value: "Doughnut", label: "Doughnut Charts", icon: <FaChartDonut /> },
    { value: "Text", label: "Text View", icon: <IoDocumentTextOutline /> },
    { value: "Table", label: "Table View", icon: <IoListOutline /> },
  ];

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
    // Add your logic for rendering different chart types based on viewType
    return <div>Chart will go here</div>;
  };

  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Insights</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <Select
            value={customOptions.find((option) => option.value === viewType)}
            onChange={(selectedOption: SingleValue<CustomOption>) =>
              selectedOption && setViewType(selectedOption.value)
            }
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
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
            <IoEyeOutline className="mr-1" />
            View Reference
          </button>
        </div>
      </div>
      <div className="w-full sm:w-4/6 border border-gray-200 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div style={{ width: "100%" }}>
            {viewType === "Text" ? (
              <div className="text-lg mt-4">
                <p>{result.insights}</p>
              </div>
            ) : (
              renderChart()
            )}
          </div>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Top Performance</p>
              <p className="text-4xl font-bold mb-2">30%</p>
              <p className="text-gray-500">
                Your top performance is 30% better compared to last month.
              </p>
            </div>
            <div className="text-right">
              <button className="px-4 py-2 bg-gray-200 rounded shadow">
                Details
              </button>
            </div>
          </div>
          <p className="text-gray-500 text-right mt-4">{result.sources}</p>
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
