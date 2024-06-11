// import React from "react";

// interface UserModalProps {
//   onClose: () => void;
// }

// const UserModal: React.FC<UserModalProps> = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-4 w-64">
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-bold">Account</span>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             &times;
//           </button>
//         </div>
//         <ul className="mt-4">
//           <li className="flex items-center py-2 cursor-pointer">
//             <div className="text-xl mr-2">⚙️</div> Account Setting
//           </li>
//           <li className="flex items-center py-2 cursor-pointer">
//             <div className="text-xl mr-2">👥</div> Team
//           </li>
//           <li className="flex items-center py-2 cursor-pointer">
//             <div className="text-xl mr-2">🚪</div> Logout
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserModal;

import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return createPortal(
    <div
      className="fixed z-50 w-48 bg-white rounded shadow-lg"
      style={{ bottom: "70px", left: "20px" }}
    >
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold">Account</h2>
        <ul>
          <li className="py-2 flex items-center">
            <span className="mr-2">⚙️</span> Account Setting
          </li>
          <li className="py-2 flex items-center">
            <span className="mr-2">👥</span> Team
          </li>
          <li className="py-2 flex items-center">
            <span className="mr-2">↩️</span> Logout
          </li>
        </ul>
      </div>
      <button
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        ×
      </button>
    </div>,
    document.body
  );
};

export default Modal;
