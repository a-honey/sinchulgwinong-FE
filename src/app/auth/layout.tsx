"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import logo from "@/assets/logos/logo_main.png";
import useIsLogin from "@/hooks/useIsLogin";
import { useRouter } from "next/navigation";

// TODO: SSR이랑 lazy loading의 차이
const PageInfoText = dynamic(() => import("./ui/PageInfoText"), { ssr: false });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useIsLogin();
  const router = useRouter();
  if (isLogin) {
    router.push("/");
  }

  return (
    <div className="mt-[100px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
          <PageInfoText />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
