import React from "react";

interface CardProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, onClick, className }) => {
  return (
    <div
      className={`p-4 border-2 rounded shadow hover:shadow-md transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
      style={{
        borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
      }}
    >
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

export default Card;
