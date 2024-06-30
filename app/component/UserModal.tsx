// import React from "react";
// import { RiTeamFill } from "react-icons/ri";
// import { IoIosLogOut } from "react-icons/io";
// import { CiSettings } from "react-icons/ci";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import Link from "next/link";
// import Logout from "../(auth)/logOut/page";

// interface UserModalProps {
//   onClose: () => void;
//   onLogoutSuccess: () => void;
// }

// const UserModal: React.FC<UserModalProps> = ({ onClose, onLogoutSuccess }) => {
//   return (
//     <div className="fixed bottom-4 left-32  w-full p-4 z-50 ml-28">
//       <div className="bg-white p-8 relative  max-w-lg w-[350px] border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300">
//         <button
//           className="absolute top-9 right-8 hover:translate-x-2 transform transition duration-200"
//           onClick={onClose}
//         >
//           Close
//         </button>

//         <h3 className="text-xl font-semibold mb-4">Organizations</h3>

//         <div>
//           <Link
//             href="/team"
//             className="flex items-center gap-3 text-[18px] cursor-pointer"
//           >
//             <RiTeamFill />
//             <span> Team</span>
//           </Link>

//           <Link
//             href="/billing"
//             className="flex items-center gap-4 text-[18px] cursor-pointer"
//           >
//             <FaFileInvoiceDollar />
//             <span>Billing</span>
//           </Link>
//           <hr className="border-t border-gray-400 my-4" />
//           <Link
//             href="/accountSetting"
//             className="flex items-center gap-3 text-[18px] cursor-pointer mb-2"
//           >
//             <CiSettings />
//             <span> Account Setting</span>
//           </Link>
//           <Logout onLogoutSuccess={onLogoutSuccess} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;
"use client";
import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa";
import Link from "next/link";
import Logout from "@/app/component/Logout";
interface UserModalProps {
  onClose: () => void;
  onLogoutSuccess: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onLogoutSuccess }) => {
  return (
    <div className="fixed bottom-4 left-32 w-full p-4 z-50 ml-28">
      <div className="bg-white p-8 relative max-w-lg w-[350px] border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
        <button
          className="absolute top-9 right-8 hover:translate-x-2 transform transition duration-200"
          onClick={onClose}
        >
          Close
        </button>

        <h3 className="text-xl font-semibold mb-4">Organizations</h3>

        <div>
          <Link
            href="/team"
            className="flex items-center gap-3 text-[18px] cursor-pointer"
          >
            <RiTeamFill />
            <span> Team</span>
          </Link>

          <Link
            href="/billing"
            className="flex items-center gap-4 text-[18px] cursor-pointer"
          >
            <FaFileInvoiceDollar />
            <span>Billing</span>
          </Link>
          <hr className="border-t border-gray-400 my-4" />
          <Link
            href="/accountSetting"
            className="flex items-center gap-3 text-[18px] cursor-pointer mb-2"
          >
            <CiSettings />
            <span> Account Setting</span>
          </Link>
          <Logout onLogoutSuccess={onLogoutSuccess} />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
