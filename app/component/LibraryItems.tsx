// "use client";

// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// interface libraryItemsProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onDetails: () => void;
//   onEdit: () => void;
//   onDelete: () => void;
//   onShare: () => void;
// }

// const libraryItems: React.FC<libraryItemsProps> = ({
//   isOpen,
//   onClose,
//   onDetails,
//   onEdit,
//   onDelete,
//   onShare,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-4 rounded shadow-lg">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Options</h2>
//           <button onClick={onClose}>
//             <IoCloseOutline size={24} />
//           </button>
//         </div>
//         <button onClick={onDetails} className="w-full text-left py-2">
//           Details
//         </button>
//         <button onClick={onEdit} className="w-full text-left py-2">
//           Edit
//         </button>
//         <button onClick={onDelete} className="w-full text-left py-2">
//           Delete
//         </button>
//         <button onClick={onShare} className="w-full text-left py-2">
//           Share
//         </button>
//       </div>
//     </div>
//   );
// };

// export default libraryItems;

// component/LibraryItemPopup.tsx
"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";

interface LibraryItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onShare: () => void;
}

const LibraryItemPopup: React.FC<LibraryItemPopupProps> = ({
  isOpen,
  onClose,
  onDetails,
  onEdit,
  onDelete,
  onShare,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Options</h2>
          <button onClick={onClose}>
            <IoCloseOutline size={24} />
          </button>
        </div>
        <button onClick={onDetails} className="w-full text-left py-2">
          Details
        </button>
        <button onClick={onEdit} className="w-full text-left py-2">
          Edit
        </button>
        <button onClick={onDelete} className="w-full text-left py-2">
          Delete
        </button>
        <button onClick={onShare} className="w-full text-left py-2">
          Share
        </button>
      </div>
    </div>
  );
};

export default LibraryItemPopup;
