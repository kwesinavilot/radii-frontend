"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/component/NavBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const ConnectDataSource: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        title="Connect a Data Source"
        icon={<MdOutlineArrowBackIosNew />}
      />
      <div className="container w-4/6 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-3">
            <h2 className="text-[18px] font-bold mb-4">Databases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
              <div className="dataSourceBtn">
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
  );
};

export default ConnectDataSource;
