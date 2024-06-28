"use client";

import { checkIsEmployeeLogin, checkIsLogin } from "@/lib/authUtils";
import { useEffect, useState } from "react";

import Nav from "./ui/Nav";
import Paths from "@/constants/paths";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const loginStatus = await checkIsLogin();

      if (!loginStatus) {
        router.push("/");
        return;
      }
      const isEmployee = await checkIsEmployeeLogin();
      if (isEmployee) router.push(Paths.USER);
      setIsLogin(loginStatus);
    };
    checkLogin();
  }, [router]);

  if (!isLogin) return null;

  return (
    <main>
      <div className="flex">
        <Nav />
        <section className="mt-[60px] p-[40px] w-full">{children}</section>
      </div>
    </main>
  );
};

export default Layout;
