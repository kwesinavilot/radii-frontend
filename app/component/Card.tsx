import { FC } from "react";

interface CardProps {
  title: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-white border rounded-lg shadow-md hover:bg-gray-100 transition-all"
    >
      {title}
    </button>
  );
};

export default Card;
