import React from "react";

interface FolderDropdownProps {
  selectedFolder: string;
  onFolderChange: (folder: string) => void;
}

const FolderDropdown: React.FC<FolderDropdownProps> = ({
  selectedFolder,
  onFolderChange,
}) => {
  const folders = ["Movement DS", "Order DS", "Sales DS"];

  return (
    <select
      className="border p-2 rounded"
      value={selectedFolder}
      onChange={(e) => onFolderChange(e.target.value)}
    >
      {folders.map((folder) => (
        <option key={folder} value={folder}>
          {folder}
        </option>
      ))}
    </select>
  );
};

export default FolderDropdown;
