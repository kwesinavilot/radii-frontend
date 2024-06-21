// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// interface Folder {
//   folderID: string;
//   name: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

// interface File {
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
//   const [files, setFiles] = useState<File[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch folders when component mounts or currentFolder changes
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

//   // Fetch files for a specific folder when folder is clicked
//   const handleFolderClick = async (folderID: string) => {
//     dispatch(setCurrentFolder(folderID));
//     try {
//       const response = await axios.get(
//         `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
//         generateAxiosConfig()
//       );
//       setFiles(response.data);
//     } catch (error) {
//       console.error(`Error fetching files for folder ${folderID}:`, error);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">{currentFolder}</h2>
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

//         {currentFolder === "All Sources" ? (
//           <div>
//             <p className="text-sm text-gray-500 mb-4">Radii Hosted Documents</p>
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-2 text-left">Source</th>
//                     <th className="px-4 py-2 text-left">Created</th>
//                     <th className="px-4 py-2 text-left">Status</th>
//                     <th className="px-4 py-2 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {folders.map((folder) => (
//                     <tr
//                       key={folder.folderID}
//                       className="border-t cursor-pointer"
//                       onClick={() => handleFolderClick(folder.folderID)}
//                     >
//                       <td className="px-4 py-2 flex items-center">
//                         <MdFolder className="mr-2" />
//                         {folder.name}
//                       </td>
//                       <td className="px-4 py-2">{folder.created_at}</td>
//                       <td className="px-4 py-2">
//                         <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                           Ready for use
//                         </span>
//                       </td>
//                       <td className="px-4 py-2">
//                         <button className="text-red-600 hover:text-red-800">
//                           <FaRegTrashAlt />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <button
//               onClick={() => dispatch(setCurrentFolder("All Sources"))}
//               className="text-[#038C7F] mb-4"
//             >
//               &larr; Back to All Sources
//             </button>
//             <p className="text-sm text-gray-500 mb-4">
//               Here are the files in {currentFolder}
//             </p>
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto">
//                 <thead>
//                   <tr className="bg-[#1D1D1D] text-white">
//                     <th className="px-4 py-2 text-left">Type</th>
//                     <th className="px-4 py-2 text-left">Title</th>
//                     <th className="px-4 py-2 text-left">Status</th>
//                     <th className="px-4 py-2 text-left">Date Added</th>
//                     <th className="px-4 py-2 text-left">Last Updated</th>
//                     <th className="px-4 py-2 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {files.map((file) => (
//                     <tr key={file.fileID} className="border-t">
//                       <td className="px-4 py-2">{file.type}</td>
//                       <td className="px-4 py-2">{file.name}</td>
//                       <td className="px-4 py-2">{file.status}</td>
//                       <td className="px-4 py-2">{file.dateAdded}</td>
//                       <td className="px-4 py-2">{file.lastUpdated}</td>
//                       <td className="px-4 py-2">
//                         <button className="text-red-600 hover:text-red-800">
//                           <FaRegTrashAlt />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
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
import { setCurrentFolder } from "@/app/store/navigationSlice";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { MdFolder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface Folder {
  folderID: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface File {
  lastUpdated: string;
  dateAdded: string;
  status: string;
  fileID: string;
  name: string;
  type: string;
  size: number;
  created_at: string;
}

const DataSourceTable: React.FC = () => {
  const dispatch = useDispatch();
  const currentFolder = useSelector(
    (state: RootState) => state.navigation.currentFolder
  );

  const [folders, setFolders] = useState<Folder[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch folders when component mounts or currentFolder changes
  useEffect(() => {
    const fetchFolders = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://backend.getradii.com/datasources/folders/",
          generateAxiosConfig()
        );
        setFolders(response.data);
      } catch (error) {
        console.error("Error fetching folders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, [currentFolder]);

  // Fetch files for a specific folder when folder is clicked
  const handleFolderClick = async (folderID: string) => {
    dispatch(setCurrentFolder(folderID));
    try {
      const response = await axios.get(
        `https://backend.getradii.com/datasources/folders/${folderID}/files/`,
        generateAxiosConfig()
      );
      setFiles(response.data);
    } catch (error) {
      console.error(`Error fetching files for folder ${folderID}:`, error);
    }
  };

  // Delete folder by folderID
  const handleDeleteFolder = async (folderID: string) => {
    try {
      await axios.delete(
        `https://backend.getradii.com/datasources/folders/${folderID}/`,
        generateAxiosConfig()
      );
      // After deletion, filter out the deleted folder from state
      setFolders((prevFolders) =>
        prevFolders.filter((folder) => folder.folderID !== folderID)
      );
      toast.success(`Folder deleted successfully.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "delete-success",
      });
    } catch (error) {
      console.error(`Error deleting folder ${folderID}:`, error);
      toast.error(`Error deleting folder. Please try again.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "delete-error",
      });
    }
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Data Source" icon="" />
      <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{currentFolder}</h2>
          <div className="flex justify-between gap-2">
            <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
              <Link href="/insight">Explore Insight</Link>
            </button>
            <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
              <FaPlus />
              <Link href="/connectDataSources"> Add Source</Link>
            </button>
          </div>
        </div>

        <div>
          {currentFolder === "All Sources" ? (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Radii Hosted Documents
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Source</th>
                      <th className="px-4 py-2 text-left">Created</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {folders.map((folder) => (
                      <tr
                        key={folder.folderID}
                        className="border-t cursor-pointer"
                      >
                        <td
                          className="px-4 py-2 flex items-center cursor-pointer"
                          onClick={() => handleFolderClick(folder.folderID)}
                        >
                          <MdFolder className="mr-2" />
                          {folder.name}
                        </td>
                        <td className="px-4 py-2">{folder.created_at}</td>
                        <td className="px-4 py-2">
                          <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
                            Ready for use
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => handleDeleteFolder(folder.folderID)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaRegTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <button
                onClick={() => dispatch(setCurrentFolder("All Sources"))}
                className="text-[#038C7F] mb-4"
              >
                &larr; Back to All Sources
              </button>
              <p className="text-sm text-gray-500 mb-4">
                Here are the files in {currentFolder}
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-[#1D1D1D] text-white">
                      <th className="px-4 py-2 text-left">Type</th>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Date Added</th>
                      <th className="px-4 py-2 text-left">Last Updated</th>
                      <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file) => (
                      <tr key={file.fileID} className="border-t">
                        <td className="px-4 py-2">{file.type}</td>
                        <td className="px-4 py-2">{file.name}</td>
                        <td className="px-4 py-2">{file.status}</td>
                        <td className="px-4 py-2">{file.dateAdded}</td>
                        <td className="px-4 py-2">{file.lastUpdated}</td>
                        <td className="px-4 py-2">
                          <button className="text-red-600 hover:text-red-800">
                            <FaRegTrashAlt />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSourceTable;
