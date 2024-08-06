"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "../../../app/component/NavBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import DatabaseConnectionForm from "../../component/DataBaseForm";

const ConnectDataSource: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const userToken = Cookies.get("auth_token");
  const router = useRouter();

  const CLIENT_ID =
    "75800942170-6uk0kinmmo3a308dscul4mk72g7uavr9.apps.googleusercontent.com";
  const REDIRECT_URI = "https://www.app.getradii.com/api/oauth2callback";
  // const REDIRECT_URI = "http://localhost:3000/api/oauth2callback";

  // const SCOPES = "email profile https://www.googleapis.com/auth/drive";
  const SCOPES =
    "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive openid";

  const connectToGoogleDrive = () => {
    const oauth2Url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(
      SCOPES
    )}&access_type=offline&prompt=consent`;
    window.location.href = oauth2Url;
    console.log("Redirecting to Google OAuth2 URL:", oauth2Url);
  };

  const handleDataSourceClick = (source: string) => {
    setSelectedSources((prevSources) => [...prevSources, source]);
    if (source === "csv" || source === "pdf" || source === "docs") {
      document.getElementById("fileInput")?.click();
    } else if (source === "gdrive") {
      connectToGoogleDrive();
    }

    if (
      source === "postgresql" ||
      source === "mysql" ||
      source === "snowflake"
    ) {
      setShowForm(true);
    } else {
      toast.info(`Connecting to ${source.toUpperCase()}...`);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
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
        `https://starfish-app-9ezx5.ondigitalocean.app/datasources/files/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${userToken}`,
          },
        }
      );

      toast.success(response.data.message);
      toast.success("Files uploaded successfully!");
      router.push("/dataSources");
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Error uploading files");
    } finally {
      setLoading(false);
      setSelectedFiles(null);
      setSelectedSources([]);
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
                  onClick={() => handleDataSourceClick("postgresql")}
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
                  onClick={() => handleDataSourceClick("snowflake")}
                >
                  <div className="inner flex items-center justify-center rounded-lg shadow hover:bg-gray-50 p-4">
                    <Image
                      src="/snowflakes.png"
                      alt="snowflake"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span>Snowflake</span>
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
                  onClick={() => handleDataSourceClick("gdrive")}
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

          <input
            id="fileInput"
            type="file"
            multiple
            accept=".csv, .pdf, .doc, .docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {showForm && <DatabaseConnectionForm onClose={handleCloseForm} />}

        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-blue-600"
            onClick={handleUploadFiles}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Files"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConnectDataSource;
