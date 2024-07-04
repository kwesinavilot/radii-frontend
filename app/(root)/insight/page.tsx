"use client";
import React, { useEffect, useState } from "react";
import Card from "@/app/component/Card";
import Loader from "@/app/component/Loader";
import Navbar from "@/app/component/NavBar";
import SearchBar from "@/app/component/SearchBar";
import SearchResult from "@/app/component/SearchResult";
import Image from "next/image";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

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
  insights: string;
  chart_data: ChartData;
  metadata: { [key: string]: Metadata };
  sources: string;
}

interface LibraryItem {
  searchID: string;
  query: string;
  created_at: string;
  updated_at: string;
}

const questions: string[] = [
  "What is the total traffic flow between Accra and Tema?",
  "Which locations have the highest customer traffic on Monday",
  "Compare the daily inbound and outbound traffic for Takoradi for q1 and q2",
  "Compare the top 5 days with the highest movement between Q1 and Q2",
];

export default function Insight() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("Movement DS");
  const [remainingPrompts, setRemainingPrompts] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);

  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);

  useEffect(() => {
    const fetchLibraryItems = async () => {
      try {
        if (!orgID) {
          throw new Error("orgID is required");
        }
        const response = await axios.get(
          "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
          generateAxiosConfig()
        );
        setLibraryItems(response.data);

        console.log("Library items fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching library items:", error);
        toast.error("Error fetching library items");
      }
    };

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
        const response = await axios.post(
          "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
          {
            query: inputValue,
            orgID: orgID,
            sourceType: "folder",
            folderID: "static",
          },
          generateAxiosConfig()
        );
        setResult(response.data);
        console.log("Insights fetched successfully:", response.data);
        setShowResult(true);
      } catch (error) {
        console.error("Error fetching insights:", error);
        toast.error("Error fetching insights");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Dashboard" icon="" />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
        <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <h2 className="text-xl font-bold mb-4">Library</h2>
          {libraryItems.length > 0 ? (
            <ul className="h-screen overflow-y-auto">
              {libraryItems.map((item) => (
                <div
                  key={item.searchID}
                  className="mb-2 p-4 bg-gray-100 relative"
                >
                  <h3 className="font-semibold text-lg mb-1">{item.query}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Added on {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <div className="absolute right-2 top-2 flex gap-2">
                    <button
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => {}}
                    >
                      Share
                    </button>
                    <button
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => {}}
                    >
                      Delete
                    </button>
                    <button
                      className="text-gray-500 hover:text-blue-500"
                      onClick={() => {}}
                    >
                      Rename
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p>Nothing here yet</p>
          )}
        </div>
        <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
          <div className="w-5/6 mx-auto mt-4">
            <h1 className="text-[40px] text-center font-bold mb-4">
              Ask Radii A Question
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {questions.map((question, index) => (
                <Card
                  key={index}
                  title={question}
                  onClick={() => handleCardClick(question)}
                  className="h-20 w-full"
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

          {!isLoading && showResult && result && (
            <SearchResult result={result} />
          )}
        </main>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import SearchResult from "@/app/component/SearchResult";
// import Image from "next/image";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { RootState } from "@/app/store/store";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// interface ChartData {
//   chartType: string;
//   data: {
//     labels: string[];
//     datasets: { label: string; data: number[] }[];
//   };
//   options: {
//     title: string;
//     xAxisLabel: string;
//     yAxisLabel: string;
//   };
// }

// interface Metadata {
//   file_name: string;
//   file_path: string;
//   org_id: string;
//   folder_id: string;
//   content_hash: string;
//   date_added: string;
// }

// interface Result {
//   insights: string;
//   chart_data: ChartData;
//   metadata: { [key: string]: Metadata };
//   sources: string;
// }

// interface LibraryItem {
//   id: string;
//   name: string;
//   description: string;
// }

// const questions: string[] = [
//   "What is the total traffic flow between Accra and Tema?",
//   "Which locations have the highest customer traffic on Monday",
//   "Compare the daily inbound and outbound traffic for Takoradi for q1 and q2",
//   "Compare the top 5 days with the highest movement between Q1 and Q2",
// ];

// export default function Insight() {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
//   const [remainingPrompts, setRemainingPrompts] = useState(10);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState<Result | null>(null);
//   const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

//   useEffect(() => {
//     const fetchLibraryItems = async () => {
//       try {
//         if (!orgID) {
//           throw new Error("orgID is required");
//         }
//         const response = await axios.get(
//           "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
//           generateAxiosConfig()
//         );
//         setLibraryItems(response.data);

//         console.log("Library items fetched successfully:", response.data);
//       } catch (error) {
//         console.error("Error fetching library items:", error);
//         toast.error("Error fetching library items");
//       }
//     };

//     if (token && orgID) {
//       fetchLibraryItems();
//     }
//   }, [orgID, token]);

//   console.log(orgID);

//   const handleCardClick = (question: string) => {
//     setInputValue(question);
//   };

//   const handleSearchSubmit = async () => {
//     if (inputValue.trim()) {
//       setIsLoading(true);
//       setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
//       setInputValue("");

//       try {
//         const response = await axios.post(
//           "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
//           {
//             query: inputValue,
//             orgID: orgID,
//             sourceType: "folder",
//             folderID: "static",
//           },
//           generateAxiosConfig()
//         );
//         setResult(response.data);
//         console.log("Insights fetched successfully:", response.data);
//         setShowResult(true);
//       } catch (error) {
//         console.error("Error fetching insights:", error);
//         toast.error("Error fetching insights");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Dashboard" icon="" />
//       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
//         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
//           <h2 className="text-xl font-bold mb-4">Library</h2>
//           {libraryItems.length > 0 ? (
//             <ul>
//               {libraryItems.map((item) => (
//                 <li key={item.id} className="mb-2">
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p>{item.description}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Nothing here yet</p>
//           )}
//         </div>
//         <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
//           <div className="w-5/6 mx-auto mt-4">
//             <h1 className="text-[40px] text-center font-bold mb-4">
//               Ask Radii A Question
//             </h1>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {questions.map((question, index) => (
//                 <Card
//                   key={index}
//                   title={question}
//                   onClick={() => handleCardClick(question)}
//                   className="h-20 w-full"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <SearchBar
//               value={inputValue}
//               onChange={setInputValue}
//               onSubmit={handleSearchSubmit}
//               selectedFolder={selectedFolder}
//               onFolderChange={setSelectedFolder}
//               remainingPrompts={remainingPrompts}
//             />
//             {isLoading && (
//               <div className="flex mt-4">
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/i-logo.svg"
//                     alt="Radiis logo"
//                     width={22}
//                     height={22}
//                   />
//                   <Loader />
//                 </div>
//               </div>
//             )}
//           </div>

//           {!isLoading && showResult && result && (
//             <SearchResult result={result} />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import SearchResult from "@/app/component/SearchResult";
// import Image from "next/image";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { RootState } from "@/app/store/store";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// interface ChartData {
//   chartType: string;
//   data: {
//     labels: string[];
//     datasets: { label: string; data: number[] }[];
//   };
//   options: {
//     title: string;
//     xAxisLabel: string;
//     yAxisLabel: string;
//   };
// }

// interface Metadata {
//   file_name: string;
//   file_path: string;
//   org_id: string;
//   folder_id: string;
//   content_hash: string;
//   date_added: string;
// }

// interface Result {
//   insights: string;
//   chart_data: ChartData;
//   metadata: { [key: string]: Metadata };
//   sources: string;
// }

// interface LibraryItem {
//   searchID: string;
//   query: string;
//   created_at: string;
//   updated_at: string;
// }

// const questions: string[] = [
//   "What is the total traffic flow between Accra and Tema?",
//   "Which locations have the highest customer traffic on Monday",
//   "Compare the daily inbound and outbound traffic for Takoradi for q1 and q2",
//   "Compare the top 5 days with the highest movement between Q1 and Q2",
// ];

// export default function Insight() {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
//   const [remainingPrompts, setRemainingPrompts] = useState(10);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState<Result | null>(null);
//   const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

//   useEffect(() => {
//     const fetchLibraryItems = async () => {
//       try {
//         if (!orgID) {
//           throw new Error("orgID is required");
//         }
//         const response = await axios.get(
//           "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
//           generateAxiosConfig()
//         );
//         setLibraryItems(response.data);

//         console.log("Library items fetched successfully:", response.data);
//       } catch (error) {
//         console.error("Error fetching library items:", error);
//         toast.error("Error fetching library items");
//       }
//     };

//     if (token && orgID) {
//       fetchLibraryItems();
//     }
//   }, [orgID, token]);

//   console.log(orgID);

//   const handleCardClick = (question: string) => {
//     setInputValue(question);
//   };

//   const handleSearchSubmit = async () => {
//     if (inputValue.trim()) {
//       setIsLoading(true);
//       setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
//       setInputValue("");

//       try {
//         const response = await axios.post(
//           "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
//           {
//             query: inputValue,
//             orgID: orgID,
//             sourceType: "folder",
//             folderID: "static",
//           },
//           generateAxiosConfig()
//         );
//         setResult(response.data);
//         console.log("Insights fetched successfully:", response.data);
//         setShowResult(true);
//       } catch (error) {
//         console.error("Error fetching insights:", error);
//         toast.error("Error fetching insights");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Dashboard" icon="" />
//       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
//         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
//           <h2 className="text-xl font-bold mb-4">Library</h2>
//           {libraryItems.length > 0 ? (
//             <ul className="overflow-y-auto max-h-96">
//               {libraryItems.map((item) => (
//                 <div
//                   key={item.searchID}
//                   className="mb-2 p-4 bg-gray-100 relative"
//                 >
//                   <h3 className="font-semibold text-lg mb-1">{item.query}</h3>
//                   <p className="text-sm text-gray-500 mb-2">
//                     Added on {new Date(item.created_at).toLocaleDateString()}
//                   </p>
//                   <div className="absolute right-2 top-2 flex gap-2">
//                     <button
//                       className="text-gray-500 hover:text-blue-500"
//                       onClick={() => {}}
//                     >
//                       Share
//                     </button>
//                     <button
//                       className="text-gray-500 hover:text-blue-500"
//                       onClick={() => {}}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="text-gray-500 hover:text-blue-500"
//                       onClick={() => {}}
//                     >
//                       Rename
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           ) : (
//             <p>Nothing here yet</p>
//           )}
//         </div>
//         <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
//           <div className="w-5/6 mx-auto mt-4">
//             <h1 className="text-[40px] text-center font-bold mb-4">
//               Ask Radii A Question
//             </h1>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {questions.map((question, index) => (
//                 <Card
//                   key={index}
//                   title={question}
//                   onClick={() => handleCardClick(question)}
//                   className="h-20 w-full"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <SearchBar
//               value={inputValue}
//               onChange={setInputValue}
//               onSubmit={handleSearchSubmit}
//               selectedFolder={selectedFolder}
//               onFolderChange={setSelectedFolder}
//               remainingPrompts={remainingPrompts}
//             />
//             {isLoading && (
//               <div className="flex mt-4">
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/i-logo.svg"
//                     alt="Radiis logo"
//                     width={22}
//                     height={22}
//                   />
//                   <Loader />
//                 </div>
//               </div>
//             )}
//           </div>

//           {!isLoading && showResult && result && (
//             <SearchResult result={result} />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
