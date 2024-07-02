"use client";

import Navbar from "@/app/component/NavBar";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

interface FileItem {
  sourceID: string;
  type: string;
  name: string;
  source: string;
  description: string | null;
  created_at: string;
}

const DataSourceTable: React.FC = () => {
  const [dataSources, setDataSources] = useState([]);
  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && orgID) {
      fetchDataSources();
    }
  }, [token, orgID]);

  console.log(orgID);

  const fetchDataSources = async () => {
    try {
      if (!orgID) {
        throw new Error("orgID is required");
      }
      const response = await axios.get(
        `https://lobster-app-9ufhi.ondigitalocean.app/datasources/static/`,
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
      console.error("Error fetching files:", error);
      toast.error("Error fetching files");
    }
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Data Source" icon="" />
      <div className="bg-white h-screen px-6 py-8 m-4 overflow-hidden rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Data Sources</h2>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center gap-2">
            <Link href="/connectDataSources">Add Source</Link>
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-4">Radii Hosted Documents</p>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-[#1D1D1D] text-white">
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Date Added</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-2 text-center text-gray-500"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : files.length > 0 ? (
                  files.map((file) => (
                    <tr key={file.sourceID} className="border-t">
                      <td className="px-4 py-2">{file.type}</td>
                      <td className="px-4 py-2">{file.name}</td>
                      <td className="px-4 py-2">{file.created_at}</td>
                      <td className="px-4 py-2">
                        <button className="text-red-600 hover:text-red-800">
                          <FaRegTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-2 text-center text-gray-500"
                    >
                      No files found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSourceTable;
