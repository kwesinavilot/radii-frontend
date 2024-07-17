// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import SearchResult from "@/app/component/SearchResult";
// import LibraryItemPopup from "@/app/component/LibraryItems";
// import { RootState } from "@/app/store/store";
// import { truncateText } from "@/app/utils/truncateText";
// import generateAxiosConfig from "@/app/config/axiosConfig";

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
//   insight: string;
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

// const Insight: React.FC = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
//   const [remainingPrompts, setRemainingPrompts] = useState(10);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState<Result | null>(null);
//   const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
//   const [popupItem, setPopupItem] = useState<LibraryItem | null>(null);
//   const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

//   const fetchLibraryItems = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get(
//         "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
//         generateAxiosConfig()
//       );
//       setLibraryItems(response.data);
//       console.log("Library items fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching library items:", error);
//       toast.error("Error fetching library items");
//     }
//   };

//   useEffect(() => {
//     if (token && orgID) {
//       fetchLibraryItems();
//     }
//   }, [orgID, token]);

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
//         console.log("Insights fetched successfully:", response.data);
//         setResult(response.data);
//         setShowResult(true);
//       } catch (error) {
//         console.error("Error fetching insights:", error);
//         toast.error("Error fetching insights");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleLibraryItemClick = async (item: LibraryItem) => {
//     try {
//       const response = await axios.get(
//         `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${item.searchID}/`,
//         generateAxiosConfig()
//       );
//       setResult(response.data);
//       setShowResult(true);
//       console.log("Library item details fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching library item details:", error);
//       toast.error("Error fetching library item details");
//     }
//   };

//   const handleEllipsisClick = (e: React.MouseEvent, item: LibraryItem) => {
//     const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
//     setPopupItem(item);
//     setPopupPosition({
//       top: rect.top,
//       left: rect.right,
//     });
//   };

//   const handleDelete = async (searchID: string) => {
//     try {
//       await axios.delete(
//         `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${searchID}/`,
//         generateAxiosConfig()
//       );
//       toast.success("Library item deleted successfully");
//       fetchLibraryItems();
//       setPopupItem(null);
//     } catch (error) {
//       console.error("Error deleting library item:", error);
//       toast.error("Error deleting library item");
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Dashboard" icon="" />
//       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
//         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
//           <h2 className="text-xl font-bold mb-4">Library</h2>
//           {libraryItems.length > 0 ? (
//             <ul className="h-screen overflow-y-auto">
//               {libraryItems.map((item) => (
//                 <div
//                   key={item.searchID}
//                   className="mb-2 p-4 bg-gray-100 relative cursor-pointer"
//                   onClick={() => handleLibraryItemClick(item)}
//                 >
//                   <h3 className="font-semibold text-sm mb-1">
//                     {truncateText(item.query, 24)}{" "}
//                     {item.query.length > 24 && (
//                       <button
//                         className="text-blue-500 hover:underline"
//                         onClick={(e) => handleEllipsisClick(e, item)}
//                       >
//                         ...
//                       </button>
//                     )}
//                   </h3>
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

//       {popupItem && (
//         <LibraryItemPopup
//           isOpen={true}
//           onClose={() => setPopupItem(null)}
//           onDetails={() => {
//             console.log("Details clicked");
//             setPopupItem(null);
//           }}
//           onEdit={() => {
//             console.log("Edit clicked");
//             setPopupItem(null);
//           }}
//           onDelete={() => {
//             console.log("Delete clicked");
//             handleDelete(popupItem.searchID);
//           }}
//           onShare={() => {
//             console.log("Share clicked");
//             setPopupItem(null);
//           }}
//           position={popupPosition}
//         />
//       )}
//     </div>
//   );
// };

// export default Insight;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import SearchResult from "@/app/component/SearchResult";
// import LibraryItemPopup from "@/app/component/LibraryItems";
// import { RootState } from "@/app/store/store";
// import { truncateText } from "@/app/utils/truncateText";
// import generateAxiosConfig from "@/app/config/axiosConfig";

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
//   insight: string;
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

// const Insight: React.FC = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
//   const [remainingPrompts, setRemainingPrompts] = useState(10);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState<Result | null>(null);
//   const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
//   const [popupItem, setPopupItem] = useState<LibraryItem | null>(null);
//   const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
//   const [selectedDataSource, setSelectedDataSource] = useState("folder");

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

//   const fetchLibraryItems = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get(
//         "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
//         generateAxiosConfig()
//       );
//       setLibraryItems(response.data);
//       console.log("Library items fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching library items:", error);
//       toast.error("Error fetching library items");
//     }
//   };

//   useEffect(() => {
//     if (token && orgID) {
//       fetchLibraryItems();
//     }
//   }, [orgID, token]);

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
//         console.log("Insights fetched successfully:", response.data);
//         setResult(response.data);
//         setShowResult(true);
//       } catch (error) {
//         console.error("Error fetching insights:", error);
//         toast.error("Error fetching insights");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleLibraryItemClick = async (item: LibraryItem) => {
//     try {
//       const response = await axios.get(
//         `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${item.searchID}/`,
//         generateAxiosConfig()
//       );
//       setResult(response.data);
//       setShowResult(true);
//       console.log("Library item details fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching library item details:", error);
//       toast.error("Error fetching library item details");
//     }
//   };

//   const handleEllipsisClick = (e: React.MouseEvent, item: LibraryItem) => {
//     const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
//     setPopupItem(item);
//     setPopupPosition({
//       top: rect.top,
//       left: rect.right,
//     });
//   };

//   const handleDelete = async (searchID: string) => {
//     try {
//       await axios.delete(
//         `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${searchID}/`,
//         generateAxiosConfig()
//       );
//       toast.success("Library item deleted successfully");
//       fetchLibraryItems();
//       setPopupItem(null);
//     } catch (error) {
//       console.error("Error deleting library item:", error);
//       toast.error("Error deleting library item");
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Dashboard" icon="" />
//       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
//         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
//           <h2 className="text-xl font-bold mb-4">Library</h2>
//           {libraryItems.length > 0 ? (
//             <ul className="h-screen overflow-y-auto">
//               {libraryItems.map((item) => (
//                 <div
//                   key={item.searchID}
//                   className="mb-2 p-4 bg-gray-100 relative cursor-pointer"
//                   onClick={() => handleLibraryItemClick(item)}
//                 >
//                   <h3 className="font-semibold text-sm mb-1">
//                     {truncateText(item.query, 24)}{" "}
//                     {item.query.length > 24 && (
//                       <button
//                         className="text-blue-500 hover:underline"
//                         onClick={(e) => handleEllipsisClick(e, item)}
//                       >
//                         ...
//                       </button>
//                     )}
//                   </h3>
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
//             {/* <SearchBar
//               value={inputValue}
//               onChange={setInputValue}
//               onSubmit={handleSearchSubmit}
//               selectedFolder={selectedFolder}
//               onFolderChange={setSelectedFolder}
//               remainingPrompts={remainingPrompts}
//             /> */}
//             <SearchBar
//               value={inputValue}
//               onChange={setInputValue}
//               onSubmit={handleSearchSubmit}
//               selectedFolder={selectedFolder}
//               onFolderChange={setSelectedFolder}
//               selectedDataSource={selectedDataSource}
//               onDataSourceChange={setSelectedDataSource}
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

//       {popupItem && (
//         <LibraryItemPopup
//           isOpen={true}
//           onClose={() => setPopupItem(null)}
//           onDetails={() => {
//             console.log("Details clicked");
//             setPopupItem(null);
//           }}
//           onEdit={() => {
//             console.log("Edit clicked");
//             setPopupItem(null);
//           }}
//           onDelete={() => {
//             console.log("Delete clicked");
//             handleDelete(popupItem.searchID);
//           }}
//           onShare={() => {
//             console.log("Share clicked");
//             setPopupItem(null);
//           }}
//           position={popupPosition}
//         />
//       )}
//     </div>
//   );
// };

// export default Insight;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import SearchResult from "@/app/component/SearchResult";
// import LibraryItemPopup from "@/app/component/LibraryItems";
// import { RootState } from "@/app/store/store";
// import { truncateText } from "@/app/utils/truncateText";
// import generateAxiosConfig from "@/app/config/axiosConfig";

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
//   insight: string;
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

// const Insight: React.FC = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
//   const [remainingPrompts, setRemainingPrompts] = useState(10);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState<Result | null>(null);
//   const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
//   const [popupItem, setPopupItem] = useState<LibraryItem | null>(null);
//   const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
//   const [selectedDataSource, setSelectedDataSource] = useState("folder");

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);
//   const integrationID = useSelector(
//     (state: RootState) => state.auth.integrationID
//   );

//   const fetchLibraryItems = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get(
//         "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
//         generateAxiosConfig()
//       );
//       setLibraryItems(response.data);
//       console.log("Library items fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching library items:", error);
//       toast.error("Error fetching library items");
//     }
//   };

//   useEffect(() => {
//     if (token && orgID) {
//       fetchLibraryItems();
//     }
//   }, [orgID, token]);

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
//             sourceType: selectedDataSource === "drive" ? "gdrive" : "folder",
//             folderID: selectedDataSource === "folder" ? "static" : undefined,
//             integrationID:
//               selectedDataSource === "drive" ? integrationID : undefined,
//           },
//           generateAxiosConfig()
//         );
//         console.log("Insights fetched successfully:", response.data);
//         setResult(response.data);
//         setShowResult(true);
//       } catch (error) {
//         console.error("Error fetching insights:", error);
//         toast.error("Error fetching insights");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleLibraryItemClick = async (item: LibraryItem) => {
//     try {
//       const response = await axios.get(
//         `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${item.searchID}/`,
//         generateAxiosConfig()
//       );
//       setResult(response.data);
//       setShowResult(true);
//       console.log("Library item details fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching library item details:", error);
//       toast.error("Error fetching library item details");
//     }
//   };

//   const handleEllipsisClick = (e: React.MouseEvent, item: LibraryItem) => {
//     const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
//     setPopupItem(item);
//     setPopupPosition({
//       top: rect.top,
//       left: rect.right,
//     });
//   };

//   const handleDelete = async (searchID: string) => {
//     try {
//       await axios.delete(
//         `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${searchID}/`,
//         generateAxiosConfig()
//       );
//       toast.success("Library item deleted successfully");
//       fetchLibraryItems();
//       setPopupItem(null);
//     } catch (error) {
//       console.error("Error deleting library item:", error);
//       toast.error("Error deleting library item");
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Dashboard" icon="" />
//       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
//         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
//           <h2 className="text-xl font-bold mb-4">Library</h2>
//           {libraryItems.length > 0 ? (
//             <ul className="h-screen overflow-y-auto">
//               {libraryItems.map((item) => (
//                 <div
//                   key={item.searchID}
//                   className="mb-2 p-4 bg-gray-100 relative cursor-pointer"
//                   onClick={() => handleLibraryItemClick(item)}
//                 >
//                   <h3 className="font-semibold text-sm mb-1">
//                     {truncateText(item.query, 24)}{" "}
//                     {item.query.length > 24 && (
//                       <button
//                         className="text-blue-500 hover:underline"
//                         onClick={(e) => handleEllipsisClick(e, item)}
//                       >
//                         ...
//                       </button>
//                     )}
//                   </h3>
//                 </div>
//               ))}
//             </ul>
//           ) : (
//             <p>Nothing here yet</p>
//           )}
//         </div>
//         <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
// <div className="w-5/6 mx-auto mt-4">
//   <h1 className="text-[40px] text-center font-bold mb-4">
//     Ask Radii A Question
//   </h1>
//   <div className="grid grid-cols-2 gap-4 mb-8">
//               {questions.map((question, index) => (
//                 <Card
//                   key={index}
//                   title={question}
//                   onClick={() => handleCardClick(question)}
//                   className="h-20 w-full"
//                 />
//               ))}
//   </div>
// </div>
// <div className="relative">
// <SearchBar
//   value={inputValue}
//   onChange={setInputValue}
//   onSubmit={handleSearchSubmit}
//   selectedFolder={selectedFolder}
//   onFolderChange={setSelectedFolder}
//   selectedDataSource={selectedDataSource}
//   onDataSourceChange={setSelectedDataSource}
//   remainingPrompts={remainingPrompts}
// />
//   {isLoading && (
//     <div className="flex mt-4">
//       <div className="flex items-center gap-2">
//         <Image
//           src="/i-logo.svg"
//           alt="Radiis logo"
//           width={22}
//           height={22}
//         />
//         <Loader />
//       </div>
//     </div>
//   )}
// </div>

//           {!isLoading && showResult && result && (
//             <SearchResult result={result} />
//           )}
//         </main>
//       </div>

// {popupItem && (
//   <LibraryItemPopup
//     isOpen={true}
//     onClose={() => setPopupItem(null)}
//     onDetails={() => {
//       console.log("Details clicked");
//       setPopupItem(null);
//     }}
//     onEdit={() => {
//       console.log("Edit clicked");
//       setPopupItem(null);
//     }}
//     onDelete={() => {
//       console.log("Delete clicked");
//       handleDelete(popupItem.searchID);
//     }}
//     onShare={() => {
//       console.log("Share clicked");
//       setPopupItem(null);
//     }}
//     position={popupPosition}
//   />
// )}
//     </div>
//   );
// };

// export default Insight;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "@/app/component/NavBar";
import SearchBar from "@/app/component/SearchBar";
import Card from "@/app/component/Card";
import Loader from "@/app/component/Loader";
import SearchResult from "@/app/component/SearchResult";
import LibraryItemPopup from "@/app/component/LibraryItems";
import { RootState } from "@/app/store/store";
import { truncateText } from "@/app/utils/truncateText";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { setIntegrationID } from "@/app/store/integrationSlice";

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

  useEffect(() => {
    if (token && orgID) {
      fetchLibraryItems();
    }
  }, [orgID, token]);

  const handleCardClick = (question: string) => {
    setInputValue(question);
  };

  // const handleSearchSubmit = async () => {
  //   if (inputValue.trim()) {
  //     setIsLoading(true);
  //     setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
  //     setInputValue("");

  //     try {
  //       const response = await axios.post(
  //         "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
  //         {
  //           query: inputValue,
  //           orgID: orgID,
  //           sourceType: selectedDataSource === "drive" ? "gdrive" : "folder",
  //           folderID: selectedDataSource === "folder" ? "static" : undefined,
  //           integrationID:
  //             selectedDataSource === "drive" ? integrationID : undefined,
  //         },
  //         generateAxiosConfig()
  //       );
  //       console.log("Insights fetched successfully:", response.data);
  //       setResult(response.data);
  //       setShowResult(true);
  //     } catch (error) {
  //       console.error("Error fetching insights:", error);
  //       toast.error("Error fetching insights");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  // };

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
          "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
          payload,
          generateAxiosConfig()
        );

        console.log("Insights fetched successfully:", response.data);
        setResult(response.data);
        setShowResult(true);
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
        `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${item.searchID}/`,
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
        `https://lobster-app-9ufhi.ondigitalocean.app/insights/library/${searchID}/`,
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
                  className="mb-2 p-4 bg-gray-100 relative cursor-pointer hover:bg-gray-200"
                >
                  <p
                    className="text-sm truncate cursor-pointer"
                    onClick={() => handleLibraryItemClick(item)}
                  >
                    {item.query}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {truncateText(item.query, 25)}
                  </p>
                  <button
                    className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEllipsisClick(e, item);
                    }}
                  >
                    ...
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>No items found in the library.</p>
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

          {!isLoading && showResult && result && (
            <SearchResult result={result} />
          )}
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
