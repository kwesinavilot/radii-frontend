import React from "react";
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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartData: ChartItem | null;
}

const ChartModal: React.FC<ChartModalProps> = ({
  isOpen,
  onClose,
  chartData,
}) => {
  if (!isOpen || !chartData) return null;

  const { chart_data, type } = chartData;
  const parsedData = JSON.parse(chart_data);

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: parsedData.options.title || "No Title Available",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const renderChart = () => {
    switch (type) {
      case "Bar":
        return <Bar data={parsedData.data} options={chartOptions} />;
      case "Line":
        return <Line data={parsedData.data} options={chartOptions} />;
      case "Pie":
        return <Pie data={parsedData.data} />;
      case "Doughnut":
        return <Doughnut data={parsedData.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{parsedData.options.title}</h2>
        {renderChart()}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChartModal;

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

// // Register the chart components you will use
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

//   const chartColors = {
//     backgroundColor: ["#038C7F", "#FF6F00"],
//     borderColor: ["#038C7F", "#FF6F00"],
//     hoverBackgroundColor: ["#026D5C", "#FF5722"],
//     hoverBorderColor: ["#026D5C", "#FF5722"],
//   };

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
//         ticks: {
//           color: "#333",
//         },
//       },
//       x: {
//         ticks: {
//           color: "#333",
//         },
//       },
//     },
//   };

//   const datasets = Array.isArray(parsedData.datasets)
//     ? parsedData.datasets
//     : [];

//   const chartDataWithColors = {
//     ...parsedData,
//     datasets: datasets.map((dataset: any, index: number) => ({
//       ...dataset,
//       backgroundColor:
//         chartColors.backgroundColor[index % chartColors.backgroundColor.length],
//       borderColor:
//         chartColors.borderColor[index % chartColors.borderColor.length],
//       hoverBackgroundColor:
//         chartColors.hoverBackgroundColor[
//           index % chartColors.hoverBackgroundColor.length
//         ],
//       hoverBorderColor:
//         chartColors.hoverBorderColor[
//           index % chartColors.hoverBorderColor.length
//         ],
//     })),
//   };

//   const renderChart = () => {
//     switch (type) {
//       case "Bar":
//         return <Bar data={chartDataWithColors} options={chartOptions} />;
//       case "Line":
//         return <Line data={chartDataWithColors} options={chartOptions} />;
//       case "Pie":
//         return <Pie data={chartDataWithColors} />;
//       case "Doughnut":
//         return <Doughnut data={chartDataWithColors} />;
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
