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
  };
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
  const chartDataAvailable = result.chart_data.data.labels.length > 0;
  const [viewType, setViewType] = useState(
    chartDataAvailable ? result.chart_data.chartType : "Table"
  );

  const data = result.chart_data.data || { labels: [], datasets: [] };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: result.chart_data.options.title,
      },
    },
  };

  const customOptions: CustomOption[] = [
    { value: "Bar", label: "Bar Charts", icon: <IoBarChartOutline /> },
    { value: "Line", label: "Line Charts", icon: <FaChartLine /> },
    { value: "Pie", label: "Pie Charts", icon: <FaChartPie /> },
    { value: "Doughnut", label: "Doughnut Charts", icon: <FaChartPie /> },
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
    if (
      !chartDataAvailable &&
      (viewType === "Bar" ||
        viewType === "Line" ||
        viewType === "Pie" ||
        viewType === "Doughnut")
    ) {
      return (
        <div className="text-lg mt-4 text-red-500">
          Chart view is not available
        </div>
      );
    }

    switch (viewType) {
      case "Bar":
        return <Bar data={data} options={options} />;
      case "Line":
        return <Line data={data} options={options} />;
      case "Pie":
        return <Pie data={data} />;
      case "Doughnut":
        return <Doughnut data={data} />;
      case "Text":
        return <div className="text-lg mt-4">{result.insights}</div>;
      case "Table":
        return (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Label</th>
                <th className="py-2 px-4 border-b">Value</th>
              </tr>
            </thead>
            <tbody>
              {result.chart_data.data.labels.map(
                (label: string, index: number) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{label}</td>
                    <td className="py-2 px-4 border-b">
                      {result.chart_data.data.datasets[0].data[index]}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  const handleViewTypeChange = (selectedOption: SingleValue<CustomOption>) => {
    if (selectedOption) {
      if (
        !chartDataAvailable &&
        (selectedOption.value === "Bar" ||
          selectedOption.value === "Line" ||
          selectedOption.value === "Pie" ||
          selectedOption.value === "Doughnut")
      ) {
        alert("Chart view is not available");
      } else {
        setViewType(selectedOption.value);
      }
    }
  };

  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        {result.chart_data.options.title}
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
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded shadow">
            <IoEyeOutline className="mr-1" />
            View Reference
          </button>
        </div>
      </div>
      <div className="w-full border border-gray-200 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div style={{ width: "100%" }}>{renderChart()}</div>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold mb-2">Insight Details</p>
              <p className="text-gray-500">{result.insights}</p>
            </div>
          </div>
          <p className="text-gray-500 text-right mt-4">
            {result.chart_data.options.title}
          </p>
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
