import React, { useState } from "react";
import { FaSearch, FaArrowRight, FaArrowUp } from "react-icons/fa";
import FolderDropdown from "./FolderDropdown";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  selectedFolder: string;
  onFolderChange: (folder: string) => void;
  remainingPrompts: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  selectedFolder,
  onFolderChange,
  remainingPrompts,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSearchSubmit = () => {
    setIsSubmitted(true);
    onSubmit();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000); // Reset the button color after 2 seconds
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
          onClick={handleSearchSubmit}
          className={`ml-2 h-12 w-10 rounded-lg flex items-center justify-center ${
            isSubmitted ? "bg-green-500 text-white" : "bg-gray-500 text-white"
          }`}
        >
          <FaArrowUp size={22} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <FolderDropdown
          selectedFolder={selectedFolder}
          onFolderChange={onFolderChange}
        />
        <span className="text-gray-600 text-sm">
          {remainingPrompts}/10 Prompts left
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
