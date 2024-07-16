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
//   const [selectedFolder, setSelectedFolder] = useState<FolderItem | null>(null);
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
// dispatch(setIntegrationID(integrationID));
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
//     setSelectedFolder(folder);
//   };

//   const handleSendSelectedFolder = async () => {
//     try {
//       if (!selectedDrive) {
//         throw new Error("No drive selected");
//       }

//       if (!selectedFolder) {
//         throw new Error("No folder selected");
//       }

//       console.log("Selected Drive:", selectedDrive);
//       console.log("Selected Folder:", selectedFolder);

//       const payload = {
//         id: selectedFolder.id,
//         name: selectedFolder.name,
//       };

//       console.log("Payload to be sent:", payload);

//       const response = await axios.post(
//         `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${selectedDrive.integrationID}/selectDriveFolder/`,
//         payload,
//         generateAxiosConfig()
//       );

//       console.log("Folder selected successfully:", response.data);
//       toast.success("Folder selected successfully");
//       setConnectedFolders([response.data]);
//       setShowFolderModal(false);
//       setSelectedFolder(null);
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Axios error response:", error.response);
//         if (error.response?.data?.error) {
//           toast.error(error.response.data.error);
//         } else {
//           toast.error("Error selecting folder");
//         }
//       } else {
//         console.error("Error selecting folder", error);
//         toast.error("Error selecting folder");
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
//           <div className="text-white font-semi-bold py-2 px-4  rounded-lg border flex items-center gap-2 shadow  bg-[#E58A13]">
//             <Link
//               href="/connectDataSources"
//               className=" flex justify-end items-end  "
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
//             <h2 className="text-xl font-semibold mb-4">Select a Folder</h2>
//             <ul className="max-h-60 overflow-y-auto">
//               {folders.map((folder) => (
//                 <li
//                   key={folder.id}
//                   className={`cursor-pointer p-2 ${
//                     selectedFolder?.id === folder.id
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
//             <th className="px-4 py-2 text-left">Name</th>
//             <th className="px-4 py-2 text-left">Source</th>
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
//               <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
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

"use client";

import Navbar from "@/app/component/NavBar";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios, { AxiosError } from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { setIntegrationID } from "@/app/store/integrationSlice";

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
  const [selectedFolders, setSelectedFolders] = useState<FolderItem[]>([]);
  const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);
  const itemsPerPage = 10;

  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);
  const dispatch = useDispatch();

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
      dispatch(setIntegrationID(integrationID));
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
    setSelectedFolders((prevSelectedFolders) => {
      if (prevSelectedFolders.some((f) => f.id === folder.id)) {
        return prevSelectedFolders.filter((f) => f.id !== folder.id);
      } else {
        return [...prevSelectedFolders, folder];
      }
    });
  };

  const handleSendSelectedFolder = async () => {
    try {
      if (!selectedDrive) {
        throw new Error("No drive selected");
      }

      if (selectedFolders.length === 0) {
        throw new Error("No folders selected");
      }

      console.log("Selected Drive:", selectedDrive);
      console.log("Selected Folders:", selectedFolders);

      const payload = {
        folders: selectedFolders.map((folder) => ({
          id: folder.id,
          name: folder.name,
        })),
      };

      console.log("Payload to be sent:", payload);

      const response = await axios.post(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/${selectedDrive.integrationID}/selectDriveFolder/`,
        payload,
        generateAxiosConfig()
      );

      console.log("Folders selected successfully:", response.data);
      toast.success("Folders selected successfully");
      setConnectedFolders(response.data);
      setShowFolderModal(false);
      setSelectedFolders([]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response);
        if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Error selecting folders");
        }
      } else {
        console.error("Error selecting folders", error);
        toast.error("Error selecting folders");
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
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Source</th>
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
          ) : (
            data.map((item) => (
              <tr key={item.sourceID}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.source}</td>
                <td className="border px-4 py-2">
                  {format(new Date(item.created_at), "dd-MM-yyyy")}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    onClick={() => handleDeleteFile(item.sourceID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
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
          ) : (
            data.map((item) => (
              <tr key={item.integrationID}>
                <td className="border px-4 py-2">{item.service}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">
                  {format(new Date(item.created_at), "dd-MM-yyyy")}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="mr-2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
                    onClick={() => {
                      setSelectedDrive(item);
                      fetchFolderContents(item.integrationID);
                    }}
                  >
                    Browse
                  </button>
                  <button
                    className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    onClick={() => handleDeleteDrive(item.integrationID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
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
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Source</th>
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
          ) : (
            data.map((item) => (
              <tr key={item.sourceID}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.source}</td>
                <td className="border px-4 py-2">
                  {format(new Date(item.created_at), "dd-MM-yyyy")}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    onClick={() => handleDeleteFile(item.sourceID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Navbar title={"Data Sources"} />
      <div className="m-4 flex justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Data Sources Dashboard
        </h1>
        <Link
          href="/"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
      <div className="m-4">
        <div className="mb-4 flex space-x-4">
          <button
            className={`${
              activeTab === "files"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } rounded px-4 py-2`}
            onClick={() => setActiveTab("files")}
          >
            Files
          </button>
          <button
            className={`${
              activeTab === "drive"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } rounded px-4 py-2`}
            onClick={() => setActiveTab("drive")}
          >
            Drive
          </button>
          <button
            className={`${
              activeTab === "database"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } rounded px-4 py-2`}
            onClick={() => setActiveTab("database")}
          >
            Database
          </button>
        </div>
        {activeTab === "files" && renderFilesTable(files)}
        {activeTab === "drive" && renderDriveTable(drive)}
        {activeTab === "database" && renderDatabaseTable(database)}
      </div>

      {showFolderModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4">
            <h2 className="text-lg font-bold">Select Folders</h2>
            <div className="my-2">
              {folders.map((folder) => (
                <div key={folder.id} className="mb-2">
                  <input
                    type="checkbox"
                    id={folder.id}
                    checked={selectedFolders.some((f) => f.id === folder.id)}
                    onChange={() => handleSelectFolder(folder)}
                  />
                  <label htmlFor={folder.id} className="ml-2">
                    {folder.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-500 px-4 py-2 text-white"
                onClick={handleSendSelectedFolder}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 px-4 py-2 text-black"
                onClick={() => setShowFolderModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataSourceTable;
