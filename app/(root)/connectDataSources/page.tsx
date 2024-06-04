// "use client";
// import React from "react";
// import Image from "next/image";
// import Navbar from "@/app/component/NavBar";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";

// const ConnectDataSource: React.FC = () => {
//   return (
//     <div className="h-screen overflow-hidden bg-gray-100">
//       <Navbar
//         title="Connect a Data Source"
//         icon={<MdOutlineArrowBackIosNew />}
//       />

//       <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300 ">
//         <div className="container w-4/6 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Databases</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/postgres.png"
//                       alt="postgres"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     PostgreSQL
//                   </div>
//                 </div>
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/mysql.png"
//                       alt="mysql"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     MySQL
//                   </div>
//                 </div>
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/snowflakes.png"
//                       alt="snowflakes"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     Snowflakes
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Radii Hosted</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/csv.png"
//                       alt="csv"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     CSV
//                   </div>
//                 </div>
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/pdf2.png"
//                       alt="pdf"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     PDF
//                   </div>
//                 </div>
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/docs.png"
//                       alt="docs"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     DOCS
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1 sm:col-span-3">
//               <h2 className="text-[18px] font-bold mb-4">Others</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/drive.png"
//                       alt="drive"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     Google Drive
//                   </div>
//                 </div>
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/qb.png"
//                       alt="qb"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     Quickbooks
//                   </div>
//                 </div>
//                 <div className="dataSourceBtn">
//                   <div className="inner rounded-lg shadow hover:bg-gray-50">
//                     <Image
//                       src="/airtable.png"
//                       alt="airtable"
//                       width={32}
//                       height={32}
//                       className="mr-2"
//                     />
//                     Airtable
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConnectDataSource;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/component/NavBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const ConnectDataSource: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Navbar
        title="Connect a Data Source"
        icon={<MdOutlineArrowBackIosNew />}
      />

      <div className="h-full sm:col-span-3 py-4 m-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300 ">
        <div className="container w-4/6 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-1 sm:col-span-3">
              <h2 className="text-[18px] font-bold mb-4">Databases</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/postgres.png"
                      alt="postgres"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    PostgreSQL
                  </div>
                </div>
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/mysql.png"
                      alt="mysql"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    MySQL
                  </div>
                </div>
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/snowflakes.png"
                      alt="snowflakes"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    Snowflakes
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <h2 className="text-[18px] font-bold mb-4">Radii Hosted</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/csv.png"
                      alt="csv"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    CSV
                  </div>
                </div>
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/pdf2.png"
                      alt="pdf"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    PDF
                  </div>
                </div>
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/docs.png"
                      alt="docs"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    DOCS
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3">
              <h2 className="text-[18px] font-bold mb-4">Others</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/drive.png"
                      alt="drive"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    Google Drive
                  </div>
                </div>
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/qb.png"
                      alt="qb"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    Quickbooks
                  </div>
                </div>
                <div className="dataSourceBtn" onClick={openModal}>
                  <div className="inner rounded-lg shadow hover:bg-gray-50">
                    <Image
                      src="/airtable.png"
                      alt="airtable"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    Airtable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Select a Folder</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="text-blue-500 hover:text-blue-700">
                Create New Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectDataSource;
