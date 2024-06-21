// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Navbar from "@/app/component/NavBar";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// const ConnectDataSource: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
//   const [folderTitle, setFolderTitle] = useState("");
//   const [folderDescription, setFolderDescription] = useState("");
//   const [loading, setLoading] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsCreateFolderModalOpen(false);
//     setFolderTitle("");
//     setFolderDescription("");
//   };

//   const openCreateFolderModal = () => {
//     setIsCreateFolderModalOpen(true);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFolderTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFolderDescription(e.target.value);
//   };

// const handleDataSourceClick = (source: string) => {
//   switch (source) {
//     case "docs":
//       console.log("Open system document explorer for docs");
//       break;
//     case "pdf":
//       console.log("Open system document explorer for pdf");
//       break;
//     case "csv":
//       console.log("Open system document explorer for csv");
//       break;
//     case "postgres":
//       console.log("Connect to PostgreSQL");
//       break;
//     case "mysql":
//       console.log("Connect to MySQL");
//       break;
//     case "snowflakes":
//       console.log("Connect to Snowflakes");
//       break;
//     case "drive":
//       console.log("Connect to Google Drive");
//       break;
//     case "qb":
//       console.log("Connect to Quickbooks");
//       break;
//     case "airtable":
//       console.log("Connect to Airtable");
//       break;
//     default:
//       break;
//   }
//   openModal();
// };

//   const isSubmitDisabled = !(folderTitle && folderDescription) || loading;

//   const handleCreateFolder = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://backend.getradii.com/datasources/folders/",
//         {
//           title: folderTitle,
//           description: folderDescription,
//         },
//         generateAxiosConfig()
//       );
//       console.log("Folder created:", response.data);
//       closeModal();
//     } catch (error) {
//       console.error("Error creating folder:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-gray-100">
//       <Navbar
//         title="Connect a Data Source"
//         icon={<MdOutlineArrowBackIosNew />}
//       />

// <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//   <div className="w-4/6 p-4">
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//       <div className="col-span-1 sm:col-span-3">
//         <h2 className="text-[18px] font-bold mb-4">Databases</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("postgres")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/postgres.png"
//                 alt="postgres"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>PostgreSQL</span>
//             </div>
//           </div>
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("mysql")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/mysql.png"
//                 alt="mysql"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>MySQL</span>
//             </div>
//           </div>
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("snowflakes")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/snowflakes.png"
//                 alt="snowflakes"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>Snowflakes</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="col-span-1 sm:col-span-3">
//         <h2 className="text-[18px] font-bold mb-4">Radii Hosted</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("csv")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/csv.png"
//                 alt="csv"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>CSV</span>
//             </div>
//           </div>
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("pdf")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/pdf2.png"
//                 alt="pdf"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>PDF</span>
//             </div>
//           </div>
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("docs")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/docs.png"
//                 alt="docs"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>DOCS</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="col-span-1 sm:col-span-3">
//         <h2 className="text-[18px] font-bold mb-4">Others</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("drive")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/drive.png"
//                 alt="drive"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>Google Drive</span>
//             </div>
//           </div>
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("qb")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/qb.png"
//                 alt="qb"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>Quickbooks</span>
//             </div>
//           </div>
//           <div
//             className="dataSourceBtn"
//             onClick={() => handleDataSourceClick("airtable")}
//           >
//             <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//               <Image
//                 src="/airtable.png"
//                 alt="airtable"
//                 width={32}
//                 height={32}
//                 className="mr-2"
//               />
//               <span>Airtable</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Select a Folder</h2>
//               <button
//                 className="text-gray-600 hover:text-gray-800"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <button
//                 className="text-blue-500 hover:text-blue-700"
//                 onClick={openCreateFolderModal}
//               >
//                 Create New Folder
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isCreateFolderModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Create a Folder</h2>
//               <button
//                 className="text-gray-600 hover:text-gray-800"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 placeholder="Folder Title"
//                 value={folderTitle}
//                 onChange={handleTitleChange}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Description"
//                 value={folderDescription}
//                 onChange={handleDescriptionChange}
//                 className="border p-2 rounded"
//               />
//               <button
//                 className={`p-2 rounded ${
//                   isSubmitDisabled
//                     ? "bg-gray-400"
//                     : "bg-orange-500 hover:bg-orange-700"
//                 } text-white`}
//                 disabled={isSubmitDisabled}
//                 onClick={handleCreateFolder}
//               >
//                 {loading ? "Creating..." : "Create and import document"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConnectDataSource;
// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Navbar from "@/app/component/NavBar";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// const ConnectDataSource: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
//   const [folderTitle, setFolderTitle] = useState("");
//   const [folderDescription, setFolderDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [files, setFiles] = useState<FileList | null>(null);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsCreateFolderModalOpen(false);
//     setFolderTitle("");
//     setFolderDescription("");
//   };

//   const openCreateFolderModal = () => {
//     setIsCreateFolderModalOpen(true);
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFolderTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFolderDescription(e.target.value);
//   };

//   const handleDataSourceClick = (source: string) => {
//     switch (source) {
//       case "docs":
//         console.log("Open system document explorer for docs");
//         break;
//       case "pdf":
//         console.log("Open system document explorer for pdf");
//         break;
//       case "csv":
//         console.log("Open system document explorer for csv");
//         break;
//       case "postgres":
//         console.log("Connect to PostgreSQL");
//         break;
//       case "mysql":
//         console.log("Connect to MySQL");
//         break;
//       case "snowflakes":
//         console.log("Connect to Snowflakes");
//         break;
//       case "drive":
//         console.log("Connect to Google Drive");
//         break;
//       case "qb":
//         console.log("Connect to Quickbooks");
//         break;
//       case "airtable":
//         console.log("Connect to Airtable");
//         break;
//       default:
//         break;
//     }
//     openModal();
//   };

//   const isSubmitDisabled = !(folderTitle && folderDescription) || loading;

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFiles(e.target.files);
//   };

//   const handleCreateFolder = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://backend.getradii.com/datasources/folders/",
//         {
//           title: folderTitle,
//           description: folderDescription,
//         },
//         generateAxiosConfig()
//       );
//       console.log("Folder created:", response.data);
//       if (files && files.length > 0) {
//         await handleFileUpload(response.data.folderID);
//       }
//       closeModal();
//     } catch (error) {
//       console.error("Error creating folder:", error);
//       setLoading(false);
//     }
//   };

//   const handleFileUpload = async (folderID: string) => {
//     if (files) {
//       const formData = new FormData();
//       Array.from(files).forEach((file) => {
//         formData.append("files", file);
//       });
//       formData.append("folderID", folderID);

//       try {
//         const response = await axios.post(
//           "https://backend.getradii.com/datasources/static/",
//           formData,
//           generateAxiosConfig()
//         );
//         console.log("Files uploaded:", response.data);
//       } catch (error) {
//         console.error("Error uploading files:", error);
//       }
//     }
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-gray-100">
//       <Navbar
//         title="Connect a Data Source"
//         icon={<MdOutlineArrowBackIosNew />}
//       />

//       <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//         <div className="w-4/6 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Databases</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("postgres")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/postgres.png"
//                       alt="postgres"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>PostgreSQL</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("mysql")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/mysql.png"
//                       alt="mysql"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>MySQL</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("snowflakes")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/snowflakes.png"
//                       alt="snowflakes"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Snowflakes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Radii Hosted</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("csv")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/csv.png"
//                       alt="csv"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>CSV</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("pdf")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/pdf2.png"
//                       alt="pdf"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>PDF</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("docs")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/docs.png"
//                       alt="docs"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>DOCS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Others</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("drive")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/drive.png"
//                       alt="drive"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Google Drive</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("qb")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/qb.png"
//                       alt="qb"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Quickbooks</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("airtable")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/airtable.png"
//                       alt="airtable"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Airtable</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Select a Folder</h2>
//               <button
//                 className="text-gray-600 hover:text-gray-800"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <button
//                 className="text-blue-500 hover:text-blue-700"
//                 onClick={openCreateFolderModal}
//               >
//                 Create New Folder
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isCreateFolderModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Create a Folder</h2>
//               <button
//                 className="text-gray-600 hover:text-gray-800"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 placeholder="Folder Title"
//                 value={folderTitle}
//                 onChange={handleTitleChange}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Description"
//                 value={folderDescription}
//                 onChange={handleDescriptionChange}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 className="border p-2 rounded"
//               />
//               <button
//                 className={`p-2 rounded ${
//                   isSubmitDisabled
//                     ? "bg-gray-400"
//                     : "bg-orange-500 hover:bg-orange-700"
//                 } text-white`}
//                 disabled={isSubmitDisabled}
//                 onClick={handleCreateFolder}
//               >
//                 {loading ? "Creating..." : "Create and Upload Documents"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConnectDataSource;

// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Navbar from "@/app/component/NavBar";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { useRouter } from "next/navigation";

// const ConnectDataSource: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [folderTitle, setFolderTitle] = useState("");
//   const [folderDescription, setFolderDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [files, setFiles] = useState<FileList | null>(null);
//   const [selectedSource, setSelectedSource] = useState<string | null>(null);
//   const router = useRouter();

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFolderTitle("");
//     setFolderDescription("");
//   };

//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFolderTitle(e.target.value);
//   };

//   const handleDescriptionChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFolderDescription(e.target.value);
//   };

//   const handleDataSourceClick = (source: string) => {
//     setSelectedSource(source);
//     openModal();
//   };

//   const isSubmitDisabled = !(folderTitle && folderDescription) || loading;

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFiles(e.target.files);
//   };

//   const handleCreateFolder = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://backend.getradii.com/datasources/folders/",
//         {
//           title: folderTitle,
//           description: folderDescription,
//         },
//         generateAxiosConfig()
//       );
//       console.log("Folder created:", response.data);
//       const folderID = response.data.folderID;
//       console.log("Folder ID:", folderID);
//       if (files && files.length > 0) {
//         await handleFileUpload(folderID);
//       }
//       closeModal();
//       router.push(`/dataSources`);
//     } catch (error) {
//       console.error("Error creating folder:", error);
//       setLoading(false);
//     }
//   };

//   const handleFileUpload = async (folderID: string) => {
//     if (files) {
//       const formData = new FormData();
//       Array.from(files).forEach((file) => {
//         formData.append("files", file);
//       });
//       formData.append("folderID", folderID);
//       formData.append("type", "file");
//       formData.append("source", selectedSource || "");

//       try {
//         const response = await axios.post(
//           "https://backend.getradii.com/datasources/static/",
//           formData,
//           generateAxiosConfig()
//         );
//         console.log("Files uploaded:", response.data);
//         closeModal();
//         router.push(`/dataSources`);
//       } catch (error) {
//         console.error("Error uploading files:", error);
//       }
//     }
//   };

//   const renderModalContent = () => {
//     switch (selectedSource) {
//       case "docs":
//       case "pdf":
//       case "csv":
//         return (
//           <div>
//             <h2 className="text-lg font-semibold">
//               Upload {selectedSource.toUpperCase()} Files
//             </h2>
//             <input
//               type="file"
//               multiple
//               accept={
//                 selectedSource === "docs"
//                   ? ".doc,.docx"
//                   : selectedSource === "pdf"
//                   ? ".pdf"
//                   : ".csv"
//               }
//               onChange={handleFileChange}
//               className="border p-2 rounded"
//             />
//             <button
//               className={`p-2 mt-4 rounded ${
//                 isSubmitDisabled
//                   ? "bg-gray-400"
//                   : "bg-orange-500 hover:bg-orange-700"
//               } text-white`}
//               disabled={isSubmitDisabled}
//               onClick={handleCreateFolder}
//             >
//               {loading
//                 ? "Uploading..."
//                 : `Upload ${selectedSource.toUpperCase()} Files`}
//             </button>
//           </div>
//         );
//       case "postgres":
//       case "mysql":
//       case "snowflakes":
//       case "drive":
//       case "qb":
//       case "airtable":
//         return <div>Connect to {selectedSource}</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-gray-100">
//       <Navbar
//         title="Connect a Data Source"
//         icon={<MdOutlineArrowBackIosNew />}
//       />

//       <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//         <div className="w-4/6 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Databases</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("postgres")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/postgres.png"
//                       alt="postgres"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>PostgreSQL</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("mysql")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/mysql.png"
//                       alt="mysql"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>MySQL</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("snowflakes")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/snowflakes.png"
//                       alt="snowflakes"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Snowflakes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Radii Hosted</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("csv")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/csv.png"
//                       alt="csv"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>CSV</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("pdf")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/pdf2.png"
//                       alt="pdf"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>PDF</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("docs")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/docs.png"
//                       alt="docs"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>DOCS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Others</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("drive")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/drive.png"
//                       alt="drive"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Google Drive</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("qb")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/qb.png"
//                       alt="qb"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>QuickBooks</span>
//                   </div>
//                 </div>
//                 <div
//                   className="dataSourceBtn"
//                   onClick={() => handleDataSourceClick("airtable")}
//                 >
//                   <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
//                     <Image
//                       src="/airtable.png"
//                       alt="airtable"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     <span>Airtable</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3 mt-10 mb-4">
//               <button
//                 className="text-orange-500 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white rounded p-2"
//                 onClick={() => router.push("/")}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Create Folder</h2>
//             <input
//               type="text"
//               placeholder="Folder Title"
//               value={folderTitle}
//               onChange={handleTitleChange}
//               className="border p-2 mb-4 rounded w-full"
//             />
//             <textarea
//               placeholder="Folder Description"
//               value={folderDescription}
//               onChange={handleDescriptionChange}
//               className="border p-2 mb-4 rounded w-full"
//             />
//             {renderModalContent()}
//             <button
//               className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConnectDataSource;

"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/app/component/NavBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConnectDataSource: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderTitle, setFolderTitle] = useState("");
  const [folderDescription, setFolderDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [folderID, setFolderID] = useState<string | null>(null);
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFolderTitle("");
    setFolderDescription("");
    setFiles(null);
    setFolderID(null);
    setSelectedSource(null);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFolderDescription(e.target.value);
  };

  const handleDataSourceClick = (source: string) => {
    setSelectedSource(source);
    openModal();
  };

  const isSubmitDisabled = !(folderTitle && folderDescription) || loading;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleCreateFolder = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.getradii.com/datasources/folders/",
        {
          title: folderTitle,
          description: folderDescription,
        },
        generateAxiosConfig()
      );

      // Assuming the response data is an array and we want the last created folder
      const folders = response.data;
      if (!Array.isArray(folders) || folders.length === 0) {
        throw new Error("Folder creation response is not valid");
      }

      const createdFolder = folders[folders.length - 1];
      const createdFolderID = createdFolder.folderID;

      console.log("Folder created:", createdFolder);
      console.log("Folder ID:", createdFolderID);

      setFolderID(createdFolderID);

      try {
        const folderDetailsResponse = await axios.get(
          `https://backend.getradii.com/datasources/folders/${createdFolderID}/`,
          generateAxiosConfig()
        );
        console.log("Folder details:", folderDetailsResponse.data);
      } catch (error) {
        console.error("Error retrieving folder details:", error);
        toast.error("Error retrieving folder details");
      }

      if (files && files.length > 0) {
        await handleFileUpload(createdFolderID);
      }

      toast.success("Folder created successfully!");
      closeModal();
      router.push(`/dataSources`);
    } catch (error) {
      console.error("Error creating folder:", error);
      toast.error("Error creating folder");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (folderID: string) => {
    console.log("Folder ID:", folderID);
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });
      formData.append("folderID", folderID);
      formData.append("type", "file");
      formData.append("source", selectedSource || "");

      try {
        const response = await axios.post(
          "https://backend.getradii.com/datasources/static/",
          formData,
          generateAxiosConfig()
        );
        console.log("Files uploaded:", response.data);
        toast.success("Files uploaded successfully!");
        closeModal();
        router.push(`/dataSources`);
      } catch (error) {
        console.error("Error uploading files:", error);
        toast.error("Error uploading files");
      }
    }
  };

  const renderModalContent = () => {
    switch (selectedSource) {
      case "docs":
      case "pdf":
      case "csv":
        return (
          <div>
            <h2 className="text-lg font-semibold">
              Upload {selectedSource.toUpperCase()} Files
            </h2>
            <input
              type="file"
              multiple
              accept={
                selectedSource === "docs"
                  ? ".doc,.docx"
                  : selectedSource === "pdf"
                  ? ".pdf"
                  : ".csv"
              }
              onChange={handleFileChange}
              className="border p-2 rounded"
            />
            <button
              className={`p-2 mt-4 rounded ${
                isSubmitDisabled
                  ? "bg-gray-400"
                  : "bg-orange-500 hover:bg-orange-700"
              } text-white`}
              disabled={isSubmitDisabled}
              onClick={handleCreateFolder}
            >
              {loading
                ? "Uploading..."
                : `Upload ${selectedSource.toUpperCase()} Files`}
            </button>
          </div>
        );
      case "postgres":
      case "mysql":
      case "snowflakes":
      case "drive":
      case "qb":
      case "airtable":
        return <div>Connect to {selectedSource}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Navbar
        title="Connect a Data Source"
        icon={<MdOutlineArrowBackIosNew />}
      />

      <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
        <div className="w-4/6 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-1 sm:col-span-3">
              <h2 className="text-[18px] font-bold mb-4">Databases</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("postgres")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/postgres.png"
                      alt="postgres"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>PostgreSQL</span>
                  </div>
                </div>
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("mysql")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/mysql.png"
                      alt="mysql"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>MySQL</span>
                  </div>
                </div>
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("snowflakes")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/snowflakes.png"
                      alt="snowflakes"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>Snowflakes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <h2 className="text-[18px] font-bold mb-4">Radii Hosted</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("csv")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/csv.png"
                      alt="csv"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>CSV</span>
                  </div>
                </div>
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("pdf")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/pdf2.png"
                      alt="pdf"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>PDF</span>
                  </div>
                </div>
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("docs")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/docs.png"
                      alt="docs"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>DOCS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <h2 className="text-[18px] font-bold mb-4">Others</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("drive")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/drive.png"
                      alt="drive"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>Google Drive</span>
                  </div>
                </div>
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("qb")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/qb.png"
                      alt="qb"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>QuickBooks</span>
                  </div>
                </div>
                <div
                  className="dataSourceBtn"
                  onClick={() => handleDataSourceClick("airtable")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/airtable.png"
                      alt="airtable"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>Airtable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3 mt-10 mb-4">
              <button
                className="text-orange-500 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-white rounded p-2"
                onClick={() => router.push("/")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create Folder</h2>
            <input
              type="text"
              placeholder="Folder Title"
              value={folderTitle}
              onChange={handleTitleChange}
              className="border p-2 mb-4 rounded w-full"
            />
            <textarea
              placeholder="Folder Description"
              value={folderDescription}
              onChange={handleDescriptionChange}
              className="border p-2 mb-4 rounded w-full"
            />
            {renderModalContent()}
            <button
              className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ConnectDataSource;
