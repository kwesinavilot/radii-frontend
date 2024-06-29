// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Navbar from "@/app/component/NavBar";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ConnectDataSource: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [folderTitle, setFolderTitle] = useState("");
//   const [folderDescription, setFolderDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedSource, setSelectedSource] = useState<string | null>(null);
//   const router = useRouter();

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFolderTitle("");
//     setFolderDescription("");
//     setSelectedSource(null);
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
//     if (source === "csv" || source === "pdf" || source === "docs") {
//       openModal();
//     } else {
//       toast.info(`Connecting to ${source.toUpperCase()}...`);
//     }
//   };

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

//       const folders = response.data;
//       if (!Array.isArray(folders) || folders.length === 0) {
//         throw new Error("Folder creation response is not valid");
//       }

//       const createdFolder = folders[folders.length - 1];
//       const createdFolderID = createdFolder.folderID;

//       toast.success("Folder created successfully!");

//       closeModal();
//       router.push(`/dataSources`);
//     } catch (error) {
//       toast.error("Error creating folder");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const renderModalContent = () => {
//   //   switch (selectedSource) {
//   //     case "docs":
//   //     case "pdf":
//   //     case "csv":
//   //       return (
//   //         <div className="">
//   //           <h2 className="text-lg font-semibold">
//   //             Create {selectedSource.toUpperCase()} Folder
//   //           </h2>
//   //           <div className="flex justify-between gap-2">
//   //             <button
//   //               className={`p-2 rounded ${
//   //                 isSubmitDisabled
//   //                   ? "bg-gray-400"
//   //                   : "bg-orange-500 hover:bg-orange-700"
//   //               } text-white`}
//   //               disabled={isSubmitDisabled}
//   //               onClick={handleCreateFolder}
//   //             >
//   //               {loading
//   //                 ? "Creating..."
//   //                 : `Create ${selectedSource.toUpperCase()} Folder`}
//   //             </button>
//   //             <button
//   //               className=" p-2 bg-red-500 text-white rounded hover:bg-red-700"
//   //               onClick={closeModal}
//   //             >
//   //               Cancel
//   //             </button>
//   //           </div>
//   //         </div>
//   //       );
//   //     default:
//   //       return null;
//   //   }
//   // };

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
//                 <div className="dataSourceBtn">
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
//                 <div className="dataSourceBtn">
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
//                 <div className="dataSourceBtn">
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
//                 <div className="dataSourceBtn">
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
//                 <div className="dataSourceBtn">
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
//                 <div className="dataSourceBtn">
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
//           <ToastContainer />
//           {isModalOpen && (
//             <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//               <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
//                 <button
//                   className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
//                   onClick={closeModal}
//                 >
//                   &times;
//                 </button>
//                 <h2 className="text-2xl font-semibold mb-4">
//                   Enter Folder Details
//                 </h2>
//                 <input
//                   type="text"
//                   placeholder="Folder Title"
//                   value={folderTitle}
//                   onChange={handleTitleChange}
//                   className="w-full p-2 mb-4 border border-gray-300 rounded"
//                 />
//                 <textarea
//                   placeholder="Folder Description"
//                   value={folderDescription}
//                   onChange={handleDescriptionChange}
//                   className="w-full p-2 mb-4 border border-gray-300 rounded"
//                 />
//                 {renderModalContent()}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const ConnectDataSource: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const userToken = Cookies.get("auth_token");
  console.log(userToken);
  const router = useRouter();

  const handleDataSourceClick = (source: string) => {
    setSelectedSources((prevSources) => [...prevSources, source]);
    if (source === "csv" || source === "pdf" || source === "docs") {
      document.getElementById("fileInput")?.click();
    } else {
      toast.info(`Connecting to ${source.toUpperCase()}...`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleUploadFiles = async () => {
    if (
      !selectedFiles ||
      selectedFiles.length === 0 ||
      selectedSources.length === 0
    )
      return;

    setLoading(true);
    try {
      const formData = new FormData();

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("source", selectedFiles[i]);
      }

      formData.append("type", "file");

      formData.append("source", JSON.stringify(selectedSources));

      const response = await axios.post(
        `https://backend.getradii.com/datasources/static/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${userToken}`,
          },
        }
      );

      toast.success(response.data.message);
      console.log(response.data);
      toast.success("Files uploaded successfully!");
      router.push("/dataSources");
    } catch (error) {
      toast.error("Error uploading files");
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error || error.message);
        console.log(error.response?.data);
      } else {
        console.error(error);
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
      setSelectedFiles(null);
      setSelectedSources([]);
    }
  };

  // const handleUploadFiles = async () => {
  //   if (
  //     !selectedFiles ||
  //     selectedFiles.length === 0 ||
  //     selectedFiles.length === 0
  //   )
  //     return;

  //   setLoading(true);
  //   try {
  //     const formData = new FormData();
  //     Array.from(selectedFiles).forEach((file) => {
  //       formData.append("source", file);
  //     });

  //     formData.append("type", "FILE");

  //     formData.append("source", JSON.stringify(selectedSources));

  //     const response = await axios.post(
  //       `https://backend.getradii.com/datasources/static/`,
  //       formData,
  //       generateAxiosConfig()
  //     );

  //     toast.success(response.data.message);
  //     console.log(response.data);
  //     toast.success("Files uploaded successfully!");
  //     router.push("/dataSources");
  //   } catch (error) {
  //     toast.error("Error uploading files");
  //     if (axios.isAxiosError(error)) {
  //       toast.error(error.response?.data?.error || error.message);
  //       console.log(error.response?.data);
  //     } else {
  //       console.error(error);
  //       toast.error("An unknown error occurred");
  //     }
  //   } finally {
  //     setLoading(false);
  //     setSelectedFiles(null);
  //     setSelectedSources([]);
  //   }
  // };

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
                <div className="dataSourceBtn">
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
                <div className="dataSourceBtn">
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
                <div className="dataSourceBtn">
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
                <div className="dataSourceBtn">
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
                <div className="dataSourceBtn">
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
                <div className="dataSourceBtn">
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
          </div>
          <ToastContainer />
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
          {selectedFiles && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Upload Files</h2>
                <ul className="mb-4">
                  {Array.from(selectedFiles).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
                <div className="flex justify-end gap-2">
                  <button
                    className={`p-2 rounded ${
                      loading
                        ? "bg-gray-400"
                        : "bg-orange-500 hover:bg-orange-700"
                    } text-white`}
                    disabled={loading}
                    onClick={handleUploadFiles}
                  >
                    {loading ? "Uploading..." : "Upload"}
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
                    onClick={() => {
                      setSelectedFiles(null);
                      setSelectedSources([]);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectDataSource;
