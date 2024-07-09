// "use client";

// import React, { useEffect, useRef } from "react";
// import { FaInfoCircle, FaEdit, FaTrashAlt, FaShareAlt } from "react-icons/fa";

// interface LibraryItemPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onDetails: () => void;
//   onEdit: () => void;
//   onDelete: () => void;
//   onShare: () => void;
//   popupPosition: { top: number; left: number };
// }

// const LibraryItemPopup: React.FC<LibraryItemPopupProps> = ({
//   isOpen,
//   onClose,
//   onDetails,
//   onEdit,
//   onDelete,
//   onShare,
//   popupPosition,
// }) => {
//   const popupRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         popupRef.current &&
//         !popupRef.current.contains(event.target as Node)
//       ) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   if (!isOpen) return null;

//   return (
//     <div
//       ref={popupRef}
//       className="fixed z-50 bg-white p-4 rounded shadow-lg"
//       style={{ top: popupPosition.top, left: popupPosition.left }}
//     >
//       <button
//         onClick={onDetails}
//         className="w-full flex items-center text-left py-2"
//       >
//         <FaInfoCircle className="mr-2" />
//         Details
//       </button>
//       <button
//         onClick={onEdit}
//         className="w-full flex items-center text-left py-2"
//       >
//         <FaEdit className="mr-2" />
//         Edit
//       </button>
//       <button
//         onClick={onDelete}
//         className="w-full flex items-center text-left py-2"
//       >
//         <FaTrashAlt className="mr-2" />
//         Delete
//       </button>
//       <button
//         onClick={onShare}
//         className="w-full flex items-center text-left py-2"
//       >
//         <FaShareAlt className="mr-2" />
//         Share
//       </button>
//     </div>
//   );
// };

// export default LibraryItemPopup;

"use client";

import React, { useEffect, useRef } from "react";
import { FaInfoCircle, FaEdit, FaTrashAlt, FaShareAlt } from "react-icons/fa";

interface LibraryItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDetails: () => void;
  onEdit: () => void;
  onDelete: (searchID: string) => void;
  onShare: () => void;
  popupPosition: { top: number; left: number };
  searchID: string;
}

const LibraryItemPopup: React.FC<LibraryItemPopupProps> = ({
  isOpen,
  onClose,
  onDetails,
  onEdit,
  onDelete,
  onShare,
  popupPosition,
  searchID,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className="fixed z-50 bg-white p-4 rounded shadow-lg"
      style={{ top: popupPosition.top, left: popupPosition.left }}
    >
      <button
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
      </button>
      <button
        onClick={() => onDelete(searchID)}
        className="w-full flex items-center text-left py-2"
      >
        <FaTrashAlt className="mr-2" />
        Delete
      </button>
      <button
        onClick={onShare}
        className="w-full flex items-center text-left py-2"
      >
        <FaShareAlt className="mr-2" />
        Share
      </button>
    </div>
  );
};

export default LibraryItemPopup;
