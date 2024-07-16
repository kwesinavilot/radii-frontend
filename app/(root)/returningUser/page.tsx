"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlus, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import {
  IoCopyOutline,
  IoDownloadOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import Link from "next/link";
import Navbar from "@/app/component/NavBar";

// interface RecentSearch {
//   searchID: string;
//   query: string;
//   updated_at: string;
// }

// interface Data {
//   recentSearches: RecentSearch[];
// }

// interface ReturningUserProps {
//   userQueries: number;
//   data: Data;
// }

// const ReturningUser: React.FC<any> = ({ userQueries, data }) => {
//   const router = useRouter();
//   const [recentSearches, setRecentSearches] = useState<RecentSearch[]>(
//     data?.recentSearches || []
//   );

//   const handleUserQueriesClick = (searchID: string) => {
//     const url = `/internalInsight?selectedQuery=${searchID}`;
//     router.push(url);
//   };

interface RecentSearch {
  searchID: string;
  query: string;
  updated_at: string;
}

interface Data {
  recentSearches: RecentSearch[];
}

interface ReturningUserProps {
  userQueries: number;
  data: Data;
  onRecentSearchClick: (searchID: string) => void;
}

const ReturningUser: React.FC<ReturningUserProps> = ({
  userQueries,
  data,
  onRecentSearchClick,
}) => {
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>(
    data?.recentSearches || []
  );

  const handleUserQueriesClick = (searchID: string) => {
    onRecentSearchClick(searchID);
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Dashboard" icon="" />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 overflow-y-auto">
        <div className="sm:col-span-3 py-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Insight Today</h2>
            <div className="flex flex-col mt-2 justify-start py-4 px-6 border border-gradient rounded-xl hover:bg-gray-100 dark:border-gray-100 transition-transform transform">
              <h2 className="font-bold text-[18px] mb-2">Insights</h2>
              <ul className="text-[14px] list-disc px-4 ">
                <li>
                  The orders from Company XYZ has increased by 150% in the last
                  2 weeks.
                </li>
                <li>Sales has dropped drastically in June.</li>
                <li>
                  Company XYZ has seen a remarkable surge in orders, showing a
                  growth rate of 150% within the past two weeks.
                </li>
              </ul>
              <h2 className="font-bold text-[18px] py-2">
                Key Recommendations
              </h2>
              <p className="text-[14px]">
                Increased by your orders by 150% in the next 2 weeks, which
                should extend to a growth rate of 300% within the next month.
              </p>

              <div className="flex items-center justify-between mt-6">
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

                <Link href="/radiiView" className="flex border-gray-400">
                  <button className="text-white font-semi-bold py-2 px-4 rounded-lg border flex items-center gap-2 shadow  bg-[#E58A13]">
                    My Views
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between py-2 my-8 gap-2">
            <div className="flex flex-grow flex-col items-start justify-start py-4 pl-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div className="flex items-center gap-2">
                <Image
                  src="/insights.png"
                  alt="internal insight"
                  width={12}
                  height={12}
                />
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 flex mt-2">
                  Get Insight{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                Start by pointing us to a data source.
              </p>

              <div className="flex justify-between">
                <Link
                  href="/connectDataSources"
                  className="text-dark font-semi-bold py-2 px-6 rounded-xl mt-6 border border-gray-600 flex items-center gap-2"
                >
                  <FaPlus />
                  Add Source
                </Link>
              </div>
            </div>
            <div className="flex-grow flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div className="border-b-2 border-neutral-500 px-8 py-3 dark:border-black/10">
                <h2 className="font-semibold"> Total Questions Asked</h2>
              </div>
              <div className="p-6 flex items-center m-auto">
                <span className="font-bold text-2xl text-center">
                  {userQueries}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:col-span-1 py-4 px-2 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <div className="block overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="my-6 rounded-xl">
              <div className="py-4 px-4 border rounded-xl border-gradient">
                <h2 className="text-sm font-bold">Sources Connected</h2>

                <div className="py-2">
                  <Image src="/pdf.png" alt="pdf" width={57} height={57} />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-[16px] font-bold">Recent Search</h1>
          {/* {recentSearches.map((search, index) => (
            <ul key={index}>
              <li className="bg-[#F0F2F9] p-2 my-4 list-none rounded-md">
                <span className="flex flex-col">
                  <span
                    onClick={() => handleUserQueriesClick(search.searchID)}
                    className="text-[#E58A13] cursor-pointer"
                  >
                    {search.query}
                  </span>
                  <span className="text-[12px] text-gray-400">
                    {new Date(search.updated_at).toLocaleDateString()}
                  </span>
                </span>
              </li>
            </ul>
          ))} */}

          {recentSearches.map((item) => (
            <ul key={item.searchID}>
              <li className="bg-[#F0F2F9] p-2 my-4 list-none rounded-md">
                <span className="flex flex-col">
                  <span
                    onClick={() => handleUserQueriesClick(item.searchID)}
                    className="text-[#E58A13] cursor-pointer"
                  >
                    {item.query}
                  </span>
                  <span className="text-[12px] text-gray-400">
                    {new Date(item.updated_at).toLocaleDateString()}
                  </span>
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReturningUser;

// "use client";

// import Navbar from "@/app/component/NavBar";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import axios, { AxiosError } from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { format } from "date-fns";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// import { setIntegrationID } from "@/app/store/integrationSlice";

// interface FileItem {
//   sourceID: string;
//   type: string;
//   name: string;
//   source: string;
//   description: string | null;
//   created_at: string;
// }

// interface DriveItem {
//   integrationID: string;
//   service: string;
//   username: string;
//   created_at: string;
// }

// interface FolderItem {
//   id: string;
//   name: string;
//   type: string;
// }

// const DataSourceTable: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("files");
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [drive, setDrive] = useState<DriveItem[]>([]);
//   const [database, setDatabase] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [folders, setFolders] = useState<FolderItem[]>([]);
//   const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
//   const [showFolderModal, setShowFolderModal] = useState(false);
//   const [selectedFolders, setSelectedFolders] = useState<FolderItem[]>([]);
//   const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);

//   const itemsPerPage = 10;

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (token && orgID) {
//       fetchDataSources();
//       fetchDriveData();
//       fetchDatabaseData();
//     }
//   }, [token, orgID]);

//   const fetchDataSources = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get<FileItem[]>(
//         "https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/",
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//           },
//         }
//       );

//       setFiles(response.data);
//       console.log("Files fetched successfully:", response.data);
//     } catch (error) {
//       handleError(error, "Error fetching files");
//     }
//   };

//   const fetchDriveData = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get<DriveItem[]>(
//         "https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/",
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//           },
//         }
//       );

//       setDrive(response.data);
//       console.log("Drive data fetched successfully:", response.data);
//     } catch (error) {
//       handleError(error, "Error fetching drive data");
//     }
//   };

//   const fetchDatabaseData = async () => {
//     // Placeholder for database fetching logic
//   };

//   const fetchFolderContents = async (
//     integrationID: string,
//     folderID: string = "root"
//   ) => {
//     try {
//       const config = generateAxiosConfig();
//       console.log("Axios config: ", config);

//       const response = await axios.get<{
//         folders: FolderItem[];
//         files: any[];
//         current_folderID: string;
//       }>(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${integrationID}/browse/${folderID}/`,
//         {
//           ...config,
//           params: {
//             orgID: orgID,
//           },
//         }
//       );
//       console.log("Folder contents fetched successfully:", response.data);
//       setFolders(response.data.folders);
//       setShowFolderModal(true);
//       dispatch(setIntegrationID(integrationID));
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error response: ", error.response);
//       }
//       handleError(error, "Error fetching folder contents");
//     }
//   };

//   const handleDeleteFile = async (id: string) => {
//     try {
//       const response = await axios.delete(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/${id}`,
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//           },
//         }
//       );
//       console.log("File deleted successfully:", response.data);
//       toast.success("File deleted successfully");
//       fetchDataSources();
//     } catch (error) {
//       handleError(error, "Error deleting file");
//     }
//   };

//   const handleDeleteDrive = async (id: string) => {
//     try {
//       const response = await axios.delete(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${id}`,
//         generateAxiosConfig()
//       );
//       console.log("Drive integration deleted successfully:", response.data);
//       toast.success("Drive integration deleted successfully");
//       fetchDriveData();
//     } catch (error) {
//       handleError(error, "Error deleting drive integration");
//     }
//   };

//   const handleSelectFolder = (folder: FolderItem) => {
//     setSelectedFolders((prevSelectedFolders) => {
//       if (prevSelectedFolders.some((f) => f.id === folder.id)) {
//         return prevSelectedFolders.filter((f) => f.id !== folder.id);
//       } else {
//         return [...prevSelectedFolders, folder];
//       }
//     });
//   };

//   const handleSendSelectedFolder = async () => {
//     try {
//       if (!selectedDrive) {
//         throw new Error("No drive selected");
//       }

//       if (selectedFolders.length === 0) {
//         throw new Error("No folders selected");
//       }

//       console.log("Selected Drive:", selectedDrive);
//       console.log("Selected Folders:", selectedFolders);

//       const payload = {
//         folders: selectedFolders.map((folder) => ({
//           id: folder.id,
//           name: folder.name,
//         })),
//       };

//       console.log("Payload to be sent:", payload);

//       const response = await axios.post(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${selectedDrive.integrationID}/selectDriveFolder/`,
//         payload,
//         generateAxiosConfig()
//       );

//       console.log("Folders selected successfully:", response.data);
//       toast.success("Folders selected successfully");
//       setConnectedFolders(response.data);
//       setShowFolderModal(false);
//       setSelectedFolders([]);
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error response:", error.response);
//         if (error.response?.data?.error) {
//           toast.error(error.response.data.error);
//         } else {
//           toast.error("Error selecting folders");
//         }
//       } else {
//         console.error("Error selecting folders", error);
//         toast.error("Error selecting folders");
//       }
//     }
//   };

//   const handleError = (error: unknown, message: string) => {
//     if (axios.isAxiosError(error)) {
//       toast.error(`${message}: ${error.response?.data.error || error.message}`);
//     } else {
//       toast.error(`${message}: ${String(error)}`);
//     }
//     console.error(message, error);
//   };

//   const renderFilesTable = (data: FileItem[]) => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full table-auto">
//         <thead>
//           <tr className="bg-[#1D1D1D] text-white">
//             <th className="px-4 py-2 text-left">Type</th>
//             <th className="px-4 py-2 text-left">Title</th>
//             <th className="px-4 py-2 text-left">Source</th>

//             <th className="px-4 py-2 text-left">Date Added</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={6} className="px-4 py-2 text-center text-gray-500">
//                 Loading...
//               </td>
//             </tr>
//           ) : data.length > 0 ? (
//             data.map((item) => (
//               <tr key={item.sourceID} className="border-t">
//                 <td className="px-4 py-2">{item.type}</td>
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">{item.source}</td>

//                 <td className="px-4 py-2">
//                   {format(new Date(item.created_at), "yyyy-MM-dd")}
//                 </td>
//                 <td className="px-4 py-2 space-x-2">
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDeleteFile(item.sourceID)}
//                   >
//                     <FaRegTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6} className="px-4 py-2 text-center text-gray-500">
//                 No files found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDriveTable = (data: DriveItem[]) => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full table-auto">
//         <thead>
//           <tr className="bg-[#1D1D1D] text-white">
//             <th className="px-4 py-2 text-left">Service</th>
//             <th className="px-4 py-2 text-left">Username</th>
//             <th className="px-4 py-2 text-left">Date Added</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                 Loading...
//               </td>
//             </tr>
//           ) : data.length > 0 ? (
//             data.map((item) => (
//               <tr key={item.integrationID} className="border-t">
//                 <td className="px-4 py-2">{item.service}</td>
//                 <td className="px-4 py-2">{item.username}</td>
//                 <td className="px-4 py-2">
//                   {format(new Date(item.created_at), "yyyy-MM-dd")}
//                 </td>
//                 <td className="px-4 py-2 space-x-2">
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     onClick={() => {
//                       setSelectedDrive(item);
//                       fetchFolderContents(item.integrationID);
//                     }}
//                   >
//                     Select Folder
//                   </button>
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDeleteDrive(item.integrationID)}
//                   >
//                     <FaRegTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                 No drive integrations found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar title="Data Sources" />
//       <div className="flex flex-1 flex-col p-4 bg-[#f4f4f4]">
//         <div className="flex justify-between mb-4">
//           <div>Connected Data Sources</div>
//           <div className="text-white font-semi-bold py-2 px-4 rounded-lg border flex items-center gap-2 shadow bg-[#E58A13]">
//             <Link
//               href="/connectDataSources"
//               className=" flex justify-end items-end"
//             >
//               Add Source
//             </Link>
//           </div>
//         </div>
//         <div className="flex mb-4 space-x-4">
//           <button
//             className={`px-4 py-2 ${
//               activeTab === "files" ? "bg-[#1D1D1D] text-white" : "bg-gray-200"
//             } rounded`}
//             onClick={() => setActiveTab("files")}
//           >
//             Files
//           </button>
//           <button
//             className={`px-4 py-2 ${
//               activeTab === "drive" ? "bg-[#1D1D1D] text-white" : "bg-gray-200"
//             } rounded`}
//             onClick={() => setActiveTab("drive")}
//           >
//             Drive
//           </button>
//           <button
//             className={`px-4 py-2 ${
//               activeTab === "database"
//                 ? "bg-[#1D1D1D] text-white"
//                 : "bg-gray-200"
//             } rounded`}
//             onClick={() => setActiveTab("database")}
//           >
//             Database
//           </button>
//         </div>
//         {activeTab === "files" && renderFilesTable(files)}
//         {activeTab === "drive" && renderDriveTable(drive)}
//         {activeTab === "database" && (
//           <div className="text-center text-gray-500">
//             No database integrations found.
//           </div>
//         )}
//       </div>

//       {showFolderModal && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white rounded p-6 w-full max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Select Folders</h2>
//             <ul className="max-h-60 overflow-y-auto">
//               {folders.map((folder) => (
//                 <li
//                   key={folder.id}
//                   className={`cursor-pointer p-2 ${
//                     selectedFolders.some((f) => f.id === folder.id)
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-800"
//                   } rounded mb-2`}
//                   onClick={() => handleSelectFolder(folder)}
//                 >
//                   {folder.name}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                 onClick={() => setShowFolderModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={handleSendSelectedFolder}
//               >
//                 Select
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataSourceTable;
