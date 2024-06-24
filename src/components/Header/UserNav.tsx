"use client";

import Link from "next/link";
import Paths from "@/constants/paths";
import { useEffect } from "react";
import useIsLogin from "@/hooks/useIsLogin";
import { useRouter } from "next/navigation";

const UserNav = () => {
  const { isLogin } = useIsLogin();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined" && localStorage) {
      localStorage.removeItem("accessToken");
      router.push(Paths.HOME);
    }
    return;
  };

  useEffect(() => {}, [isLogin]);
  return (
    <div className="flex justify-end gap-[20px] pt-[30px] pb-[16px] pr-[60px] border-b border-[#B0B0B0]">
      {isLogin && (
        <>
          <Link href={Paths.USER}>마이페이지</Link>
          <div onClick={handleLogout}>로그아웃</div>
        </>
      )}
      {!isLogin && (
        <>
          <Link href={Paths.LOGIN}>로그인</Link>
          <Link href={Paths.REGISTER}>회원가입</Link>
        </>
      )}
    </div>
  );
};

export default UserNav;
