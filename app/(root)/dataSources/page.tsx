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

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState<string | null>(null);

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

  const openDeleteModal = (folderID: string) => {
    setFolderToDelete(folderID);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setFolderToDelete(null);
  };

  const handleDeleteFolder = async () => {
    if (!folderToDelete) return;

    try {
      await axios.delete(
        `https://backend.getradii.com/datasources/folders/${folderToDelete}/`,
        generateAxiosConfig()
      );

      setFolders((prevFolders) =>
        prevFolders.filter((folder) => folder.folderID !== folderToDelete)
      );

      closeDeleteModal();
      toast.success("Folder deleted successfully");
    } catch (error) {
      console.error(`Error deleting folder ${folderToDelete}:`, error);
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
                            onClick={() => openDeleteModal(folder.folderID)}
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

        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white rounded-lg p-8 shadow-lg z-50">
              <h2 className="text-xl font-semibold mb-4">
                Delete Folder and Files
              </h2>
              <p className="text-lg mb-4">
                Are you sure you want to delete this folder and its files?
              </p>
              <div className="flex justify-end">
                <button
                  onClick={handleDeleteFolder}
                  className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSourceTable;
