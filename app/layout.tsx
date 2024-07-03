// // import type { Metadata } from "next";
// // import { Inter, IBM_Plex_Serif } from "next/font/google";
// // import "./globals.css";
// // import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";
// // import { store, persistor } from "@/app/store/store";
// // import ClientProvider from "./component/ClientProvider";

// // const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// // const ibmPlexSerif = IBM_Plex_Serif({
// //   subsets: ["latin"],
// //   weight: ["400", "700"],
// //   variable: "--font-ibm-plex-serif",
// // });

// // export const metadata: Metadata = {
// //   title: "Radii",
// //   description: "Unify siloed data and get actionable insight",
// //   icons: {
// //     icon: "/favicon.ico",
// //   },
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
// //         <div>
// //           <Provider store={store}>
// //             <PersistGate loading={null} persistor={persistor}>
// //               <ClientProvider>{children}</ClientProvider>
// //             </PersistGate>
// //           </Provider>
// //         </div>
// //       </body>
// //     </html>
// //   );
// // }

// import type { Metadata } from "next";
// import { Inter, IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";
// import Providers from "./Providers";

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
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
