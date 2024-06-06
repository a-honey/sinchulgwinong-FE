import "../styles/globals.css";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import cn from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "신출귀농",
  description: "농업 일자리 연결 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "max-w-[1440px] m-auto")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
