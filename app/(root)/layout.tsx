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
