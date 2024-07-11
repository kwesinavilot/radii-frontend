"use client";
// import Navbar from "@/app/component/NavBar";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { format } from "date-fns";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

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

// const DataSourceTable: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("files");
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [drive, setDrive] = useState<DriveItem[]>([]);
//   const [database, setDatabase] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

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
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/`,
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
//       console.error("Error fetching files:", error);
//       toast.error("Error fetching files");
//     }
//   };

//   const fetchDriveData = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get<DriveItem[]>(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/`,
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
//       console.error("Error fetching drive data:", error);
//       toast.error("Error fetching drive data");
//     }
//   };

//   const fetchDatabaseData = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/database/${orgID}/`,
//         {
//           ...generateAxiosConfig(),
//         }
//       );

//       setDatabase(response.data);
//       console.log("Database data fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching database data:", error);
//       toast.error("Error fetching database data");
//     }
//   };

//   const handleDeleteFile = async (id: string) => {
//     try {
//       const response = await axios.delete(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/${id}`,
//         generateAxiosConfig()
//       );
//       console.log("File deleted successfully:", response.data);
//       toast.success("File deleted successfully");
//       fetchDataSources();
//     } catch (error) {
//       console.error("Error deleting file:", error);
//       toast.error("Error deleting file");
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
//       console.error("Error deleting drive integration:", error);
//       toast.error("Error deleting drive integration");
//     }
//   };

//   const renderFilesTable = (data: FileItem[]) => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full table-auto">
//         <thead>
//           <tr className="bg-[#1D1D1D] text-white">
//             <th className="px-4 py-2 text-left">Type</th>
//             <th className="px-4 py-2 text-left">Title</th>
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
//               <tr key={item.sourceID} className="border-t">
//                 <td className="px-4 py-2">{item.type}</td>
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">
//                   {format(new Date(item.created_at), "yyyy-MM-dd")}
//                 </td>
//                 <td className="px-4 py-2">
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
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                 No files found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDriveTable = (
//     data: DriveItem[],
//     currentPage: number,
//     itemsPerPage: number
//   ) => {
//     const reversedData = [...data].reverse();
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = reversedData.slice(indexOfFirstItem, indexOfLastItem);

//     return (
//       <div className="overflow-x-auto h-full">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-[#1D1D1D] text-white">
//               <th className="px-4 py-2 text-left">Service</th>
//               <th className="px-4 py-2 text-left">Username</th>
//               <th className="px-4 py-2 text-left">Date Connected</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                   Loading...
//                 </td>
//               </tr>
//             ) : currentItems.length > 0 ? (
//               currentItems.map((item) => (
//                 <tr key={item.integrationID} className="border-t">
//                   <td className="px-4 py-2">{item.service}</td>
//                   <td className="px-4 py-2">{item.username}</td>
//                   <td className="px-4 py-2">
//                     {format(new Date(item.created_at), "yyyy-MM-dd")}
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="text-red-600 hover:text-red-800"
//                       onClick={() => handleDeleteDrive(item.integrationID)}
//                     >
//                       <FaRegTrashAlt />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                   No drive integrations found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         <div className="flex justify-center mt-4">
//           {Array.from(
//             { length: Math.ceil(data.length / itemsPerPage) },
//             (_, index) => (
//               <button
//                 key={index}
//                 className={`mx-1 px-3 py-1 rounded ${
//                   currentPage === index + 1
//                     ? "bg-orange-500 text-white"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
// <div className="bg-grey-bg h-screen overflow-y-auto">
// <Navbar title="Data Source" icon="" />

/* <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
  <div className="flex justify-between items-center mb-4"> */

//     <h2 className="text-xl font-semibold">Data Sources</h2>
// <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//   <Link href="/connectDataSources">Add Source</Link>
// </button>
//   </div>

// <div className="flex mb-4">
//   <button
//     className={`px-4 py-2 rounded-t-lg ${
//       activeTab === "files"
//         ? "bg-orange-500 text-white"
//         : "bg-gray-200 text-gray-600"
//     }`}
//     onClick={() => setActiveTab("files")}
//   >
//     Files
//   </button>
//   <button
//     className={`px-4 py-2 rounded-t-lg ml-2 ${
//       activeTab === "drive"
//         ? "bg-orange-500 text-white"
//         : "bg-gray-200 text-gray-600"
//     }`}
//     onClick={() => setActiveTab("drive")}
//   >
//     Drive
//   </button>
//   <button
//     className={`px-4 py-2 rounded-t-lg ml-2 ${
//       activeTab === "database"
//         ? "bg-orange-500 text-white"
//         : "bg-gray-200 text-gray-600"
//     }`}
//     onClick={() => setActiveTab("database")}
//   >
//     Database
//   </button>
// </div>

//         <div>
//           {activeTab === "files" && renderFilesTable(files)}
//           {activeTab === "drive" &&
//             renderDriveTable(drive, currentPage, itemsPerPage)}
//           {activeTab === "database" && renderFilesTable(database)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

// "use client";
// import Navbar from "@/app/component/NavBar";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { format } from "date-fns";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

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
//   const [currentPage, setCurrentPage] = useState(1);
//   const [folders, setFolders] = useState<FolderItem[]>([]);
//   const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
//   const [showFolderModal, setShowFolderModal] = useState(false);
//   const itemsPerPage = 10;

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

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
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/`,
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
//       console.error("Error fetching files:", error);
//       toast.error("Error fetching files");
//     }
//   };

//   const fetchDriveData = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get<DriveItem[]>(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/`,
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
//       console.error("Error fetching drive data:", error);
//       toast.error("Error fetching drive data");
//     }
//   };

//   const fetchDatabaseData = async () => {
//     try {
//       if (!orgID) {
//         throw new Error("orgID is required");
//       }
//       const response = await axios.get(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/database/${orgID}/`,
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//           },
//         }
//       );

//       setDatabase(response.data);
//       console.log("Database data fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching database data:", error);
//       toast.error("Error fetching database data");
//     }
//   };

//   const fetchFolderContents = async (
//     integrationID: string,
//     folderID: string = "root"
//   ) => {
//     try {
//       const response = await axios.get<FolderItem[]>(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${integrationID}/browse/${folderID}/`,
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//           },
//         }
//       );
//       console.log("Folder contents fetched successfully:", response);
//       console.log("Folder contents fetched successfully:", response.data);
//       setFolders(response.data);
//       setShowFolderModal(true);
//     } catch (error) {
//       console.error("Error fetching folder contents:", error);
//       toast.error("Error fetching folder contents");
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
//       console.error("Error deleting file:", error);
//       toast.error("Error deleting file");
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
//       console.error("Error deleting drive integration:", error);
//       toast.error("Error deleting drive integration");
//     }
//   };

//   const renderFilesTable = (data: FileItem[]) => (
//     <div className="overflow-x-auto">
//       <table className="min-w-full table-auto">
//         <thead>
//           <tr className="bg-[#1D1D1D] text-white">
//             <th className="px-4 py-2 text-left">Type</th>
//             <th className="px-4 py-2 text-left">Title</th>
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
//               <tr key={item.sourceID} className="border-t">
//                 <td className="px-4 py-2">{item.type}</td>
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">
//                   {format(new Date(item.created_at), "yyyy-MM-dd")}
//                 </td>
//                 <td className="px-4 py-2">
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
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                 No files found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDriveTable = (
//     data: DriveItem[],
//     currentPage: number,
//     itemsPerPage: number
//   ) => {
//     const reversedData = [...data].reverse();
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = reversedData.slice(indexOfFirstItem, indexOfLastItem);

//     return (
//       <div className="overflow-x-auto h-full">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-[#1D1D1D] text-white">
//               <th className="px-4 py-2 text-left">Service</th>
//               <th className="px-4 py-2 text-left">Username</th>
//               <th className="px-4 py-2 text-left">Date Connected</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                   Loading...
//                 </td>
//               </tr>
//             ) : currentItems.length > 0 ? (
//               currentItems.map((item) => (
//                 <tr key={item.integrationID} className="border-t">
//                   <td className="px-4 py-2">{item.service}</td>
//                   <td
//                     className="px-4 py-2 text-blue-500 cursor-pointer"
//                     onClick={() => {
//                       setSelectedDrive(item);
//                       fetchFolderContents(item.integrationID);
//                     }}
//                   >
//                     {item.username}
//                   </td>
//                   <td className="px-4 py-2">
//                     {format(new Date(item.created_at), "yyyy-MM-dd")}
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       className="text-red-600 hover:text-red-800"
//                       onClick={() => handleDeleteDrive(item.integrationID)}
//                     >
//                       <FaRegTrashAlt />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                   No drives found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   const renderPagination = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(drive.length / itemsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <div className="flex justify-center mt-4">
//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => setCurrentPage(number)}
//             className={`px-3 py-1 mx-1 rounded ${
//               currentPage === number
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {number}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Navbar title="Data Source" icon="" />

//       <div className="flex-grow p-6">
//         <div className="flex justify-center mb-4">
//           <div className="space-x-4">
//             <button
//               className={`${
//                 activeTab === "files" ? "bg-gray-300" : "bg-gray-200"
//               } px-4 py-2 rounded`}
//               onClick={() => setActiveTab("files")}
//             >
//               Files
//             </button>
//             <button
//               className={`${
//                 activeTab === "drive" ? "bg-gray-300" : "bg-gray-200"
//               } px-4 py-2 rounded`}
//               onClick={() => setActiveTab("drive")}
//             >
//               Drive
//             </button>
//             <button
//               className={`${
//                 activeTab === "database" ? "bg-gray-300" : "bg-gray-200"
//               } px-4 py-2 rounded`}
//               onClick={() => setActiveTab("database")}
//             >
//               Database
//             </button>
//           </div>
//         </div>

//         <div>
//           {activeTab === "files" && renderFilesTable(files)}
//           {activeTab === "drive" && (
//             <div>
//               {renderDriveTable(drive, currentPage, itemsPerPage)}
//               {renderPagination()}
//             </div>
//           )}
//           {activeTab === "database" && renderFilesTable(database)}
//         </div>

//         {showFolderModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-4 rounded-lg w-full max-w-md">
//               <h2 className="text-lg font-bold mb-4">Select a Folder</h2>
//               <ul>
//                 {folders.map((folder) => (
//                   <li
//                     key={folder.id}
//                     className="p-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => {
//                       fetchFolderContents(
//                         selectedDrive!.integrationID,
//                         folder.id
//                       );
//                     }}
//                   >
//                     {folder.name}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={() => setShowFolderModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

import Navbar from "@/app/component/NavBar";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

interface FileItem {
  sourceID: string;
  type: string;
  name: string;
  source: string;
  description: string | null;
  created_at: string;
}

interface DriveItem {
  integrationID: string;
  service: string;
  username: string;
  created_at: string;
}

interface FolderItem {
  id: string;
  name: string;
  type: string;
}

const DataSourceTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState("files");
  const [files, setFiles] = useState<FileItem[]>([]);
  const [drive, setDrive] = useState<DriveItem[]>([]);
  const [database, setDatabase] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [folders, setFolders] = useState<FolderItem[]>([]);
  const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const itemsPerPage = 10;

  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);

  useEffect(() => {
    if (token && orgID) {
      fetchDataSources();
      fetchDriveData();
      fetchDatabaseData();
    }
  }, [token, orgID]);

  const fetchDataSources = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get<FileItem[]>(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/`,
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );

      setFiles(response.data);
      console.log("Files fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
      toast.error("Error fetching files");
    }
  };

  const fetchDriveData = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get<DriveItem[]>(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/`,
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );

      setDrive(response.data);
      console.log("Drive data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching drive data:", error);
      toast.error("Error fetching drive data");
    }
  };

  const fetchDatabaseData = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/database/${orgID}/`,
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );

      setDatabase(response.data);
      console.log("Database data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching database data:", error);
      toast.error("Error fetching database data");
    }
  };

  const fetchFolderContents = async (
    integrationID: string,
    folderID: string = "root"
  ) => {
    try {
      const response = await axios.get<{
        folders: FolderItem[];
        files: any[];
        current_folderID: string;
      }>(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${integrationID}/browse/${folderID}/`,
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );
      console.log("Folder contents fetched successfully:", response.data);
      setFolders(response.data.folders);
      setShowFolderModal(true);
    } catch (error) {
      console.error("Error fetching folder contents:", error);
      toast.error("Error fetching folder contents");
    }
  };

  const handleDeleteFile = async (id: string) => {
    try {
      const response = await axios.delete(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/${id}`,
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );
      console.log("File deleted successfully:", response.data);
      toast.success("File deleted successfully");
      fetchDataSources();
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Error deleting file");
    }
  };

  const handleDeleteDrive = async (id: string) => {
    try {
      const response = await axios.delete(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${id}`,
        generateAxiosConfig()
      );
      console.log("Drive integration deleted successfully:", response.data);
      toast.success("Drive integration deleted successfully");
      fetchDriveData();
    } catch (error) {
      console.error("Error deleting drive integration:", error);
      toast.error("Error deleting drive integration");
    }
  };

  const renderFilesTable = (data: FileItem[]) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item) => (
              <tr key={item.sourceID} className="border-t">
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  {format(new Date(item.created_at), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteFile(item.sourceID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                No files found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  const renderDriveTable = (
    data: DriveItem[],
    onFolderClick: (integrationID: string) => void
  ) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Service</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item) => (
              <tr key={item.integrationID} className="border-t">
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4 py-2">{item.username}</td>
                <td className="px-4 py-2">
                  {format(new Date(item.created_at), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteDrive(item.integrationID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      setSelectedDrive(item);
                      onFolderClick(item.integrationID);
                    }}
                  >
                    Browse Folders
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                No drive integrations found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  const renderDatabaseTable = (data: FileItem[]) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item) => (
              <tr key={item.sourceID} className="border-t">
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  {format(new Date(item.created_at), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteFile(item.sourceID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                No database data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Data Source" icon="" />
      {/* <div className="flex flex-col  min-h-screen p-4 bg-gray-100"> */}
      <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold"></h2>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
            <Link href="/connectDataSources">Add Source</Link>
          </button>
        </div>
        <div className="w-full max-w-5xl ">
          <div className="p-4 border-b">
            {/* <div className="flex mt-4 space-x-4">
              <button
                className={`px-4 py-2 font-semibold border rounded ${
                  activeTab === "files"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border-blue-500"
                }`}
                onClick={() => setActiveTab("files")}
              >
                Files
              </button>
              <button
                className={`px-4 py-2 font-semibold border rounded ${
                  activeTab === "drive"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border-blue-500"
                }`}
                onClick={() => setActiveTab("drive")}
              >
                Google Drive
              </button>
              <button
                className={`px-4 py-2 font-semibold border rounded ${
                  activeTab === "database"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border-blue-500"
                }`}
                onClick={() => setActiveTab("database")}
              >
                Database
              </button>
            </div> */}
            <div className="flex mb-4">
              <button
                className={`px-4 py-2 rounded-t-lg ${
                  activeTab === "files"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("files")}
              >
                Files
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg ml-2 ${
                  activeTab === "drive"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("drive")}
              >
                Drive
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg ml-2 ${
                  activeTab === "database"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab("database")}
              >
                Database
              </button>
            </div>
          </div>
          <div className="p-4">
            {activeTab === "files" && renderFilesTable(files)}
            {activeTab === "drive" &&
              renderDriveTable(drive, fetchFolderContents)}
            {activeTab === "database" && renderDatabaseTable(database)}
          </div>
          {showFolderModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
              <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Folders in {selectedDrive?.username}'s Google Drive
                </h3>
                <div className="overflow-y-auto max-h-80">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                      className="flex items-center justify-between p-2 border-b"
                    >
                      <span>{folder.name}</span>
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() =>
                          fetchFolderContents(
                            selectedDrive!.integrationID,
                            folder.id
                          )
                        }
                      >
                        Open
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
                  onClick={() => setShowFolderModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSourceTable;
