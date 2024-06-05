// export const dynamic = "force-dynamic";

// import type { Metadata } from "next";
// import { Inter, IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";
// import Sidebar from "./component/SideBar";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const ibmPlexSerif = IBM_Plex_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-ibm-plex-serif",
// });
// export const metadata: Metadata = {
//   title: "Radii",
//   description: "Unify siloed data and get actionable insight",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
//         <div className="flex bg-[#F5F6FA]">
//           <Sidebar />
//           <div className="flex-1">{children}</div>
//         </div>
//       </body>
//     </html>
//   );
// }

// layout.tsx

// layout.tsx
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

import Sidebar from "./component/SideBar";
import ClientProvider from "./component/ClientProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Radii",
  description: "Unify siloed data and get actionable insight",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        <div className="flex bg-[#F5F6FA]">
          <Sidebar />
          <div className="flex-1">
            <ClientProvider>{children}</ClientProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
