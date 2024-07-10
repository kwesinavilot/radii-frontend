import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../component/SideBar";
import ClientProvider from "../component/ClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F5F6FA]">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1">
        <div>{children}</div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Sidebar from "../component/SideBar";
// import ClientProvider from "../component/ClientProvider";

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   const navigation = useRouter();

//   useEffect(() => {
//     const handleGoogleOAuth2Callback = async () => {
//       // Ensure navigation and navigation.isReady are available
//       if (navigation && navigation.isReady) {
//         const { code } = navigation.query;

//         if (code) {
//           try {
//             const response = await axios.get("/api/oauth2callback", {
//               params: { code },
//             });

//             const { tokens } = response.data;
//             console.log("Tokens:", tokens);

//             // You can save tokens in a context, global state, or cookies if needed.
//           } catch (error) {
//             console.error("Error during OAuth2 callback:", error);
//           }
//         }
//       }
//     };

//     if (navigation?.pathname === "/api/oauth2callback") {
//       handleGoogleOAuth2Callback();
//     }
//   }, [navigation]);

//   return (
//     <div className="flex bg-[#F5F6FA]">
//       <ToastContainer />
//       <Sidebar />
//       <div className="flex-1">
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default RootLayout;
