/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { MyProvider } from "@/context/MyContext";

const poppins = Poppins({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="sweetalert2.min.css"></link>
        <script src="sweetalert2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      </head>

      <body className={`${poppins.className} bg-background text-foreground `}>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
