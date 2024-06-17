import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#F5F6FA]">
      <ToastContainer />
      <div>{children}</div>
    </main>
  );
}
