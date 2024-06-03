"use client";
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
      <Navbar title="Connect a Data Source" icon="&lt;" />
      <div className="container  w-4/6 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-xl font-bold mb-4">Databases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/postgres.png"
                  alt="postgres"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                PostgreSQL
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/mysql.png"
                  alt="mysql"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                MySQL
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/snowflakes.png"
                  alt="snowflakes"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                Snowflakes
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-xl font-bold mb-4">Radii Hosted</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/csv.png"
                  alt="csv"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                CSV
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/pdf2.png"
                  alt="pdf"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                PDF
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/docs.png"
                  alt="docs"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                DOCS
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-xl font-bold mb-4">Others</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/drive.png"
                  alt="drive"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                Google Drive
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/qb.png"
                  alt="qb"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                Quickbooks
              </button>
              <button className="flex items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50">
                <Image
                  src="/airtable.png"
                  alt="airtable"
                  width={32}
                  height={32}
                  className="mr-2"
                />
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
