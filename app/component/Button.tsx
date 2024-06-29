import { FC } from "react";
import { FaArrowUp } from "react-icons/fa";
import { classNames } from "../utils/ClassName";

interface ButtonProps {
  onClick: () => void;
  isActive: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex items-center justify-center px-4 py-2 rounded transition-all",
        isActive ? "bg-green-500 text-white" : "bg-gray-400 text-gray-600"
      )}
    >
      <FaArrowUp />
    </button>
  );
};

export default Button;
