import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
        <GoogleOAuthProvider clientId="75800942170-6uk0kinmmo3a308dscul4mk72g7uavr9.apps.googleusercontent.com">
          <Providers>{children}</Providers>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
