"use client";

import Navbar from "../../../app/component/NavBar";
import { RootState } from "../../../app/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios, { AxiosError } from "axios";
import generateAxiosConfig from "../../..//app/config/axiosConfig";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { setIntegrationID } from "../../../app/store/integrationSlice";
import { useSearchParams } from "next/navigation";

interface FileItem {
  sourceID: string;
  type: string;
  name: string;
  source: string;
  description: string | null;
  created_at: string;
}

interface DriveItem {
  integrationID: string;
  service: string;
  username: string;
  created_at: string;
}

interface FolderItem {
  id: string;
  name: string;
  type: string;
}

const DataSourceTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState("files");
  const [files, setFiles] = useState<FileItem[]>([]);
  const [drive, setDrive] = useState<DriveItem[]>([]);
  const [database, setDatabase] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [folders, setFolders] = useState<FolderItem[]>([]);
  const [selectedDrive, setSelectedDrive] = useState<DriveItem | null>(null);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [selectedFolders, setSelectedFolders] = useState<FolderItem[]>([]);
  const [connectedFolders, setConnectedFolders] = useState<FolderItem[]>([]);
  const [sendingFolders, setSendingFolders] = useState(false);
  const itemsPerPage = 10;

  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && orgID) {
      fetchDataSources();
      fetchDriveData();
      fetchDatabaseData();
    }
  }, [token, orgID]);

  const fetchDataSources = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get<FileItem[]>(
        "https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/files/",
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );

      setFiles(response.data);
      console.log("Files fetched successfully:", response.data);
    } catch (error) {
      handleError(error, "Error fetching files");
    }
  };

  const fetchDriveData = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get<DriveItem[]>(
        "https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/gdrive/",
        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
          },
        }
      );

      setDrive(response.data);
      console.log("Drive data fetched successfully:", response.data);
      console.log("This is the token: ", generateAxiosConfig());
    } catch (error) {
      handleError(error, "Error fetching drive data");
    }
  };

  const fetchDatabaseData = async () => {
    // Placeholder for database fetching logic
  };

  const fetchFolderContents = async (
    integrationID: string,
    folderID: string = "root"
  ) => {
    try {
      const config = generateAxiosConfig();
      console.log("Axios config: ", config);

      const response = await axios.get<{
        folders: FolderItem[];
        files: any[];
        current_folderID: string;
      }>(
        `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/gdrive/${integrationID}/browse/${folderID}/`,
        {
          ...config,
          params: {
            orgID: orgID,
          },
        }
      );
      console.log("Folder contents fetched successfully:", response.data);
      setFolders(response.data.folders);
      setShowFolderModal(true);
      dispatch(setIntegrationID(integrationID));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error response: ", error.response);
      }
      handleError(error, "Error fetching folder contents");
    }
  };

  // const handleDeleteFile = async (id: string) => {
  //   try {
  //     const response = await axios.delete(
  //       // `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/files/${id}`,
  //       "https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/files/{sourceID}/",
  //       {
  //         ...generateAxiosConfig(),
  //         params: {
  //           orgID: orgID,
  //         },
  //       }
  //     );
  //     console.log("File deleted successfully:", response.data);
  //     toast.success("File deleted successfully");
  //     fetchDataSources();
  //   } catch (error) {
  //     handleError(error, "Error deleting file");
  //     console.error("Error deleting file:", error);
  //   }
  // };

  const handleDeleteFile = async (SourceID: string) => {
    try {
      const response = await axios.delete(
        `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/files/${SourceID}`,

        {
          ...generateAxiosConfig(),
          params: {
            orgID: orgID,
            sourceID: SourceID,
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        console.log("File deleted successfully:", response.data);
        toast.success("File deleted successfully");
        fetchDataSources();
      } else {
        toast.error("Error deleting file");
      }
    } catch (error) {
      handleError(error, "Error deleting file");
      console.error("Error deleting file:", error);
    }
  };

  const handleDeleteDrive = async (id: string) => {
    try {
      const response = await axios.delete(
        `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/gdrive/${id}`,
        generateAxiosConfig()
      );
      console.log("Drive integration deleted successfully:", response.data);
      toast.success("Drive integration deleted successfully");
      fetchDriveData();
    } catch (error) {
      handleError(error, "Error deleting drive integration");
    }
  };

  const handleSelectFolder = (folder: FolderItem) => {
    setSelectedFolders((prevSelectedFolders) => {
      if (prevSelectedFolders.some((f) => f.id === folder.id)) {
        return prevSelectedFolders.filter((f) => f.id !== folder.id);
      } else {
        return [...prevSelectedFolders, folder];
      }
    });
  };

  const handleSendSelectedFolder = async () => {
    try {
      setSendingFolders(true);
      if (!selectedDrive) {
        throw new Error("No drive selected");
      }

      if (selectedFolders.length === 0) {
        throw new Error("No folders selected");
      }

      console.log("Selected Drive:", selectedDrive);
      console.log("Selected Folders:", selectedFolders);

      const payload = {
        folders: selectedFolders.map((folder) => ({
          id: folder.id,
          name: folder.name,
        })),
      };

      console.log("Payload to be sent:", payload);

      const response = await axios.post(
        `https://raoyanmo-frogs-app-ki8xj.ondigitalocean.app/datasources/gdrive/${selectedDrive.integrationID}/selectDriveFolder/`,
        payload,
        generateAxiosConfig()
      );

      console.log("Folders selected successfully:", response.data);
      toast.success("Folders selected successfully");
      setConnectedFolders(response.data);
      setShowFolderModal(false);
      setSelectedFolders([]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response);
        if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Error selecting folders");
        }
      } else {
        console.error("Error selecting folders", error);
        toast.error("Error selecting folders");
      }
    } finally {
      setSendingFolders(false);
    }
  };

  const handleError = (error: unknown, message: string) => {
    if (axios.isAxiosError(error)) {
      toast.error(`${message}: ${error.response?.data.error || error.message}`);
    } else {
      toast.error(`${message}: ${String(error)}`);
    }
    console.error(message, error);
  };

  const renderFilesTable = (data: FileItem[]) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Source</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.sourceID}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.source}</td>
                <td className="border px-4 py-2">
                  {format(new Date(item.created_at), "dd-MM-yyyy")}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    onClick={() => handleDeleteFile(item.sourceID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  const renderDriveTable = (data: DriveItem[]) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Service</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.integrationID}>
                <td className="border px-4 py-2">{item.service}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">
                  {format(new Date(item.created_at), "dd-MM-yyyy")}
                </td>
                <td className="border flex items-center  px-4 py-2">
                  <button
                    className="mr-2 rounded bg-[#038C7F] px-2 py-1 text-white hover:bg-[#1c7168] hover:text-white"
                    onClick={() => {
                      setSelectedDrive(item);
                      fetchFolderContents(item.integrationID);
                    }}
                  >
                    Browse
                  </button>
                  <button
                    className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    onClick={() => handleDeleteDrive(item.integrationID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  const renderDatabaseTable = (data: FileItem[]) => (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Source</th>
            <th className="px-4 py-2 text-left">Date Added</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.sourceID}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.source}</td>
                <td className="border px-4 py-2">
                  {format(new Date(item.created_at), "dd-MM-yyyy")}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    onClick={() => handleDeleteFile(item.sourceID)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <ToastContainer />
      <Navbar title={"Data Sources"} />
      <div className="m-4 flex justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Data Sources Dashboard
        </h1>
        <div className=" flex gap-2">
          <div className="text-white font-semi-bold py-2 px-4 rounded-lg border flex items-center gap-2 shadow bg-[#E58A13]">
            <Link
              href="/connectDataSources"
              className=" flex justify-end items-end mr-3"
            >
              Add Source
            </Link>
          </div>
          <div className="text-white font-semi-bold py-2 px-4 rounded-lg border flex items-center gap-2 shadow bg-[#038C7F]">
            <Link href="/insight" className=" flex justify-end items-end">
              Get Insights
            </Link>
          </div>
        </div>
      </div>
      <div className="m-4">
        <div className="mb-4 flex space-x-4">
          <button
            className={`${
              activeTab === "files"
                ? "bg-[#038C7F] text-white"
                : "bg-gray-300 text-gray-800"
            } rounded px-4 py-2`}
            onClick={() => setActiveTab("files")}
          >
            Files
          </button>
          <button
            className={`${
              activeTab === "drive"
                ? "bg-[#038C7F] text-white"
                : "bg-gray-300 text-gray-800"
            } rounded px-4 py-2`}
            onClick={() => setActiveTab("drive")}
          >
            Drive
          </button>
          <button
            className={`${
              activeTab === "database"
                ? "bg-[#038C7F] text-white"
                : "bg-gray-300 text-gray-800"
            } rounded px-4 py-2`}
            onClick={() => setActiveTab("database")}
          >
            Database
          </button>
        </div>
        {activeTab === "files" && renderFilesTable(files)}
        {activeTab === "drive" && renderDriveTable(drive)}
        {activeTab === "database" && renderDatabaseTable(database)}
      </div>

      {showFolderModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Select Folders</h2>
            <ul className="max-h-60 overflow-y-auto">
              {folders.map((folder) => (
                <li
                  key={folder.id}
                  className={`cursor-pointer p-2 ${
                    selectedFolders.some((f) => f.id === folder.id)
                      ? "bg-[#038C7F] text-white"
                      : "bg-gray-100 text-gray-800"
                  } rounded mb-2`}
                  onClick={() => handleSelectFolder(folder)}
                >
                  {folder.name}
                </li>
              ))}
            </ul>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowFolderModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#038C7F] text-white px-4 py-2 rounded"
                onClick={handleSendSelectedFolder}
              >
                {sendingFolders ? "Sending..." : "Select"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataSourceTable;
