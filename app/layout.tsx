import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.scss";
import Header from "./_components/header/Header";

const cabin = Cabin({ subsets: ["latin"] });

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
      <body className={cabin.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
