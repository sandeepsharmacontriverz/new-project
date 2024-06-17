import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "../lib/ToastProvider";
import { useEffect } from "react";
import { checkAcess } from "@components/core/checkAcess";
import Nav from "@components/core/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  checkAcess();
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Nav />
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
