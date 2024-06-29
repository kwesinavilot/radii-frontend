import React from "react";

interface CardProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, onClick, className }) => {
  return (
    <div
      className={`p-4 border rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
      style={{
        borderImage:
          "linear-gradient(to right,  #3788E5 0%, #3788E5 20%, #E58A13 20%, #E58A13 40%, #3788E5 40%, #3788E5 60%, #3788E5 60%, #3788E5 80%, #E58A13 80%, #E58A13 100%) 1",
      }}
    >
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

export default Card;
