// import React, { ChangeEvent, FormEvent } from "react";
// import DataSourceDropdown from "./FolderDropdown";

// interface SearchBarProps {
//   value: string;
//   onChange: (value: string) => void;
//   onSubmit: () => void;
//   selectedFolder: string;
//   onFolderChange: (folder: string) => void;
//   remainingPrompts: number;
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   value,
//   onChange,
//   onSubmit,
//   selectedFolder,
//   onFolderChange,
//   remainingPrompts,
// }) => {
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };

//   const handleFormSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onSubmit();
//   };

//   return (
//     <div className="relative border rounded p-4 shadow-md bg-white">
//       <div className="relative flex items-center mb-4">
//         <FaSearch className="absolute left-3 text-gray-400" />
//       <form
//        className="flex items-center justify-center mb-4"
//       onSubmit={handleFormSubmit}
//     >
//       <input
//         type="text"
//         value={value}
//         onChange={handleInputChange}
//         className="w-full h-10 px-4 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
//         placeholder="Ask a question..."
//       />
// <DataSourceDropdown
//   selectedDataSource={selectedFolder}
//   onDataSourceChange={onFolderChange}
// />
//       <button
//         type="submit"
//         className="h-10 px-4 text-sm text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//       >
//         Search
//       </button>
//       <div className="text-sm text-gray-500 ml-2">
//         {remainingPrompts} prompts remaining
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch, FaArrowUp } from "react-icons/fa";
import DataSourceDropdown from "./FolderDropdown";

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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="relative border rounded p-4 shadow-md bg-white">
      <div className="relative flex items-center mb-4">
        <FaSearch className="absolute left-3 text-gray-400" />
        <form
          className="flex items-center justify-center mb-4"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className="flex-grow pl-10 pr-10 py-2 border-none outline-none"
            placeholder="I want to see the trends on my order"
          />
          <button
            className={`ml-2 h-12 w-10 rounded-lg flex items-center justify-center ${
              isSubmitted ? "bg-green-500 text-white" : "bg-gray-500 text-white"
            }`}
          >
            <FaArrowUp size={22} />
          </button>
        </form>
      </div>
      <div className="flex justify-between items-center">
        <DataSourceDropdown
          selectedDataSource={selectedFolder}
          onDataSourceChange={onFolderChange}
        />
        <span className="text-gray-600 text-sm">
          {remainingPrompts}/10 Prompts left
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
