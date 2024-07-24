import React from "react";

interface ChartItem {
  chartID: string;
  chart_data: string;
  created_at: string;
  name: string;
  type: string;
  updated_at: string;
  user: string;
  organization: string;
  searchID: string;
}

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartData: ChartItem | null;
}

const ChartModal: React.FC<ChartModalProps> = ({
  isOpen,
  onClose,
  chartData,
}) => {
  if (!isOpen || !chartData) return null;

  const { chart_data } = chartData;
  const parsedData = JSON.parse(chart_data);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{parsedData.options.title}</h2>
        <div className="mb-4">
          <strong>Type:</strong> {parsedData.type}
        </div>
        <div className="mb-4">
          <strong>Labels:</strong> {parsedData.data.labels.join(", ")}
        </div>
        <div className="mb-4">
          <strong>Data:</strong> {parsedData.data.datasets[0].data.join(", ")}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChartModal;
