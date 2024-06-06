// "use client";
// import Navbar from "@/app/component/NavBar";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaRegTrashAlt, FaPlus } from "react-icons/fa";

// import { MdFolder } from "react-icons/md";

// const DataSourceTable: React.FC = () => {
//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
// <Navbar title="Data Source" icon="" />
//       <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">All Sources</h2>
//           <div className="flex justify-between gap-2">
//             <Link href="/internalInsight" className="">
//               <button className=" px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
//                 <Image
//                   src="/insights.png"
//                   alt="internal insight"
//                   width={18}
//                   height={18}
//                 />{" "}
//                 Explore Insight
//               </button>
//             </Link>

//             <Link href="/addSource">
//               <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
//                 <FaPlus />
//                 Add Source
//               </button>
//             </Link>
//           </div>
//         </div>
//         <p className="text-sm text-gray-500 mb-4">Radii Hosted Documents</p>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Source</th>
//                 <th className="px-4 py-2 text-left">Created</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="px-4 py-2 flex items-center">
//                   <MdFolder className="mr-2" />
//                   Customer Movement
//                 </td>
//                 <td className="px-4 py-2">5 mins ago</td>
//                 <td className="px-4 py-2">
//                   <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                     Ready for use
//                   </span>
//                 </td>
//                 <td className="px-4 py-2">
//                   <button className="text-red-600 hover:text-red-800">
//                     <FaRegTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-2 flex items-center">
//                   <MdFolder className="mr-2" />
//                   Customer Movement
//                 </td>
//                 <td className="px-4 py-2">5 mins ago</td>
//                 <td className="px-4 py-2">
//                   <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
//                     Ready for use
//                   </span>
//                 </td>
//                 <td className="px-4 py-2">
//                   <button className="text-red-600 hover:text-red-800">
//                     <FaRegTrashAlt />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataSourceTable;

// components/DataSourceTable.tsx

// components/DataSourceTable.tsx

"use client";

import Navbar from "@/app/component/NavBar";
import { setCurrentFolder } from "@/app/store/navigationSlice";
import { RootState } from "@/app/store/store";
import React from "react";
import { FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { MdFolder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const DataSourceTable: React.FC = () => {
  const dispatch = useDispatch();
  const currentFolder = useSelector(
    (state: RootState) => state.navigation.currentFolder
  );

  const handleFolderClick = (folderName: string) => {
    dispatch(setCurrentFolder(folderName));
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Data Source" icon="" />
      <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{currentFolder}</h2>
          <div className="flex justify-between gap-2">
            <button className="px-4 py-2 text-dark font-semi-bold rounded-lg hover:bg-gray-100 border flex items-center gap-2 shadow">
              Explore Insight
            </button>
            <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
              <FaPlus />
              Add Source
            </button>
          </div>
        </div>

        {currentFolder === "All Sources" ? (
          <div>
            <p className="text-sm text-gray-500 mb-4">Radii Hosted Documents</p>
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
                  <tr
                    className="border-t"
                    onClick={() => handleFolderClick("Customer Movement")}
                  >
                    <td className="px-4 py-2 flex items-center cursor-pointer">
                      <MdFolder className="mr-2" />
                      Customer Movement
                    </td>
                    <td className="px-4 py-2">5 mins ago</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
                        Ready for use
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button className="text-red-600 hover:text-red-800">
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
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
              Here are the files you have uploaded from your device
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
                  <tr className="border-t">
                    <td className="px-4 py-2">PDF</td>
                    <td className="px-4 py-2">Customer Movement Q1</td>
                    <td className="px-4 py-2">Complete</td>
                    <td className="px-4 py-2">05/03/2024</td>
                    <td className="px-4 py-2">05/03/2024</td>
                    <td className="px-4 py-2">
                      <button className="text-red-600 hover:text-red-800">
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">PDF</td>
                    <td className="px-4 py-2">Customer Movement Q2</td>
                    <td className="px-4 py-2">Complete</td>
                    <td className="px-4 py-2">05/03/2024</td>
                    <td className="px-4 py-2">05/03/2024</td>
                    <td className="px-4 py-2">
                      <button className="text-red-600 hover:text-red-800">
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSourceTable;
