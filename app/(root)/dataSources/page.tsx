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

// Working with the Drive
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
//   const [folders, setFolders] = useState<FolderItem[]>([]);
//   const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
//   const [showFolderModal, setShowFolderModal] = useState(false);
//   const [selectedFolders, setSelectedFolders] = useState<FolderItem[]>([]);
//   const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);
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
//       const response = await axios.get<{
//         folders: FolderItem[];
//         files: any[];
//         current_folderID: string;
//       }>(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${integrationID}/browse/${folderID}/`,
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//           },
//         }
//       );
//       console.log("Folder contents fetched successfully:", response.data);
//       setFolders(response.data.folders);
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

//   // const handleSelectFolder = (folder: FolderItem) => {
//   //   setSelectedFolders((prev) => [...prev, folder]);
//   // };
//   const handleSelectFolder = (folder: FolderItem) => {
//     setSelectedFolders((prev) => {
//       const isSelected = prev.some((f) => f.id === folder.id);
//       if (isSelected) {
//         return prev.filter((f) => f.id !== folder.id);
//       } else {
//         return [...prev, folder];
//       }
//     });
//   };

//   const handleSendSelectedFolders = async () => {
//     try {
//       const response = await axios.post(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${selectedDrive?.integrationID}/selectDriveFolder/`,
//         { folders: selectedFolders },
//         generateAxiosConfig()
//       );
//       console.log("Folders selected successfully:", response.data);
//       toast.success("Folders selected successfully");
//       setConnectedFolders(response.data);
//       setShowFolderModal(false);
//       setSelectedFolders([]);
//     } catch (error) {
//       console.error("Error selecting folders:", error);
//       toast.error("Error selecting folders");
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
//     onFolderClick: (integrationID: string) => void
//   ) => (
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
//                 <td className="px-4 py-2 flex space-x-4">
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDeleteDrive(item.integrationID)}
//                   >
//                     <FaRegTrashAlt />
//                   </button>
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     onClick={() => {
//                       setSelectedDrive(item);
//                       onFolderClick(item.integrationID);
//                     }}
//                   >
//                     Select Folder
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

//   const renderDatabaseTable = (data: FileItem[]) => (
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
//                 No database integrations found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <>
//       <Navbar title="Data Sources" />
//       <div className="p-6">
//         <div className="flex space-x-4 mb-4">
//           <button
//             className={`py-2 px-4 rounded ${
//               activeTab === "files"
//                 ? "bg-[#1D1D1D] text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//             onClick={() => setActiveTab("files")}
//           >
//             Files
//           </button>
//           <button
//             className={`py-2 px-4 rounded ${
//               activeTab === "drive"
//                 ? "bg-[#1D1D1D] text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//             onClick={() => setActiveTab("drive")}
//           >
//             Drive
//           </button>
//           <button
//             className={`py-2 px-4 rounded ${
//               activeTab === "database"
//                 ? "bg-[#1D1D1D] text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//             onClick={() => setActiveTab("database")}
//           >
//             Database
//           </button>
//           <button
//             className={`py-2 px-4 rounded ${
//               activeTab === "connectedFolders"
//                 ? "bg-[#1D1D1D] text-white"
//                 : "bg-gray-200 text-gray-800"
//             }`}
//             onClick={() => setActiveTab("connectedFolders")}
//           >
//             Connected Folders
//           </button>
//         </div>
//         {activeTab === "files" && renderFilesTable(files)}
//         {activeTab === "drive" && renderDriveTable(drive, fetchFolderContents)}
//         {activeTab === "database" && renderDatabaseTable(database)}
//         {activeTab === "connectedFolders" && (
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="bg-[#1D1D1D] text-white">
//                   <th className="px-4 py-2 text-left">Folder Name</th>
//                   <th className="px-4 py-2 text-left">Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {connectedFolders.length > 0 ? (
//                   connectedFolders.map((folder) => (
//                     <tr key={folder.id} className="border-t">
//                       <td className="px-4 py-2">{folder.name}</td>
//                       <td className="px-4 py-2">{folder.type}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan={2}
//                       className="px-4 py-2 text-center text-gray-500"
//                     >
//                       No connected folders found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {showFolderModal && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//             <div className="bg-white rounded p-6 w-2/3">
//               <h2 className="text-lg font-semibold mb-4">Select Folders</h2>
//               <div className="overflow-y-auto max-h-96">
//                 {folders.map((folder) => (
//                   <div
//                     key={folder.id}
//                     className="flex items-center space-x-4 mb-2"
//                   >
//                     <span>{folder.name}</span>
//                     <button
//                       className="py-1 px-3 bg-blue-600 text-white rounded"
//                       onClick={() => handleSelectFolder(folder)}
//                     >
//                       Select
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-end mt-4">
//                 <button
//                   className="py-2 px-4 bg-gray-500 text-white rounded mr-2"
//                   onClick={() => setShowFolderModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="py-2 px-4 bg-blue-600 text-white rounded"
//                   onClick={handleSendSelectedFolders}
//                 >
//                   Send Selected Folders
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default DataSourceTable;

// import Navbar from "@/app/component/NavBar";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
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
//   const [folders, setFolders] = useState<FolderItem[]>([]);
//   const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
//   const [showFolderModal, setShowFolderModal] = useState(false);
//   const [selectedFolders, setSelectedFolders] = useState<FolderItem[]>([]);
//   const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);
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
//       handleError(error, "Error fetching files");
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
//       handleError(error, "Error fetching drive data");
//     }
//   };

//   const fetchDatabaseData = async () => {
//     // try {
//     //   if (!orgID) {
//     //     throw new Error("orgID is required");
//     //   }
//     //   const response = await axios.get(
//     //     `https://lobster-app-9ufhi.ondigitalocean.app/datasources/database/${orgID}/`,
//     //     {
//     //       ...generateAxiosConfig(),
//     //       params: {
//     //         orgID: orgID,
//     //       },
//     //     }
//     //   );
//     //   setDatabase(response.data);
//     //   console.log("Database data fetched successfully:", response.data);
//     // } catch (error) {
//     //   handleError(error, "Error fetching database data");
//     // }
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
//     setSelectedFolders((prev) =>
//       prev.some((f) => f.id === folder.id)
//         ? prev.filter((f) => f.id !== folder.id)
//         : [...prev, folder]
//     );
//   };

//   // const handleSendSelectedFolders = async () => {
//   //   try {
//   //     if (!selectedDrive || selectedFolders.length === 0) {
//   //       throw new Error("No drive or folders selected");
//   //     }
//   //     const response = await axios.post(
//   //       `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${selectedDrive.integrationID}/selectDriveFolder/`,
//   //       { folders: selectedFolders.map(({ id, name }) => ({ id, name })) },
//   //       generateAxiosConfig()
//   //     );
//   //     console.log("Folders selected successfully:", response.data);
//   //     toast.success("Folders selected successfully");
//   //     setConnectedFolders(response.data);
//   //     setShowFolderModal(false);
//   //     setSelectedFolders([]);
//   //   } catch (error) {
//   //     handleError(error, "Error selecting folders");
//   //   }
//   // };

//   console.log(
//     "This is the orgID:",
//     orgID,
//     "This is the token:",
//     generateAxiosConfig()
//   );
//   const handleSendSelectedFolders = async () => {
//     try {
//       if (!selectedDrive || selectedFolders.length === 0) {
//         throw new Error("No drive or folders selected");
//       }

//       const response = await axios.post(
//         "https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/{integrationID}/selectDriveFolder/",
//         {
//           ...generateAxiosConfig(),
//           params: {
//             orgID: orgID,
//             integrationID: selectedDrive.integrationID,
//             name: selectedFolders.map((folder) => folder.name).join(","),
//           },
//         }
//       );

//       console.log("Folders selected successfully:", response.data);
//       toast.success("Folders selected successfully");
//       setConnectedFolders(response.data);
//       setShowFolderModal(false);
//       setSelectedFolders([]);
//     } catch (error) {
//       handleError(error, "Error selecting folders");
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
//                 No data available
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
//                 <td className="px-4 py-2">
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDeleteDrive(item.integrationID)}
//                   >
//                     <FaRegTrashAlt />
//                   </button>
//                   <button
//                     className="ml-2 text-blue-600 hover:text-blue-800"
//                     onClick={() => {
//                       setSelectedDrive(item);
//                       fetchFolderContents(item.integrationID);
//                     }}
//                   >
//                     Select Folders
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderDatabaseTable = (data: FileItem[]) => (
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
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

// const renderFolderModal = () => (
//   // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//   //   <div className="w-11/12 max-w-4xl p-6 bg-white rounded-md">
//   //     <h2 className="text-xl font-semibold mb-4">Select Folders</h2>
//   //     <div className="flex flex-col space-y-2">
//   //       {folders.map((folder) => (
//   //         <div
//   //           key={folder.id}
//   //           className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded cursor-pointer"
//   //           onClick={() => handleSelectFolder(folder)}
//   //         >
//   //           <span>{folder.name}</span>
//   //           <input
//   //             type="checkbox"
//   //             checked={selectedFolders.some((f) => f.id === folder.id)}
//   //             onChange={() => handleSelectFolder(folder)}
//   //           />
//   //         </div>
//   //       ))}
//   //     </div>
//   //     <div className="mt-4 flex justify-end space-x-4">
//   //       <button
//   //         className="px-4 py-2 bg-red-500 text-white rounded"
//   //         onClick={() => {
//   //           setShowFolderModal(false);
//   //           setSelectedFolders([]);
//   //         }}
//   //       >
//   //         Cancel
//   //       </button>
//   //       <button
//   //         className="px-4 py-2 bg-green-500 text-white rounded"
//   //         onClick={handleSendSelectedFolders}
//   //       >
//   //         Select
//   //       </button>
//   //     </div>
//   //   </div>
//   // </div>
// <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//   <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 overflow-y-auto h-96">
//     <h2 className="text-xl font-bold mb-4">Select Folders</h2>
//     <div className="overflow-y-auto h-64 mb-4">
//       {folders.map((folder) => (
//         <div
//           key={folder.id}
//           className="flex items-center justify-between px-4 py-2 border-b"
//         >
//           <span>{folder.name}</span>
//           <button
//             className={`px-2 py-1 rounded ${
//               selectedFolders.some((f) => f.id === folder.id)
//                 ? "bg-red-500 text-white"
//                 : "bg-gray-200"
//             }`}
//             onClick={() => handleSelectFolder(folder)}
//           >
//             {selectedFolders.some((f) => f.id === folder.id)
//               ? "Deselect"
//               : "Select"}
//           </button>
//         </div>
//       ))}
//     </div>
//     <div className="flex justify-end">
//       <button
//         className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
//         onClick={handleSendSelectedFolders}
//       >
//         Save Selection
//       </button>
//       <button
//         className="px-4 py-2 bg-gray-600 text-white rounded"
//         onClick={() => setShowFolderModal(false)}
//       >
//         Cancel
//       </button>
//     </div>
//   </div>
// </div>
// );

//   return (
//     <div>
//       <Navbar title="Data Sources" />
//       <div className="container mx-auto py-8">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-2xl font-bold">Data Sources</h1>
//           <Link
//             href="/dataSources/add"
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Add Data Source
//           </Link>
// //         </div>
// //         <div className="flex space-x-4 mb-4">
// //           <button
// //             className={`px-4 py-2 ${
// //               activeTab === "files" ? "bg-blue-500 text-white" : "bg-gray-200"
// //             } rounded`}
// //             onClick={() => setActiveTab("files")}
// //           >
// //             Files
// //           </button>
// //           <button
// //             className={`px-4 py-2 ${
// //               activeTab === "drive" ? "bg-blue-500 text-white" : "bg-gray-200"
// //             } rounded`}
// //             onClick={() => setActiveTab("drive")}
// //           >
// //             Google Drive
// //           </button>
// //           <button
// //             className={`px-4 py-2 ${
// //               activeTab === "database"
// //                 ? "bg-blue-500 text-white"
// //                 : "bg-gray-200"
// //             } rounded`}
// //             onClick={() => setActiveTab("database")}
// //           >
// //             Database
// //           </button>
// //         </div>
// //         {activeTab === "files" && renderFilesTable(files)}
// //         {activeTab === "drive" && renderDriveTable(drive)}
// //         {activeTab === "database" && renderDatabaseTable(database)}
// //       </div>
// //       {showFolderModal && renderFolderModal()}
// //     </div>
// //   );
// // };

// // export default DataSourceTable;

// import Navbar from "@/app/component/NavBar";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
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
//   const [folders, setFolders] = useState<FolderItem[]>([]);
//   const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
//   const [showFolderModal, setShowFolderModal] = useState(false);
//   const [selectedFolders, setSelectedFolders] = useState<FolderItem[]>([]);
//   const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);
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
//       handleError(error, "Error fetching files");
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
//       handleError(error, "Error fetching drive data");
//     }
//   };

//   const fetchDatabaseData = async () => {
//     // try {
//     //   if (!orgID) {
//     //     throw new Error("orgID is required");
//     //   }
//     //   const response = await axios.get(
//     //     `https://lobster-app-9ufhi.ondigitalocean.app/datasources/database/${orgID}/`,
//     //     {
//     //       ...generateAxiosConfig(),
//     //       params: {
//     //         orgID: orgID,
//     //       },
//     //     }
//     //   );
//     //   setDatabase(response.data);
//     //   console.log("Database data fetched successfully:", response.data);
//     // } catch (error) {
//     //   handleError(error, "Error fetching database data");
//     // }
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
//     setSelectedFolders((prev) =>
//       prev.some((f) => f.id === folder.id)
//         ? prev.filter((f) => f.id !== folder.id)
//         : [...prev, folder]
//     );
//   };

//   const handleSendSelectedFolders = async () => {
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
//             <th className="px-4 py-2 text-left">Description</th>
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
//                 <td className="px-4 py-2">{item.description}</td>
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
//                 No data available
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
//             <th className="px-4 py-2 text-left">Account</th>
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
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => handleDeleteDrive(item.integrationID)}
//                   >
//                     <FaRegTrashAlt />
//                   </button>
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     onClick={() => {
//                       setSelectedDrive(item);
//                       fetchFolderContents(item.integrationID);
//                     }}
//                   >
//                     Select Folders
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderFoldersModal = () => (
//     <div
//       className={`fixed inset-0 flex items-center justify-center z-50 ${
//         showFolderModal ? "" : "hidden"
//       }`}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative bg-white p-8 rounded-lg shadow-lg z-50 w-3/4 max-h-[80%] overflow-y-auto">
//         <h2 className="text-2xl mb-4">Select Folders</h2>
//         <ul>
//           {folders.map((folder) => (
//             <li
//               key={folder.id}
//               className={`p-2 cursor-pointer ${
//                 selectedFolders.some((f) => f.id === folder.id)
//                   ? "bg-blue-200"
//                   : ""
//               }`}
//               onClick={() => handleSelectFolder(folder)}
//             >
//               {folder.name}
//             </li>
//           ))}
//         </ul>
//         <div className="flex justify-end mt-4">
//           <button
//             className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//             onClick={() => setShowFolderModal(false)}
//           >
//             Cancel
//           </button>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleSendSelectedFolders}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar title="Data Sources" />

//       <div className="container mx-auto p-4 flex-grow">
//         <h1 className="text-3xl font-semibold mb-6">Manage Data Sources</h1>
//         <div className="flex justify-between mb-4">
//           <div>
//             <button
//               className={`px-4 py-2 ${
//                 activeTab === "files"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-300 text-gray-700"
//               } rounded-l`}
//               onClick={() => setActiveTab("files")}
//             >
//               Files
//             </button>
//             <button
//               className={`px-4 py-2 ${
//                 activeTab === "drive"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-300 text-gray-700"
//               }`}
//               onClick={() => setActiveTab("drive")}
//             >
//               Drive
//             </button>
//             <button
//               className={`px-4 py-2 ${
//                 activeTab === "database"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-300 text-gray-700"
//               } rounded-r`}
//               onClick={() => setActiveTab("database")}
//             >
//               Database
//             </button>
//           </div>
//           <Link href="/datasource/add">
//             <button className="bg-green-500 text-white px-4 py-2 rounded">
//               Add Data Source
//             </button>
//           </Link>
//         </div>

//         <div className="bg-white shadow-md rounded p-4">
//           {activeTab === "files" && renderFilesTable(files)}
//           {activeTab === "drive" && renderDriveTable(drive)}
//           {activeTab === "database" && renderFilesTable(database)}
//         </div>
//       </div>

//       {showFolderModal && renderFoldersModal()}
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
import axios, { AxiosError } from "axios";
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
  const [folders, setFolders] = useState<FolderItem[]>([]);
  const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<FolderItem | null>(null);
  const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);
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
        "https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/",
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
      handleError(error, "Error fetching files");
    }
  };

  const fetchDriveData = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get<DriveItem[]>(
        "https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/",
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
      handleError(error, "Error fetching drive data");
    }
  };

  const fetchDatabaseData = async () => {
    // Placeholder for database fetching logic
  };

  const fetchFolderContents = async (
    integrationID: string,
    folderID: string = "root"
  ) => {
    try {
      const config = generateAxiosConfig();
      console.log("Axios config: ", config);

      const response = await axios.get<{
        folders: FolderItem[];
        files: any[];
        current_folderID: string;
      }>(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${integrationID}/browse/${folderID}/`,
        {
          ...config,
          params: {
            orgID: orgID,
          },
        }
      );
      console.log("Folder contents fetched successfully:", response.data);
      setFolders(response.data.folders);
      setShowFolderModal(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error response: ", error.response);
      }
      handleError(error, "Error fetching folder contents");
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
      handleError(error, "Error deleting file");
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
      handleError(error, "Error deleting drive integration");
    }
  };

  const handleSelectFolder = (folder: FolderItem) => {
    setSelectedFolder(folder);
  };

  const handleSendSelectedFolder = async () => {
    try {
      if (!selectedDrive) {
        throw new Error("No drive selected");
      }

      if (!selectedFolder) {
        throw new Error("No folder selected");
      }

      console.log("Selected Drive:", selectedDrive);
      console.log("Selected Folder:", selectedFolder);

      const payload = {
        id: selectedFolder.id,
        name: selectedFolder.name,
      };

      console.log("Payload to be sent:", payload);

      const response = await axios.post(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${selectedDrive.integrationID}/selectDriveFolder/`,
        payload,
        generateAxiosConfig()
      );

      console.log("Folder selected successfully:", response.data);
      toast.success("Folder selected successfully");
      setConnectedFolders([response.data]);
      setShowFolderModal(false);
      setSelectedFolder(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response);
        if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Error selecting folder");
        }
      } else {
        console.error("Error selecting folder", error);
        toast.error("Error selecting folder");
      }
    }
  };

  const handleError = (error: unknown, message: string) => {
    if (axios.isAxiosError(error)) {
      toast.error(`${message}: ${error.response?.data.error || error.message}`);
    } else {
      toast.error(`${message}: ${String(error)}`);
    }
    console.error(message, error);
  };

  const renderFilesTable = (data: FileItem[]) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Source</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item) => (
              <tr key={item.sourceID} className="border-t">
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.source}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">
                  {format(new Date(item.created_at), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2 space-x-2">
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
              <td colSpan={6} className="px-4 py-2 text-center text-gray-500">
                No files found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  const renderDriveTable = (data: DriveItem[]) => (
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
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      setSelectedDrive(item);
                      fetchFolderContents(item.integrationID);
                    }}
                  >
                    Select Folder
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteDrive(item.integrationID)}
                  >
                    <FaRegTrashAlt />
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar title="Data Sources" />
      <div className="flex flex-1 flex-col p-4 bg-[#f4f4f4]">
        <div className="flex justify-between mb-4">
          <div>Connected Data Sources</div>
          <div className="text-white font-semi-bold py-2 px-4  rounded-lg border flex items-center gap-2 shadow  bg-[#E58A13]">
            <Link
              href="/connectDataSources"
              className=" flex justify-end items-end  "
            >
              Add Source
            </Link>
          </div>
        </div>
        <div className="flex mb-4 space-x-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "files" ? "bg-[#1D1D1D] text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("files")}
          >
            Files
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "drive" ? "bg-[#1D1D1D] text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("drive")}
          >
            Drive
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "database"
                ? "bg-[#1D1D1D] text-white"
                : "bg-gray-200"
            } rounded`}
            onClick={() => setActiveTab("database")}
          >
            Database
          </button>
        </div>
        {activeTab === "files" && renderFilesTable(files)}
        {activeTab === "drive" && renderDriveTable(drive)}
        {activeTab === "database" && (
          <div className="text-center text-gray-500">
            No database integrations found.
          </div>
        )}
      </div>

      {showFolderModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Select a Folder</h2>
            <ul className="max-h-60 overflow-y-auto">
              {folders.map((folder) => (
                <li
                  key={folder.id}
                  className={`cursor-pointer p-2 ${
                    selectedFolder?.id === folder.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  } rounded mb-2`}
                  onClick={() => handleSelectFolder(folder)}
                >
                  {folder.name}
                </li>
              ))}
            </ul>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowFolderModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSendSelectedFolder}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataSourceTable;
