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
