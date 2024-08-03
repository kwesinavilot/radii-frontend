"use client";

import React from "react";
import { FaInfoCircle, FaEdit, FaTrashAlt, FaShareAlt } from "react-icons/fa";

interface LibraryItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
  position: { top: number; left: number };
}

const LibraryItemPopup: React.FC<LibraryItemPopupProps> = ({
  isOpen,
  onClose,
  onDetails,
  onEdit,
  onDelete,
  onShare,
  position,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute z-10 bg-white border rounded shadow px-4"
      style={{ top: position.top, left: position.left }}
    >
      {/* <button
        onClick={onDetails}
        className="w-full flex items-center text-left py-2"
      >
        <FaInfoCircle className="mr-2" />
        Details
      </button>
      <button
        onClick={onEdit}
        className="w-full flex items-center text-left py-2"
      >
        <FaEdit className="mr-2" />
        Edit
      </button> */}
      <button
        onClick={onDelete}
        className="w-full flex items-center text-left py-2"
      >
        <FaTrashAlt className="mr-2" />
        Delete
      </button>
      {/* <button
        onClick={onShare}
        className="w-full flex items-center text-left py-2"
      >
        <FaShareAlt className="mr-2" />
        Share
      </button> */}
      <button
        onClick={onClose}
        className="w-full flex items-center text-left py-2 text-red-400"
      >
        Close
      </button>
    </div>
  );
};

export default LibraryItemPopup;
