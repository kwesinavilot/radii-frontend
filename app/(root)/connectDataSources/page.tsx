"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/app/component/NavBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const ConnectDataSource: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [folderTitle, setFolderTitle] = useState("");
  const [folderDescription, setFolderDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCreateFolderModalOpen(false);
    setFolderTitle("");
    setFolderDescription("");
  };

  const openCreateFolderModal = () => {
    setIsCreateFolderModalOpen(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderDescription(e.target.value);
  };

  const handleDataSourceClick = (source: string) => {
    switch (source) {
      case "docs":
        console.log("Open system document explorer for docs");
        break;
      case "pdf":
        console.log("Open system document explorer for pdf");
        break;
      case "csv":
        console.log("Open system document explorer for csv");
        break;
      case "postgres":
        console.log("Connect to PostgreSQL");
        break;
      case "mysql":
        console.log("Connect to MySQL");
        break;
      case "snowflakes":
        console.log("Connect to Snowflakes");
        break;
      case "drive":
        console.log("Connect to Google Drive");
        break;
      case "qb":
        console.log("Connect to Quickbooks");
        break;
      case "airtable":
        console.log("Connect to Airtable");
        break;
      default:
        break;
    }
    openModal();
  };

  const isSubmitDisabled = !(folderTitle && folderDescription) || loading;

  const handleCreateFolder = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.getradii.com/datasources/folders/",
        {
          title: folderTitle,
          description: folderDescription,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      console.log("Folder created:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error creating folder:", error);
      setLoading(false);
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
                    <span>Quickbooks</span>
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
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={openCreateFolderModal}
              >
                Create New Folder
              </button>
            </div>
          </div>
        </div>
      )}

      {isCreateFolderModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Create a Folder</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Folder Title"
                value={folderTitle}
                onChange={handleTitleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={folderDescription}
                onChange={handleDescriptionChange}
                className="border p-2 rounded"
              />
              <button
                className={`p-2 rounded ${
                  isSubmitDisabled
                    ? "bg-gray-400"
                    : "bg-orange-500 hover:bg-orange-700"
                } text-white`}
                disabled={isSubmitDisabled}
                onClick={handleCreateFolder}
              >
                {loading ? "Creating..." : "Create and import document"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectDataSource;
