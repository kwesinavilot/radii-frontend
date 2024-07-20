// // import React from "react";
// // import axios from "axios";
// // import { ToastContainer } from "react-toastify";

// // const Logout = () => {
// //   return (
// //     <>
// //       <ToastContainer />

// //       <div className="flex items-center">
// //         <button className="--btn">Logout</button>
// //       </div>
// //     </>
// //   );
// // };

// // export default Logout;

// "use client";
// import React from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { useRouter } from "next/navigation";
// import { IoIosLogOut } from "react-icons/io";

// const Logout: React.FC<{ onLogoutSuccess: () => void }> = ({
//   onLogoutSuccess,
// }) => {
//   const router = useRouter();
//   const handleLogout = async () => {
//     try {
//       const response = await axios.post(
//         "https://lionfish-app-ahhfx.ondigitalocean.app/auth/logout/",
//         null,
//         generateAxiosConfig()
//       );

//       localStorage.removeItem("accessToken");
//       onLogoutSuccess();
//       toast.success(response.data?.message || "Logout successful");
//       console.log("Logout successful:", response.data);
//       router.push("/signin");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error message:", error.response?.data);
//         console.log(error);
//         toast.error(error.response?.data || "Login failed");
//       } else {
//         console.error("Unknown error occurred:", error);
//         toast.error("Unknown error occurred");
//       }
//     }
//   };

//   return (
//     <>
//       <ToastContainer />

//       <div className="flex items-center">
//         <button
//           className="--btn flex gap-4 items-center"
//           onClick={handleLogout}
//         >
//           <IoIosLogOut />
//           Logout
//         </button>
//       </div>
//     </>
//   );
// };

// export default Logout;

"use client";
import Logout from "@/app/component/Logout";
import React from "react";
import { toast } from "react-toastify";

const LogOutPage: React.FC = () => {
  const handleLogoutSuccess = () => {
    toast.success("Logout successful");
  };

  return <Logout onLogoutSuccess={handleLogoutSuccess} />;
};

export default LogOutPage;
