"use client";

import React, { useEffect, useState } from "react";
import {
  IoEllipsisVerticalOutline,
  IoCreateOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";
import {
  FaChartPie,
  FaChartBar,
  FaChartLine,
  FaTrashAlt,
} from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import generateAxiosConfig from "../../../app/config/axiosConfig";
import ChartModal from "../../../app/component/ChartModal";
import Navbar from "../../../app/component/NavBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { truncateText } from "../../../app/utils/truncateText";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ViewItem {
  viewID: string;
  name: string;
  description: string;
  updated_at: string;
}

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
  height: number;
  width: number;
  position_x: number;
  position_y: number;
}

const MyViews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentChartPage, setCurrentChartPage] = useState(1);
  const [currentViewPage, setCurrentViewPage] = useState(1);
  const [selectedChart, setSelectedChart] = useState<ChartItem | null>(null);
  const [newViewName, setNewViewName] = useState("");
  const [newViewDescription, setNewViewDescription] = useState("");
  const [isCreatingView, setIsCreatingView] = useState(false);
  const [charts, setCharts] = useState<ChartItem[]>([]);
  const [views, setViews] = useState<ViewItem[]>([]);
  const chartsPerPage = 4;
  const viewsPerPage = 4;

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const response = await axios.get(
          "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
          generateAxiosConfig()
        );
        setCharts(response.data.reverse());
        console.log("fetch chart:", response.data);
      } catch (error) {
        console.error("Error fetching charts:", error);
      }
    };

    const fetchViews = async () => {
      try {
        const response = await axios.get(
          "https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/",
          generateAxiosConfig()
        );
        setViews(response.data.reverse() || []);
        console.log("Views fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching views:", error);
        setViews([]);
      }
    };

    fetchCharts();
    fetchViews();
  }, []);

  const handleChartClick = (chart: ChartItem) => {
    setSelectedChart(chart);
  };

  const closeModal = () => {
    setSelectedChart(null);
  };

  const handleDelete = async (chartID: string) => {
    try {
      await axios.delete(
        `https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/${chartID}/`,
        generateAxiosConfig()
      );
      setCharts((prevCharts) =>
        prevCharts.filter((chart) => chart.chartID !== chartID)
      );
      toast.success("Chart deleted successfully");
    } catch (error) {
      console.error("Error deleting chart:", error);
      toast.error("Error deleting chart");
    }
  };

  const handleCreateView = async () => {
    if (!newViewName) {
      toast.error("Please enter a name for the view");
      return;
    }
    try {
      const response = await axios.post(
        "https://starfish-app-9ezx5.ondigitalocean.app/visuals/views/",
        {
          name: newViewName,
          description: newViewDescription,
        },
        generateAxiosConfig()
      );
      setViews((prevViews) => [response.data, ...prevViews]);
      setNewViewName("");
      setNewViewDescription("");
      setIsCreatingView(false);
      toast.success("View created successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating view:", error);
      toast.error("Error creating view");
    }
  };

  const indexOfLastChart = currentChartPage * chartsPerPage;
  const indexOfFirstChart = indexOfLastChart - chartsPerPage;
  const currentCharts = charts
    .filter((chart) =>
      chart.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstChart, indexOfLastChart);

  const chartTotalPages = Math.ceil(charts.length / chartsPerPage);

  const indexOfLastView = currentViewPage * viewsPerPage;
  const indexOfFirstView = indexOfLastView - viewsPerPage;
  const currentViews = views.slice(indexOfFirstView, indexOfLastView);

  const viewTotalPages = Math.ceil(views.length / viewsPerPage);

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100 h-screen overflow-y-auto">
        <Navbar title="My Views" />

        <div className="h-full overflow-y-auto  sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="mb-4">
            <div className="flex justify-end items-end mb-4 w-4/5">
              <button
                className="flex items-end px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => setIsCreatingView(true)}
              >
                <IoCreateOutline className="mr-2" />
                Create View
              </button>
            </div>
            <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
              {currentViews.length > 0 ? (
                currentViews.map((view) => (
                  <Link
                    href={`/radiiView/${view.viewID}`}
                    key={view.viewID}
                    className="border p-4 rounded shadow-sm flex justify-between items-center py-6"
                  >
                    <div className="flex items-center">
                      <CiGrid42
                        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                        size={34}
                      />
                      <div>
                        <h3 className="font-bold mb-4">{view.name}</h3>
                        <p className="text-gray-500">
                          <span> Updated: </span>
                          {new Date(view.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <IoEllipsisVerticalOutline className="text-gray-500 cursor-pointer" />
                  </Link>
                ))
              ) : (
                <p>No views available</p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500">
              Showing {indexOfFirstView + 1}-
              {Math.min(indexOfLastView, views.length)} of {views.length}
            </p>
            <div className="flex space-x-2">
              {[...Array(viewTotalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentViewPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentViewPage === index + 1
                      ? "bg-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col mb-4">
              <h2 className="text-xl font-semibold mb-4">Charts</h2>
              <div className="relative w-[20%]">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border p-2 rounded-lg w-full pl-10"
                />
                <IoSearchOutline className="absolute top-[13px] left-3 text-gray-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 w-3/5 sm:grid-cols-2 gap-4">
              {currentCharts.map((chart, index) => (
                <div
                  key={index}
                  className="border p-4 rounded shadow-sm  py-6 "
                >
                  <div
                    className="flex items-center"
                    onClick={() => handleChartClick(chart)}
                  >
                    {chart.type === "Doughnut" && (
                      <FaChartPie
                        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                        size={34}
                      />
                    )}
                    {chart.type === "Pie" && (
                      <FaChartPie
                        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                        size={34}
                      />
                    )}
                    {chart.type === "Bar" && (
                      <FaChartBar
                        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                        size={34}
                      />
                    )}
                    {chart.type === "Line" && (
                      <FaChartLine
                        className="text-2xl mr-4 text-[#038C7F] font-extrabold"
                        size={34}
                      />
                    )}
                    <div>
                      <h3 className="font-bold mb-4 text-[16px]">
                        {truncateText(chart.name, 25)}
                      </h3>
                      <p className="text-gray-500">
                        <span> Updated: </span>
                        {new Date(chart.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <FaTrashAlt
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(chart.chartID)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 mt-4">
            <p className="text-gray-500">
              Showing {indexOfFirstChart + 1}-
              {Math.min(indexOfLastChart, charts.length)} of {charts.length}
            </p>
            <div className="flex space-x-2">
              {[...Array(chartTotalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChartPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentChartPage === index + 1
                      ? "bg-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedChart && (
        <ChartModal
          isOpen={Boolean(selectedChart)}
          onClose={closeModal}
          chartData={selectedChart}
        />
      )}
      {isCreatingView && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create New View</h2>
            <input
              type="text"
              value={newViewName}
              onChange={(e) => setNewViewName(e.target.value)}
              placeholder="View Name"
              className="border p-2 mb-4 w-full"
            />
            <textarea
              value={newViewDescription}
              onChange={(e) => setNewViewDescription(e.target.value)}
              placeholder="Description"
              className="border p-2 mb-4 w-full"
            ></textarea>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 rounded mr-2"
                onClick={() => setIsCreatingView(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleCreateView}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyViews;
