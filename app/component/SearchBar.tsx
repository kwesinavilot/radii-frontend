import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch, FaArrowUp } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  selectedFolder: string;
  onFolderChange: (folder: string) => void;
  selectedDataSource: string;
  onDataSourceChange: (dataSource: string) => void;
  remainingPrompts: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  selectedFolder,
  onFolderChange,
  selectedDataSource,
  onDataSourceChange,
  remainingPrompts,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="relative border rounded p-4 shadow-md bg-white">
      <div className="relative flex items-center mb-4">
        <FaSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="flex-grow pl-10 pr-10 py-2 border-none outline-none"
          placeholder="I want to see the trends on my order"
        />
        <button
          className="ml-2 h-12 w-10 rounded-lg flex items-center justify-center bg-gray-500 text-white"
          onClick={handleFormSubmit}
        >
          <FaArrowUp size={22} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <select
          value={selectedDataSource}
          onChange={(e) => onDataSourceChange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="folder">Folder</option>
          <option value="drive">Google Drive</option>
        </select>
        <span className="text-gray-600 text-sm">
          {remainingPrompts}/10 Prompts left
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
