import "../styles/globals.css";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
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
      <body className={cn(inter.className, "max-w-[1200px] m-auto")}>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
