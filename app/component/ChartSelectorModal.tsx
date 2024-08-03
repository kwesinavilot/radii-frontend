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
