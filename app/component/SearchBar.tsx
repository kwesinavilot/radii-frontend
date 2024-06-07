// import { FC, useState } from "react";
// import Button from "./Button";
// import { FaSearch } from "react-icons/fa";

// interface SearchBarProps {
//   value: string;
//   onChange: (value: string) => void;
//   onSubmit: () => void;
// }

// const SearchBar: FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//     setIsActive(e.target.value.length > 0);
//   };

//   return (
//     <div className="flex items-center space-x-2 border p-2 rounded-lg">
//       <FaSearch />
//       <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         className="flex-grow outline-none"
//         placeholder="Ask a question"
//       />
//       <Button onClick={onSubmit} isActive={isActive} />
//     </div>
//   );
// };

// export default SearchBar;

// components/SearchBar.tsx
import React from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
          onClick={onSubmit}
          className="ml-2 h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <FaArrowRight />
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
