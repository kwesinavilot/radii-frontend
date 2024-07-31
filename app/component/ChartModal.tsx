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
      tooltip: {
        callbacks: {
          labelColor: (context: { raw: any }) => ({
            borderColor: context.raw,
            backgroundColor: context.raw,
          }),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      arc: {
        borderColor: "#fff",
      },
    },
    colors: {
      backgroundColor: ["#4CAF50", "#FF9800"],
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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
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
