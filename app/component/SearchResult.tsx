import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

interface Result {
  type: string;
  title: string;
  status: string;
  dateAdded: string;
  lastUpdated: string;
}

interface SearchResultProps {
  result: Result;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const [viewType, setViewType] = useState("Bar");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customer Movement",
        data: [10, 20, 30, 40, 25, 35],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const renderChart = () => {
    switch (viewType) {
      case "Bar":
        return <Bar data={data} options={options} />;
      case "Line":
        return <Line data={data} options={options} />;
      case "Text":
        return (
          <div className="text-lg">
            <p>January: 10</p>
            <p>February: 20</p>
            <p>March: 30</p>
            <p>April: 40</p>
            <p>May: 25</p>
            <p>June: 35</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{result.title}</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <select
            className="px-4 py-2 bg-gray-200 rounded shadow mr-2"
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
          >
            <option value="Bar">Bar Charts</option>
            <option value="Line">Line Charts</option>
            <option value="Text">Text View</option>
          </select>
        </div>
        <div className="text-right">
          <button className="px-4 py-2 bg-gray-200 rounded shadow mr-2">
            Save
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded shadow mr-2">
            Add to Views
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded shadow">
            View Reference
          </button>
        </div>
      </div>
      <div className="w-4/6 border border-gray-200 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div style={{ width: "100%" }}>{renderChart()}</div>
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
          <p className="text-gray-500 text-right mt-4">{result.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
