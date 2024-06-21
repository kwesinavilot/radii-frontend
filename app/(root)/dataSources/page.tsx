// "use client";

// import Navbar from "@/app/component/NavBar";
// import { setCurrentFolder } from "@/app/store/navigationSlice";
// import { RootState } from "@/app/store/store";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
// import { MdFolder } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";

// interface DataItem {
//   type: string;
//   title: string;
//   status: string;
//   dateAdded: string;
//   lastUpdated: string;
// }

// const DataSourceTable: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentFolder = useSelector(
//     (state: RootState) => state.navigation.currentFolder
//   );

//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
//     {}
//   );

//   const handleFolderClick = (folderName: string) => {
//     dispatch(setCurrentFolder(folderName));
//   };

//   const handleSelectAll = () => {
//     setSelectAll(!selectAll);
//     const newSelectedRows: { [key: string]: boolean } = {};
//     if (!selectAll) {
//       data.forEach((item) => {
//         newSelectedRows[item.title] = true;
//       });
//     }
//     setSelectedRows(newSelectedRows);
//   };

//   const handleCheckboxChange = (title: string) => {
//     setSelectedRows({
//       ...selectedRows,
//       [title]: !selectedRows[title],
//     });
//   };

//   const data: DataItem[] = [
//     {
//       type: "PDF",
//       title: "Customer Movement Q1",
//       status: "Complete",
//       dateAdded: "05/03/2024",
//       lastUpdated: "05/03/2024",
//     },
//     {
//       type: "PDF",
//       title: "Customer Movement Q2",
//       status: "Complete",
//       dateAdded: "05/03/2024",
//       lastUpdated: "05/03/2024",
//     },
//   ];

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
//                   <tr
//                     className="border-t"
//                     onClick={() => handleFolderClick("Customer Movement")}
//                   >
//                     <td className="px-4 py-2 flex items-center cursor-pointer">
//                       <MdFolder className="mr-2" />
//                       Customer Movement
//                     </td>
//                     <td className="px-4 py-2">5 mins ago</td>
//                     <td className="px-4 py-2">
//                       <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                         Ready for use
//                       </span>
//                     </td>
//                     <td className="px-4 py-2">
//                       <button className="text-red-600 hover:text-red-800">
//                         <FaRegTrashAlt />
//                       </button>
//                     </td>
//                   </tr>
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
//               Here are the files you have uploaded from your device
//             </p>
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto">
//                 <thead>
//                   <tr className="bg-[#1D1D1D] text-white">
//                     <th className="px-4 py-2 text-left">
//                       <input
//                         type="checkbox"
//                         checked={selectAll}
//                         onChange={handleSelectAll}
//                       />
//                     </th>
//                     <th className="px-4 py-2 text-left">Type</th>
//                     <th className="px-4 py-2 text-left">Title</th>
//                     <th className="px-4 py-2 text-left">Status</th>
//                     <th className="px-4 py-2 text-left">Date Added</th>
//                     <th className="px-4 py-2 text-left">Last Updated</th>
//                     <th className="px-4 py-2 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((item) => (
//                     <tr key={item.title} className="border-t">
//                       <td className="px-4 py-2">
//                         <input
//                           type="checkbox"
//                           checked={selectedRows[item.title] || false}
//                           onChange={() => handleCheckboxChange(item.title)}
//                         />
//                       </td>
//                       <td className="px-4 py-2">{item.type}</td>
//                       <td className="px-4 py-2">{item.title}</td>
//                       <td className="px-4 py-2">{item.status}</td>
//                       <td className="px-4 py-2">{item.dateAdded}</td>
//                       <td className="px-4 py-2">{item.lastUpdated}</td>
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

interface DataItem {
  id: string;
  type: string;
  title: string;
  status: string;
  dateAdded: string;
  lastUpdated: string;
}

const DataSourceTable: React.FC = () => {
  const dispatch = useDispatch();
  const currentFolder = useSelector(
    (state: RootState) => state.navigation.currentFolder
  );
  const [data, setData] = useState<DataItem[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    if (currentFolder !== "All Sources") {
      fetchDocuments();
    }
  }, [currentFolder]);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(
        `https://backend.getradii.com/datasources/static/${currentFolder}`,
        generateAxiosConfig()
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const handleFolderClick = (folderName: string) => {
    dispatch(setCurrentFolder(folderName));
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newSelectedRows: { [key: string]: boolean } = {};
    if (!selectAll) {
      data.forEach((item) => {
        newSelectedRows[item.id] = true;
      });
    }
    setSelectedRows(newSelectedRows);
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedRows({
      ...selectedRows,
      [id]: !selectedRows[id],
    });
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Data Source" icon="" />
      <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Data Sources</h1>
          <Link href="/data-sources/connect">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FaPlus className="mr-2" />
              <span>Connect Data Source</span>
            </button>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Type
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Title
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Status
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Date Added
                </th>
                <th className="py-2 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-grey-lighter">
                  <td className="py-4 px-6 border-b border-grey-light">
                    <input
                      type="checkbox"
                      checked={!!selectedRows[item.id]}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {item.type}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {item.title}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {item.status}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {item.dateAdded}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {item.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataSourceTable;
