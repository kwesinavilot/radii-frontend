// import React from "react";

// interface FolderDropdownProps {
//   selectedFolder: string;
//   onFolderChange: (folder: string) => void;
// }

// const FolderDropdown: React.FC<FolderDropdownProps> = ({
//   selectedFolder,
//   onFolderChange,
// }) => {
//   const folders = ["Movement DS", "Order DS", "Sales DS"];

//   return (
//     <select
//       className="border p-1 rounded bg-gray-100"
//       value={selectedFolder}
//       onChange={(e) => onFolderChange(e.target.value)}
//     >
//       {folders.map((folder) => (
//         <option key={folder} value={folder}>
//           {folder}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default FolderDropdown;

import React from "react";

interface DataSourceDropdownProps {
  selectedDataSource: string;
  onDataSourceChange: (dataSource: string) => void;
}

const DataSourceDropdown: React.FC<DataSourceDropdownProps> = ({
  selectedDataSource,
  onDataSourceChange,
}) => {
  const dataSources = ["files", "drive", "database"];

  return (
    <select
      className="border p-1 rounded bg-gray-100"
      value={selectedDataSource}
      onChange={(e) => onDataSourceChange(e.target.value)}
    >
      {dataSources.map((dataSource) => (
        <option key={dataSource} value={dataSource}>
          {dataSource}
        </option>
      ))}
    </select>
  );
};

export default DataSourceDropdown;
