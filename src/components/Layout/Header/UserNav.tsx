"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import Paths from "@/constants/paths";
import { checkIsLogin } from "@/lib/authUtils";
import postLogout from "@/api/auth/postLogout";

const UserNav = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isLogin, setIsLogin] = useState(false);

  const onLogoutSuccess = () => {
    router.push("/");
  };
  useEffect(() => {
    const checkLogin = async () => {
      const loginStatus = await checkIsLogin();
      setIsLogin(loginStatus);
    };
    checkLogin();
  }, [pathName]);

  return (
    <div className="flex justify-end gap-[20px] pt-[30px] pb-[16px] pr-[60px] border-b border-[#B0B0B0]">
      {isLogin && (
        <>
          <Link href={Paths.USER}>마이페이지</Link>
          <div
            onClick={() => {
              postLogout(onLogoutSuccess);
            }}
            className="cursor-pointer"
          >
            로그아웃
          </div>
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
