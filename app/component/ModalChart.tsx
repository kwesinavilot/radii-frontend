// import React from "react";

// import { ChartItem } from "@/app/types";
// import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

// interface ChartModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   chartData: ChartItem;
// }

// const ChartModal: React.FC<ChartModalProps> = ({
//   isOpen,
//   onClose,
//   chartData,
// }) => {
//   const renderChartContent = () => {
//     if (!chartData.chart_data) {
//       return <p>Chart data is not available.</p>;
//     }

//     let parsedData;
//     try {
//       parsedData = JSON.parse(chartData.chart_data);
//     } catch (error) {
//       console.error("Failed to parse chart data:", error);
//       return <p>Invalid chart data.</p>;
//     }

//     const chartOptions = {
//       plugins: {
//         title: {
//           display: true,
//           text: parsedData.options?.title || "No Title Available",
//         },
//       },
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };

//     switch (chartData.type) {
//       case "Bar":
//         return <Bar data={parsedData.data} options={chartOptions} />;
//       case "Line":
//         return <Line data={parsedData.data} options={chartOptions} />;
//       case "Pie":
//         return <Pie data={parsedData.data} options={chartOptions} />;
//       case "Doughnut":
//         return <Doughnut data={parsedData.data} options={chartOptions} />;
//       default:
//         return <p>Unsupported chart type.</p>;
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Chart Details"
//       className="modal"
//       overlayClassName="modal-overlay"
//     >
//       <h2>{chartData.name}</h2>
//       {renderChartContent()}
//       <button onClick={onClose}>Close</button>
//     </Modal>
//   );
// };

// export default ChartModal;
