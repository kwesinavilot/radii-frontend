import React from "react";

import Image from "next/image";
import {
  FaDatabase,
  FaFileCsv,
  FaFilePdf,
  FaFileWord,
  FaGoogleDrive,
  FaMoneyCheckAlt,
  FaCloud,
} from "react-icons/fa";
import Navbar from "@/app/component/NavBar";

const ConnectDataSource: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="Connect a Data Source" icon="&lt; Back" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-xl font-bold mb-4">Databases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaDatabase className="text-2xl mr-2" />
                PostgreSQL
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaDatabase className="text-2xl mr-2" />
                MySQL
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaCloud className="text-2xl mr-2" />
                Snowflakes
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-xl font-bold mb-4">Radii Hosted</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaFileCsv className="text-2xl mr-2" />
                CSV
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaFilePdf className="text-2xl mr-2" />
                PDF
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaFileWord className="text-2xl mr-2" />
                DOCS
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-xl font-bold mb-4">Others</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaGoogleDrive className="text-2xl mr-2" />
                Google Drive
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaMoneyCheckAlt className="text-2xl mr-2" />
                Quickbooks
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <FaCloud className="text-2xl mr-2" />
                Airtable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDataSource;
