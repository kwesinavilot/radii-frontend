import React from "react";
import Image from "next/image";

interface SearchResultProps {
  result: {
    type: string;
    title: string;
    status: string;
    dateAdded: string;
    lastUpdated: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{result.title}</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <Image
            src="/bar-chart.png"
            alt="Bar Chart"
            width={500}
            height={300}
          />
        </div>
        <div className="text-right">
          <button className="px-4 py-2 bg-gray-200 rounded shadow mr-2">
            Save
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded shadow mr-2">
            Add to Views
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded shadow">
            View Reference
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold mb-2">Top Performance</p>
          <p className="text-4xl font-bold mb-2">30%</p>
          <p className="text-gray-500">
            Your top performance is 30% better compared to last month.
          </p>
        </div>
        <div className="text-right">
          <button className="px-4 py-2 bg-gray-200 rounded shadow">
            Details
          </button>
        </div>
      </div>
      <p className="text-gray-500 text-right mt-4">{result.lastUpdated}</p>
    </div>
  );
};

export default SearchResult;
