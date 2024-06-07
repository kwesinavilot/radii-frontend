// import { FC } from "react";

// interface CardProps {
//   title: string;
//   onClick: () => void;
// }

// const Card: FC<CardProps> = ({ title, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="p-4 bg-white border rounded-lg shadow-md hover:bg-gray-100 transition-all"
//     >
//       {title}
//     </button>
//   );
// };

// export default Card;

import React from "react";

interface CardProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, onClick, className }) => {
  return (
    <div
      className={`p-4 border rounded shadow hover:shadow-md transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
    >
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

export default Card;
