import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ToastProvider from "../lib/ToastProvider";
import { useEffect } from "react";
import { checkAcess } from "@components/core/checkAcess";
import Nav from "@components/core/Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
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
  checkAcess();
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
