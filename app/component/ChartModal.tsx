// import React from "react";
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
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

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

// interface ChartModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   chartData: ChartItem | null;
// }

// const ChartModal: React.FC<ChartModalProps> = ({
//   isOpen,
//   onClose,
//   chartData,
// }) => {
//   if (!isOpen || !chartData) return null;

//   const { chart_data, type } = chartData;
//   const parsedData = JSON.parse(chart_data);

//   const chartOptions = {
//     plugins: {
//       title: {
//         display: true,
//         text: parsedData.options.title || "No Title Available",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   const renderChart = () => {
//     switch (type) {
//       case "Bar":
//         return <Bar data={parsedData.data} options={chartOptions} />;
//       case "Line":
//         return <Line data={parsedData.data} options={chartOptions} />;
//       case "Pie":
//         return <Pie data={parsedData.data} />;
//       case "Doughnut":
//         return <Doughnut data={parsedData.data} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-4">{parsedData.options.title}</h2>
//         {renderChart()}
//         <button
//           onClick={onClose}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChartModal;

import React from "react";
import { ChartItem } from "@/app/types";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

ChartJS.register();

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartData: ChartItem;
}

const ChartModal: React.FC<ChartModalProps> = ({
  isOpen,
  onClose,
  chartData,
}) => {
  if (!isOpen) return null;

  let parsedData;
  try {
    parsedData = JSON.parse(chartData.chart_data);
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

  const renderChart = () => {
    switch (chartData.type) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-4xl w-full">
        <button className="mb-4 text-red-500" onClick={onClose}>
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">{chartData.name}</h2>
        <div>{renderChart()}</div>
      </div>
    </div>
  );
};

export default ChartModal;
