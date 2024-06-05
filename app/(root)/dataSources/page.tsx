"use client";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdFolder } from "react-icons/md";

const DataSourceTable: React.FC = () => {
  return (
    <div className="bg-white w-full h-screen overflow-hidden p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Sources</h2>
        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-700">
          + Add Source
        </button>
      </div>
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
            <tr className="border-t">
              <td className="px-4 py-2 flex items-center">
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
  );
};

export default DataSourceTable;
