"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "@/app/component/NavBar";
import SearchBar from "@/app/component/SearchBar";
import Card from "@/app/component/Card";
import Loader from "@/app/component/Loader";
import SearchResult from "@/app/component/SearchResult";
import LibraryItemPopup from "@/app/component/LibraryItems";
import { RootState } from "@/app/store/store";
import { truncateText } from "@/app/utils/truncateText";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { setSearchID } from "@/app/store/insightSlice";
import Image from "next/image";

import { EllipsisIcon } from "lucide-react";

interface ChartData {
  chartType: string;
  data: {
    labels: string[];
    datasets: { label: string; data: number[] }[];
  };
  options: {
    title: string;
    xAxisLabel: string;
    yAxisLabel: string;
  };
}

interface Metadata {
  file_name: string;
  file_path: string;
  org_id: string;
  folder_id: string;
  content_hash: string;
  date_added: string;
}

interface Result {
  insight: string;
  chart_data: ChartData | null;
  metadata: { [key: string]: Metadata };
  sources: string;
  searchID: string;
}

interface LibraryItem {
  searchID: string;
  query: string;
  created_at: string;
  updated_at: string;
}

const questions: string[] = [
  // "What is the total traffic flow between Accra and Tema?",
  // "Which locations have the highest customer traffic on Monday",
  // "Compare the daily inbound and outbound traffic for Takoradi for q1 and q2",
  "What are the top 3 businesses locations",
  "What are the major industries the businesses belong to",
  "What cities have the highest location of businesses",
  "What are the top 5 businesses challenges",
  // "Compare the top 5 days with the highest movement between Q1 and Q2",
];

const Insight: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("Movement DS");
  const [remainingPrompts, setRemainingPrompts] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
  const [popupItem, setPopupItem] = useState<LibraryItem | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [selectedDataSource, setSelectedDataSource] = useState("folder");

  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);
  const integrationID = useSelector(
    (state: RootState) => state.integration.integrationID
  );

  const dispatch = useDispatch();

  const fetchLibraryItems = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get(
        "https://starfish-app-9ezx5.ondigitalocean.app/insights/library/",
        generateAxiosConfig()
      );
      setLibraryItems(response.data);
      console.log("Library items fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching library items:", error);
      toast.error("Error fetching library items");
    }
  };

  useEffect(() => {
    if (token && orgID) {
      fetchLibraryItems();
    }
  }, [orgID, token]);

  const handleCardClick = (question: string) => {
    setInputValue(question);
  };

  const handleSearchSubmit = async () => {
    if (inputValue.trim()) {
      setIsLoading(true);
      setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
      setInputValue("");

      try {
        let payload: any = {
          query: inputValue,
          orgID: orgID,
          sourceType: selectedDataSource === "drive" ? "gdrive" : "folder",
          folderID: selectedDataSource === "folder" ? "static" : undefined,
        };

        if (selectedDataSource === "drive") {
          payload.integrationID = integrationID;
        }

        console.log(integrationID);

        const response = await axios.post(
          "https://starfish-app-9ezx5.ondigitalocean.app/insights/internal/",
          payload,
          generateAxiosConfig()
        );

        console.log("Insights fetched successfully:", response.data);
        setResult(response.data);
        setShowResult(true);
        dispatch(setSearchID(response.data.searchID));
        console.log("Search ID:", response.data.searchID);
      } catch (error) {
        console.error("Error fetching insights:", error);
        toast.error("Error fetching insights");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLibraryItemClick = async (item: LibraryItem) => {
    try {
      const response = await axios.get(
        `https://starfish-app-9ezx5.ondigitalocean.app/insights/library/${item.searchID}/`,
        generateAxiosConfig()
      );
      setResult(response.data);
      setShowResult(true);
      console.log("Library item details fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching library item details:", error);
      toast.error("Error fetching library item details");
    }
  };

  const handleEllipsisClick = (e: React.MouseEvent, item: LibraryItem) => {
    const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
    setPopupItem(item);
    setPopupPosition({
      top: rect.top,
      left: rect.right,
    });
  };

  const handleDelete = async (searchID: string) => {
    try {
      await axios.delete(
        `https://starfish-app-9ezx5.ondigitalocean.app/insights/library/${searchID}/`,
        generateAxiosConfig()
      );
      toast.success("Library item deleted successfully");
      fetchLibraryItems();
      setPopupItem(null);
    } catch (error) {
      console.error("Error deleting library item:", error);
      toast.error("Error deleting library item");
    }
  };

  const handleSaveChart = async (
    chartData: ChartData,
    chartType: string,
    searchID: string
  ) => {
    try {
      const response = await axios.post(
        "https://starfish-app-9ezx5.ondigitalocean.app/visuals/charts/",
        {
          chart_data: JSON.stringify(chartData),
          name: chartData.options.title,
          searchID: searchID,
          type: chartType,
        },
        generateAxiosConfig()
      );
      toast.success("Chart saved successfully");
      console.log("Chart saved successfully:", chartData);
    } catch (error) {
      console.error("Error saving chart:", error);
      toast.error("Error saving chart");
    }
  };
  return (
    <div className="bg-gray-100 h-screen overflow-y-auto">
      <ToastContainer />
      <Navbar title="Ask Radii A Question" icon="" />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
        <div className="block sm:col-span-1 h-full overflow-y-auto py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <h2 className="text-xl font-bold mb-4">Library</h2>
          {libraryItems.length > 0 ? (
            <ul className="h-screen overflow-y-auto">
              {libraryItems.map((item) => (
                <div
                  key={item.searchID}
                  className="mb-2 p-4 bg-gray-100 relative cursor-pointer hover:bg-gray-200"
                >
                  <p
                    className="text-sm truncate cursor-pointer"
                    onClick={() => handleLibraryItemClick(item)}
                  >
                    {truncateText(item.query, 25)}
                  </p>

                  <button
                    className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEllipsisClick(e, item);
                    }}
                  >
                    <EllipsisIcon />
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>No items found in the library.</p>
          )}
        </div>
        <main className="sm:col-span-3 block  h-full overflow-y-auto  py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
          {!isLoading && showResult && result && (
            <div className="w-full mx-auto mt-4">
              <h2 className="text-xl font-bold mb-4">Result</h2>
              <SearchResult result={result} onSaveChart={handleSaveChart} />
            </div>
          )}

          <div className="w-5/6 mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Sample Prompt</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {questions.map((question, index) => (
                <Card
                  key={index}
                  title={question}
                  onClick={() => handleCardClick(question)}
                  className="h-30 flex flex-col flex-wrap w-full"
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <SearchBar
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleSearchSubmit}
              selectedFolder={selectedFolder}
              onFolderChange={setSelectedFolder}
              selectedDataSource={selectedDataSource}
              onDataSourceChange={setSelectedDataSource}
              remainingPrompts={remainingPrompts}
            />
            {isLoading && (
              <div className="flex mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/i-logo.svg"
                    alt="Radiis logo"
                    width={22}
                    height={22}
                  />
                  <Loader />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      {popupItem && (
        <LibraryItemPopup
          isOpen={true}
          onClose={() => setPopupItem(null)}
          onDetails={() => {
            console.log("Details clicked");
            setPopupItem(null);
          }}
          onEdit={() => {
            console.log("Edit clicked");
            setPopupItem(null);
          }}
          onDelete={() => {
            console.log("Delete clicked");
            handleDelete(popupItem.searchID);
          }}
          onShare={() => {
            console.log("Share clicked");
            setPopupItem(null);
          }}
          position={popupPosition}
        />
      )}
    </div>
  );
};

export default Insight;
