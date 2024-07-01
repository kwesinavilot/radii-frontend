// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState, ChangeEvent } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// interface Folder {
//   folderID: string;
//   name: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

// interface FileItem {
//   lastUpdated: string;
//   dateAdded: string;
//   status: string;
//   fileID: string;
//   name: string;
//   type: string;
//   size: number;
//   created_at: string;
// }

// const DataSourceTable: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentFolder = useSelector(
//     (state: RootState) => state.navigation.currentFolder
//   );

//   const [folders, setFolders] = useState<Folder[]>([]);
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [currentFolderName, setCurrentFolderName] = useState<string>("");
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   useEffect(() => {
//     const fetchFolders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://backend.getradii.com/datasources/folders/",
//           generateAxiosConfig()
//         );
//         setFolders(response.data);
//       } catch (error) {
//         console.error("Error fetching folders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolders();
//   }, [currentFolder]);

//   const handleFolderClick = async (folderID: string, folderName: string) => {
//     dispatch(setCurrentFolder(folderID));
//     setCurrentFolderName(folderName);
//     try {
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
//         generateAxiosConfig()
//       );
//       setFiles(response.data || []);
//     } catch (error) {
//       console.error(`Error fetching files for folder ${folderID}:`, error);
//       setFiles([]);
//     }
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       toast.error("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile as Blob, selectedFile.name);

//     try {
//       await axios.post(
//         "https://backend.getradii.com/datasources/static/",
//         formData,
//         generateAxiosConfig()
//       );

//       toast.success("File uploaded successfully");
//       setSelectedFile(null);
//       setShowUploadModal(false);
//       handleFolderClick(currentFolder, currentFolderName);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       toast.error("File upload failed");
//     }
//   };

//   const openDeleteModal = (folderID: string) => {
//     setFolderToDelete(folderID);
//     setShowDeleteModal(true);
//   };

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false);
//     setFolderToDelete(null);
//   };

//   const handleDeleteFolder = async () => {
//     if (!folderToDelete) return;

//     try {
//       await axios.delete(
//         `https://backend.getradii.com/datasources/folders/${folderToDelete}/`,
//         generateAxiosConfig()
//       );

//       setFolders((prevFolders) =>
//         prevFolders.filter((folder) => folder.folderID !== folderToDelete)
//       );

//       closeDeleteModal();
//       toast.success("Folder deleted successfully");
//     } catch (error) {
//       console.error(`Error deleting folder ${folderToDelete}:`, error);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">{currentFolderName}</h2>
//           <div className="flex justify-between gap-2">
//             <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
//               <Link href="/insight">Explore Insight</Link>
//             </button>
//             <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//               <FaPlus />
//               <Link href="/connectDataSources"> Add Source</Link>
//             </button>
//           </div>
//         </div>

//         <div>
//           {currentFolder === "All Sources" ? (
//             <div>
//               <p className="text-sm text-gray-500 mb-4">
//                 Radii Hosted Documents
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-left">Source</th>
//                       <th className="px-4 py-2 text-left">Created</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {folders.map((folder) => (
//                       <tr
//                         key={folder.folderID}
//                         className="border-t cursor-pointer"
//                       >
//                         <td
//                           className="px-4 py-2 flex items-center cursor-pointer"
//                           onClick={() =>
//                             handleFolderClick(folder.folderID, folder.name)
//                           }
//                         >
//                           <MdFolder className="mr-2" />
//                           {folder.name}
//                         </td>
//                         <td className="px-4 py-2">{folder.created_at}</td>
//                         <td className="px-4 py-2">
//                           <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                             Ready for use
//                           </span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <button
//                             onClick={() => openDeleteModal(folder.folderID)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <FaRegTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <button
//                 onClick={() => {
//                   dispatch(setCurrentFolder("All Sources"));
//                   setCurrentFolderName("All Sources");
//                 }}
//                 className="text-[#038C7F] mb-4"
//               >
//                 &larr; Back to All Sources
//               </button>
//               <p className="text-sm text-gray-500 mb-4">
//                 Here are the files in {currentFolderName}
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-[#1D1D1D] text-white">
//                       <th className="px-4 py-2 text-left">Type</th>
//                       <th className="px-4 py-2 text-left">Title</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Date Added</th>
//                       <th className="px-4 py-2 text-left">Last Updated</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(files) && files.length > 0 ? (
//                       files.map((file) => (
//                         <tr key={file.fileID} className="border-t">
//                           <td className="px-4 py-2">{file.type}</td>
//                           <td className="px-4 py-2">{file.name}</td>
//                           <td className="px-4 py-2">{file.status}</td>
//                           <td className="px-4 py-2">{file.dateAdded}</td>
//                           <td className="px-4 py-2">{file.lastUpdated}</td>
//                           <td className="px-4 py-2">
//                             <button className="text-red-600 hover:text-red-800">
//                               <FaRegTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-4 py-2 text-center text-gray-500"
//                         >
//                           No files found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//               <button
//                 onClick={() => setShowUploadModal(true)}
//                 className="mt-4 px-4 py-2 text-white bg-[#038C7F] rounded hover:bg-[#33867e]"
//               >
//                 Add More Files
//               </button>
//             </div>
//           )}
//         </div>

//         {showDeleteModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50">
//               <h2 className="text-xl font-semibold mb-4">
//                 Delete Folder and Files
//               </h2>
//               <p className="text-lg mb-4">
//                 Are you sure you want to delete this folder and its files?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleDeleteFolder}
//                   className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
//                 >
//                   Yes, Delete
//                 </button>
//                 <button
//                   onClick={closeDeleteModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showUploadModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50 ">
//               <h2 className="text-xl font-semibold mb-4">Upload File</h2>
//               <input
//                 type="file"
//                 accept=".pdf,.docx,.csv"
//                 onChange={handleFileChange}
//                 className="mb-4"
//               />
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleFileUpload}
//                   className="px-4 py-2 bg-[#038C7F] text-white rounded mr-2 hover:bg-[#33867e]"
//                 >
//                   Upload
//                 </button>
//                 <button
//                   onClick={() => setShowUploadModal(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState, ChangeEvent } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// interface Folder {
//   folderID: string;
//   name: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

// interface FileItem {
//   lastUpdated: string;
//   dateAdded: string;
//   status: string;
//   fileID: string;
//   name: string;
//   type: string;
//   size: number;
//   created_at: string;
// }

// const DataSourceTable: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentFolder = useSelector(
//     (state: RootState) => state.navigation.currentFolder
//   );

//   const [folders, setFolders] = useState<Folder[]>([]);
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [currentFolderName, setCurrentFolderName] = useState<string>("");
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   useEffect(() => {
//     const fetchFolders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://backend.getradii.com/datasources/folders/",
//           generateAxiosConfig()
//         );
//         setFolders(response.data);
//       } catch (error) {
//         console.error("Error fetching folders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolders();
//   }, [currentFolder]);

//   const handleFolderClick = async (folderID: string, folderName: string) => {
//     dispatch(setCurrentFolder(folderID));
//     setCurrentFolderName(folderName);
//     try {
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
//         generateAxiosConfig()
//       );
//       setFiles(response.data || []);
//     } catch (error) {
//       console.error(`Error fetching files for folder ${folderID}:`, error);
//       setFiles([]);
//     }
//   };

//   // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//   //   if (event.target.files && event.target.files.length > 0) {
//   //     setSelectedFile(event.target.files[0]);
//   //   }
//   // };

//   // const handleFileUpload = async () => {
//   //   if (!selectedFile) {
//   //     toast.error("No file selected");
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   formData.append("file", selectedFile as Blob, selectedFile.name);

//   //   try {
//   //     const uploadResponse = await axios.post(
//   //       "https://backend.getradii.com/datasources/static/",
//   //       formData,
//   //       generateAxiosConfig()
//   //     );

//   //     const fileSource = uploadResponse.data.file_url; // Assuming the response contains a file URL

//   //     await axios.post(
//   //       `https://backend.getradii.com/datasources/folders/${currentFolder}/upload`,
//   //       {
//   //         type: "URL",
//   //         source: fileSource,
//   //       },
//   //       generateAxiosConfig()
//   //     );

//   //     toast.success("File uploaded successfully");
//   //     setSelectedFile(null);
//   //     setShowUploadModal(false);
//   //     handleFolderClick(currentFolder, currentFolderName);
//   //   } catch (error) {
//   //     console.error("Error uploading file:", error);
//   //     toast.error("File upload failed");
//   //   }
//   // };

//   const handleFileUpload = async (folderID: string) => {
//     console.log("Folder ID:", folderID);
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile as Blob, selectedFile.name);
//       formData.append("folderID", folderID);
//       formData.append("type", "file");
//       formData.append("source", selectedFile.name);

//       try {
//         const response = await axios.post(
//           "https://backend.getradii.com/datasources/static/",
//           formData,
//           generateAxiosConfig()
//         );
//         console.log("File uploaded:", response.data);
//         toast.success("File uploaded successfully!");
//         setShowUploadModal(false);
//         handleFolderClick(folderID, currentFolderName);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//         toast.error("Error uploading file");
//       }
//     } else {
//       toast.error("No file selected");
//     }
//   };

//   const openDeleteModal = (folderID: string) => {
//     setFolderToDelete(folderID);
//     setShowDeleteModal(true);
//   };

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false);
//     setFolderToDelete(null);
//   };

//   const handleDeleteFolder = async () => {
//     if (!folderToDelete) return;

//     try {
//       await axios.delete(
//         `https://backend.getradii.com/datasources/folders/${folderToDelete}/`,
//         generateAxiosConfig()
//       );

//       setFolders((prevFolders) =>
//         prevFolders.filter((folder) => folder.folderID !== folderToDelete)
//       );

//       closeDeleteModal();
//       toast.success("Folder deleted successfully");
//     } catch (error) {
//       console.error(`Error deleting folder ${folderToDelete}:`, error);
//     }
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">{currentFolderName}</h2>
//           <div className="flex justify-between gap-2">
//             <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
//               <Link href="/insight">Explore Insight</Link>
//             </button>
//             <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//               <FaPlus />
//               <Link href="/connectDataSources"> Add Source</Link>
//             </button>
//           </div>
//         </div>

//         <div>
//           {currentFolder === "All Sources" ? (
//             <div>
//               <p className="text-sm text-gray-500 mb-4">
//                 Radii Hosted Documents
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-left">Source</th>
//                       <th className="px-4 py-2 text-left">Created</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {folders.map((folder) => (
//                       <tr
//                         key={folder.folderID}
//                         className="border-t cursor-pointer"
//                       >
//                         <td
//                           className="px-4 py-2 flex items-center cursor-pointer"
//                           onClick={() =>
//                             handleFolderClick(folder.folderID, folder.name)
//                           }
//                         >
//                           <MdFolder className="mr-2" />
//                           {folder.name}
//                         </td>
//                         <td className="px-4 py-2">{folder.created_at}</td>
//                         <td className="px-4 py-2">
//                           <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                             Ready for use
//                           </span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <button
//                             onClick={() => openDeleteModal(folder.folderID)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <FaRegTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <button
//                 onClick={() => {
//                   dispatch(setCurrentFolder("All Sources"));
//                   setCurrentFolderName("All Sources");
//                 }}
//                 className="text-[#038C7F] mb-4"
//               >
//                 &larr; Back to All Sources
//               </button>
//               <p className="text-sm text-gray-500 mb-4">
//                 Here are the files in {currentFolderName}
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-[#1D1D1D] text-white">
//                       <th className="px-4 py-2 text-left">Type</th>
//                       <th className="px-4 py-2 text-left">Title</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Date Added</th>
//                       <th className="px-4 py-2 text-left">Last Updated</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(files) && files.length > 0 ? (
//                       files.map((file) => (
//                         <tr key={file.fileID} className="border-t">
//                           <td className="px-4 py-2">{file.type}</td>
//                           <td className="px-4 py-2">{file.name}</td>
//                           <td className="px-4 py-2">{file.status}</td>
//                           <td className="px-4 py-2">{file.dateAdded}</td>
//                           <td className="px-4 py-2">{file.lastUpdated}</td>
//                           <td className="px-4 py-2">
//                             <button className="text-red-600 hover:text-red-800">
//                               <FaRegTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-4 py-2 text-center text-gray-500"
//                         >
//                           No files found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//               <button
//                 onClick={() => setShowUploadModal(true)}
//                 className="mt-4 px-4 py-2 text-white bg-[#038C7F] rounded hover:bg-[#33867e]"
//               >
//                 Add More Files
//               </button>
//             </div>
//           )}
//         </div>
//         {showDeleteModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50">
//               <h2 className="text-xl font-semibold mb-4">
//                 Delete Folder and Files
//               </h2>
//               <p className="text-lg mb-4">
//                 Are you sure you want to delete this folder and its files?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleDeleteFolder}
//                   className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
//                 >
//                   Yes, Delete
//                 </button>
//                 <button
//                   onClick={closeDeleteModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showUploadModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50 ">
//               <h2 className="text-xl font-semibold mb-4">Upload File</h2>
//               <input
//                 type="file"
//                 accept=".pdf,.docx,.csv"
//                 onChange={handleFileChange}
//                 className="mb-4"
//               />
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => handleFileUpload(currentFolder)}
//                   className="px-4 py-2 bg-[#038C7F] text-white rounded mr-2 hover:bg-[#33867e]"
//                 >
//                   Upload
//                 </button>
//                 <button
//                   onClick={() => setShowUploadModal(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState, ChangeEvent } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// interface Folder {
//   folderID: string;
//   name: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

// interface FileItem {
//   lastUpdated: string;
//   dateAdded: string;
//   status: string;
//   fileID: string;
//   name: string;
//   type: string;
//   size: number;
//   created_at: string;
// }

// const DataSourceTable: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentFolder = useSelector(
//     (state: RootState) => state.navigation.currentFolder
//   );

//   const [folders, setFolders] = useState<Folder[]>([]);
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [currentFolderName, setCurrentFolderName] = useState<string>("");
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   useEffect(() => {
//     const fetchFolders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://backend.getradii.com/datasources/folders/",
//           generateAxiosConfig()
//         );
//         setFolders(response.data);
//       } catch (error) {
//         console.error("Error fetching folders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolders();
//   }, [currentFolder]);

//   const handleFolderClick = async (folderID: string, folderName: string) => {
//     dispatch(setCurrentFolder(folderID));
//     setCurrentFolderName(folderName);
//     try {
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
//         // "https://backend.getradii.com/datasources/folders/{folderID}/files/",
//         generateAxiosConfig()
//       );
//       setFiles(response.data || []);
//       console.log("Files:", response.data);
//     } catch (error) {
//       console.error(`Error fetching files for folder ${folderID}:`, error);
//       console.error("Error fetching files:", error);
//       setFiles([]);
//     }
//   };

//   const handleFileUpload = async (folderID: string) => {
//     if (!selectedFile) {
//       toast.error("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile as Blob, selectedFile.name);
//     formData.append("folderID", folderID);
//     formData.append("type", "file");
//     formData.append("source", selectedFile.name);

//     try {
//       const response = await axios.post(
//         "https://backend.getradii.com/datasources/static/",
//         formData,
//         generateAxiosConfig()
//       );
//       console.log("File uploaded:", response.data);
//       toast.success("File uploaded successfully!");
//       setShowUploadModal(false);
//       setSelectedFile(null);
//       await handleFolderClick(folderID, currentFolderName);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       toast.error("Error uploading file");
//     }
//   };

//   const openDeleteModal = (folderID: string) => {
//     setFolderToDelete(folderID);
//     setShowDeleteModal(true);
//   };

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false);
//     setFolderToDelete(null);
//   };

//   const handleDeleteFolder = async () => {
//     if (!folderToDelete) return;

//     try {
//       await axios.delete(
//         `https://backend.getradii.com/datasources/folders/${folderToDelete}/`,
//         generateAxiosConfig()
//       );

//       setFolders((prevFolders) =>
//         prevFolders.filter((folder) => folder.folderID !== folderToDelete)
//       );

//       closeDeleteModal();
//       toast.success("Folder deleted successfully");
//     } catch (error) {
//       console.error(`Error deleting folder ${folderToDelete}:`, error);
//     }
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">{currentFolderName}</h2>
//           <div className="flex justify-between gap-2">
//             <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
//               <Link href="/insight">Explore Insight</Link>
//             </button>
//             <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//               <FaPlus />
//               <Link href="/connectDataSources"> Add Source</Link>
//             </button>
//           </div>
//         </div>

//         <div>
//           {currentFolder === "All Sources" ? (
//             <div>
//               <p className="text-sm text-gray-500 mb-4">
//                 Radii Hosted Documents
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-left">Source</th>
//                       <th className="px-4 py-2 text-left">Created</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {folders.map((folder) => (
//                       <tr
//                         key={folder.folderID}
//                         className="border-t cursor-pointer"
//                       >
//                         <td
//                           className="px-4 py-2 flex items-center cursor-pointer"
//                           onClick={() =>
//                             handleFolderClick(folder.folderID, folder.name)
//                           }
//                         >
//                           <MdFolder className="mr-2" />
//                           {folder.name}
//                         </td>
//                         <td className="px-4 py-2">{folder.created_at}</td>
//                         <td className="px-4 py-2">
//                           <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                             Ready for use
//                           </span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <button
//                             onClick={() => openDeleteModal(folder.folderID)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <FaRegTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <button
//                 onClick={() => {
//                   dispatch(setCurrentFolder("All Sources"));
//                   setCurrentFolderName("All Sources");
//                 }}
//                 className="text-[#038C7F] mb-4"
//               >
//                 &larr; Back to All Sources
//               </button>
//               <p className="text-sm text-gray-500 mb-4">
//                 Here are the files in {currentFolderName}
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-[#1D1D1D] text-white">
//                       <th className="px-4 py-2 text-left">Type</th>
//                       <th className="px-4 py-2 text-left">Title</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Date Added</th>
//                       <th className="px-4 py-2 text-left">Last Updated</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(files) && files.length > 0 ? (
//                       files.map((file) => (
//                         <tr key={file.fileID} className="border-t">
//                           <td className="px-4 py-2">{file.type}</td>
//                           <td className="px-4 py-2">{file.name}</td>
//                           <td className="px-4 py-2">{file.status}</td>
//                           <td className="px-4 py-2">{file.dateAdded}</td>
//                           <td className="px-4 py-2">{file.lastUpdated}</td>
//                           <td className="px-4 py-2">
//                             <button className="text-red-600 hover:text-red-800">
//                               <FaRegTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan={6}
//                           className="px-4 py-2 text-center text-gray-500"
//                         >
//                           No files found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//               <button
//                 onClick={() => setShowUploadModal(true)}
//                 className="mt-4 px-4 py-2 text-white bg-[#038C7F] rounded hover:bg-[#33867e]"
//               >
//                 Add Files
//               </button>
//             </div>
//           )}
//         </div>
//         {showDeleteModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50">
//               <h2 className="text-xl font-semibold mb-4">
//                 Delete Folder and Files
//               </h2>
//               <p className="text-lg mb-4">
//                 Are you sure you want to delete this folder and its files?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleDeleteFolder}
//                   className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
//                 >
//                   Yes, Delete
//                 </button>
//                 <button
//                   onClick={closeDeleteModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showUploadModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50 ">
//               <h2 className="text-xl font-semibold mb-4">Upload File</h2>
//               <input
//                 type="file"
//                 accept=".pdf,.docx,.csv"
//                 onChange={handleFileChange}
//                 className="mb-4"
//               />
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => handleFileUpload(currentFolder)}
//                   className="px-4 py-2 bg-[#038C7F] text-white rounded mr-2 hover:bg-[#33867e]"
//                 >
//                   Upload
//                 </button>
//                 <button
//                   onClick={() => setShowUploadModal(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState, ChangeEvent } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// interface Folder {
//   folderID: string;
//   name: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

// interface FileItem {
//   sourceID: string;
//   type: string;
//   name: string;
//   source: string;
//   description: string | null;
//   created_at: string;
// }

// const DataSourceTable: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentFolder = useSelector(
//     (state: RootState) => state.navigation.currentFolder
//   );

//   const [folders, setFolders] = useState<Folder[]>([]);
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [currentFolderName, setCurrentFolderName] = useState<string>("");
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   useEffect(() => {
//     const fetchFolders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://backend.getradii.com/datasources/folders/",
//           generateAxiosConfig()
//         );
//         setFolders(response.data);
//       } catch (error) {
//         console.error("Error fetching folders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolders();
//   }, [currentFolder]);

//   const handleFileUpload = async (folderID: string) => {
//     if (!selectedFile) {
//       toast.error("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile as Blob, selectedFile.name);
//     formData.append("folderID", folderID);
//     formData.append("type", "file");
//     formData.append("source", selectedFile.name);

//     try {
//       const response = await axios.post(
//         "https://backend.getradii.com/datasources/static/",
//         formData,
//         generateAxiosConfig()
//       );
//       console.log("File uploaded:", response.data);
//       toast.success("File uploaded successfully!");
//       setShowUploadModal(false);
//       setSelectedFile(null);
//       await handleFolderClick(folderID, currentFolderName);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       toast.error("Error uploading file");
//     }
//   };

//   const handleFolderClick = async (folderID: string, folderName: string) => {
//     dispatch(setCurrentFolder(folderID));
//     setCurrentFolderName(folderName);
//     try {
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
//         generateAxiosConfig()
//       );
//       console.log("Files Response:", response.data);
//       setFiles(response.data.files || []);
//       console.log("Files:", response.data.files);
//     } catch (error) {
//       console.error(`Error fetching files for folder ${folderID}:`, error);
//       console.error("Error fetching files:", error);
//       setFiles([]);
//     }
//   };

//   const openDeleteModal = (folderID: string) => {
//     setFolderToDelete(folderID);
//     setShowDeleteModal(true);
//   };

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false);
//     setFolderToDelete(null);
//   };

//   const handleDeleteFolder = async () => {
//     if (!folderToDelete) return;

//     try {
//       await axios.delete(
//         `https://backend.getradii.com/datasources/folders/${folderToDelete}/`,
//         generateAxiosConfig()
//       );

//       setFolders((prevFolders) =>
//         prevFolders.filter((folder) => folder.folderID !== folderToDelete)
//       );

//       closeDeleteModal();
//       toast.success("Folder deleted successfully");
//     } catch (error) {
//       console.error(`Error deleting folder ${folderToDelete}:`, error);
//     }
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">{currentFolderName}</h2>
//           <div className="flex justify-between gap-2">
//             <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
//               <Link href="/insight">Explore Insight</Link>
//             </button>
//             <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//               <FaPlus />
//               <Link href="/connectDataSources"> Add Source</Link>
//             </button>
//           </div>
//         </div>

//         <div>
//           {currentFolder === "All Sources" ? (
//             <div>
//               <p className="text-sm text-gray-500 mb-4">
//                 Radii Hosted Documents
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-left">Source</th>
//                       <th className="px-4 py-2 text-left">Created</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {folders.map((folder) => (
//                       <tr
//                         key={folder.folderID}
//                         className="border-t cursor-pointer"
//                       >
//                         <td
//                           className="px-4 py-2 flex items-center cursor-pointer"
//                           onClick={() =>
//                             handleFolderClick(folder.folderID, folder.name)
//                           }
//                         >
//                           <MdFolder className="mr-2" />
//                           {folder.name}
//                         </td>
//                         <td className="px-4 py-2">{folder.created_at}</td>
//                         <td className="px-4 py-2">
//                           <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                             Ready for use
//                           </span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <button
//                             onClick={() => openDeleteModal(folder.folderID)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <FaRegTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <button
//                 onClick={() => {
//                   dispatch(setCurrentFolder("All Sources"));
//                   setCurrentFolderName("All Sources");
//                 }}
//                 className="text-[#038C7F] mb-4"
//               >
//                 &larr; Back to All Sources
//               </button>
//               <p className="text-sm text-gray-500 mb-4">
//                 Here are the files in {currentFolderName}
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-[#1D1D1D] text-white">
//                       <th className="px-4 py-2 text-left">Type</th>
//                       <th className="px-4 py-2 text-left">Title</th>
//                       <th className="px-4 py-2 text-left">Date Added</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(files) && files.length > 0 ? (
//                       files.map((file) => (
//                         <tr key={file.sourceID} className="border-t">
//                           <td className="px-4 py-2">{file.type}</td>
//                           <td className="px-4 py-2">{file.name}</td>
//                           <td className="px-4 py-2">{file.created_at}</td>
//                           <td className="px-4 py-2">
//                             <button className="text-red-600 hover:text-red-800">
//                               <FaRegTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan={4}
//                           className="px-4 py-2 text-center text-gray-500"
//                         >
//                           No files found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//               <button
//                 onClick={() => setShowUploadModal(true)}
//                 className="mt-4 px-4 py-2 text-white bg-[#038C7F] rounded hover:bg-[#33867e]"
//               >
//                 Add Files
//               </button>
//             </div>
//           )}
//         </div>
//         {showDeleteModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50">
//               <h2 className="text-xl font-semibold mb-4">
//                 Delete Folder and Files
//               </h2>
//               <p className="text-lg mb-4">
//                 Are you sure you want to delete this folder and its files?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleDeleteFolder}
//                   className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
//                 >
//                   Yes, Delete
//                 </button>
//                 <button
//                   onClick={closeDeleteModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showUploadModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50 ">
//               <h2 className="text-xl font-semibold mb-4">Upload File</h2>
//               <input
//                 type="file"
//                 accept=".pdf,.docx,.csv"
//                 onChange={handleFileChange}
//                 className="mb-4"
//               />
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => handleFileUpload(currentFolder)}
//                   className="px-4 py-2 bg-[#038C7F] text-white rounded mr-2 hover:bg-[#33867e]"
//                 >
//                   Upload
//                 </button>
//                 <button
//                   onClick={() => setShowUploadModal(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

// interface Folder {
//   folderID: string;
//   name: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

// interface FileItem {
//   sourceID: string;
//   type: string;
//   name: string;
//   source: string;
//   description: string | null;
//   created_at: string;
// }

// const DataSourceTable: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentFolder = useSelector(
//     (state: RootState) => state.navigation.currentFolder
//   );

//   const [folders, setFolders] = useState<Folder[]>([]);
//   const [files, setFiles] = useState<FileItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [currentFolderName, setCurrentFolderName] = useState<string>("");
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   useEffect(() => {
//     const fetchFolders = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://backend.getradii.com/datasources/folders/",
//           generateAxiosConfig()
//         );
//         setFolders(response.data);
//       } catch (error) {
//         console.error("Error fetching folders:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFolders();
//   }, [currentFolder]);

//   const handleFileUpload = async (event: FormEvent) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       toast.error("No file selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);
//     formData.append("folderID", currentFolder);
//     formData.append("type", "file");
//     formData.append("source", selectedFile.name);

//     console.log("File being sent:", selectedFile);

//     try {
// const response = await axios.post(
//         "https://backend.getradii.com/datasources/static/",
//         formData,
//         generateAxiosConfig()
//       );
//       console.log("File uploaded:", response.data);
//       toast.success("File uploaded successfully!");
//       setShowUploadModal(false);
//       setSelectedFile(null);
//       await handleFolderClick(currentFolder, currentFolderName);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       toast.error("Error uploading file");
//     }
//   };

//   const handleFolderClick = async (folderID: string, folderName: string) => {
//     dispatch(setCurrentFolder(folderID));
//     setCurrentFolderName(folderName);
//     try {
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
//         generateAxiosConfig()
//       );
//       console.log("Files Response:", response.data);
//       setFiles(response.data.files || []);
//     } catch (error) {
//       console.error(`Error fetching files for folder ${folderID}:`, error);
//       setFiles([]);
//     }
//   };

//   const openDeleteModal = (folderID: string) => {
//     setFolderToDelete(folderID);
//     setShowDeleteModal(true);
//   };

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false);
//     setFolderToDelete(null);
//   };

//   const handleDeleteFolder = async () => {
//     if (!folderToDelete) return;

//     try {
//       await axios.delete(
//         `https://backend.getradii.com/datasources/folders/${folderToDelete}/`,
//         generateAxiosConfig()
//       );

//       setFolders((prevFolders) =>
//         prevFolders.filter((folder) => folder.folderID !== folderToDelete)
//       );

//       closeDeleteModal();
//       toast.success("Folder deleted successfully");
//     } catch (error) {
//       console.error(`Error deleting folder ${folderToDelete}:`, error);
//     }
//   };

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">{currentFolderName}</h2>
//           <div className="flex justify-between gap-2">
//             <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
//               <Link href="/insight">Explore Insight</Link>
//             </button>
//             <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//               <FaPlus />
//               <Link href="/connectDataSources"> Add Source</Link>
//             </button>
//           </div>
//         </div>

//         <div>
//           {currentFolder === "All Sources" ? (
//             <div>
//               <p className="text-sm text-gray-500 mb-4">
//                 Radii Hosted Documents
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-left">Source</th>
//                       <th className="px-4 py-2 text-left">Created</th>
//                       <th className="px-4 py-2 text-left">Status</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {folders.map((folder) => (
//                       <tr
//                         key={folder.folderID}
//                         className="border-t cursor-pointer"
//                       >
//                         <td
//                           className="px-4 py-2 flex items-center cursor-pointer"
//                           onClick={() =>
//                             handleFolderClick(folder.folderID, folder.name)
//                           }
//                         >
//                           <MdFolder className="mr-2" />
//                           {folder.name}
//                         </td>
//                         <td className="px-4 py-2">{folder.created_at}</td>
//                         <td className="px-4 py-2">
//                           <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                             Ready for use
//                           </span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <button
//                             onClick={() => openDeleteModal(folder.folderID)}
//                             className="text-red-600 hover:text-red-800"
//                           >
//                             <FaRegTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <button
//                 onClick={() => {
//                   dispatch(setCurrentFolder("All Sources"));
//                   setCurrentFolderName("All Sources");
//                 }}
//                 className="text-[#038C7F] mb-4"
//               >
//                 &larr; Back to All Sources
//               </button>
//               <p className="text-sm text-gray-500 mb-4">
//                 Here are the files in {currentFolderName}
//               </p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto">
//                   <thead>
//                     <tr className="bg-[#1D1D1D] text-white">
//                       <th className="px-4 py-2 text-left">Type</th>
//                       <th className="px-4 py-2 text-left">Title</th>
//                       <th className="px-4 py-2 text-left">Date Added</th>
//                       <th className="px-4 py-2 text-left">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array.isArray(files) && files.length > 0 ? (
//                       files.map((file) => (
//                         <tr key={file.sourceID} className="border-t">
//                           <td className="px-4 py-2">{file.type}</td>
//                           <td className="px-4 py-2">{file.name}</td>
//                           <td className="px-4 py-2">{file.created_at}</td>
//                           <td className="px-4 py-2">
//                             <button className="text-red-600 hover:text-red-800">
//                               <FaRegTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan={4}
//                           className="px-4 py-2 text-center text-gray-500"
//                         >
//                           No files found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//               <button
//                 onClick={() => setShowUploadModal(true)}
//                 className="mt-4 px-4 py-2 text-white bg-[#038C7F] rounded hover:bg-[#33867e]"
//               >
//                 Add Files
//               </button>
//             </div>
//           )}
//         </div>
//         {showDeleteModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50">
//               <h2 className="text-xl font-semibold mb-4">
//                 Delete Folder and Files
//               </h2>
//               <p className="text-lg mb-4">
//                 Are you sure you want to delete this folder and its files?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleDeleteFolder}
//                   className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
//                 >
//                   Yes, Delete
//                 </button>
//                 <button
//                   onClick={closeDeleteModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showUploadModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//             <div className="bg-white rounded-lg p-8 shadow-lg z-50">
//               <h2 className="text-xl font-semibold mb-4">Upload File</h2>
//               <form onSubmit={handleFileUpload}>
//                 <input
//                   type="file"
//                   accept=".pdf,.docx,.csv"
//                   onChange={handleFileChange}
//                   className="mb-4"
//                 />
//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-[#038C7F] text-white rounded mr-2 hover:bg-[#33867e]"
//                   >
//                     Upload
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setShowUploadModal(false)}
//                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
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
import { useSelector } from "react-redux";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";

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

const DataSourceTable: React.FC = () => {
  const [dataSources, setDataSources] = useState([]);
  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);
  console.log(orgID);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && orgID) {
      fetchDataSources();
    }
  }, [token, orgID]);

  console.log(orgID);

  const fetchDataSources = async () => {
    try {
      const response = await axios.get(
        `https://backend.getradii.com/datasources/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            orgID: orgID,
          },
        }
      );
      setDataSources(response.data);
    } catch (error) {
      console.error("Error fetching data sources:", error);
      toast.error("Error fetching data sources");
    }
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Data Source" icon="" />
      <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Data Sources</h2>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
            <Link href="/connectDataSources">Add Source</Link>
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-4">Radii Hosted Documents</p>
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
                    <td
                      colSpan={4}
                      className="px-4 py-2 text-center text-gray-500"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : files.length > 0 ? (
                  files.map((file) => (
                    <tr key={file.sourceID} className="border-t">
                      <td className="px-4 py-2">{file.type}</td>
                      <td className="px-4 py-2">{file.name}</td>
                      <td className="px-4 py-2">{file.created_at}</td>
                      <td className="px-4 py-2">
                        <button className="text-red-600 hover:text-red-800">
                          <FaRegTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-2 text-center text-gray-500"
                    >
                      No files found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSourceTable;
