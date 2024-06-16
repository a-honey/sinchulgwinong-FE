"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import logo from "@/assets/logos/logo_main.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPathname = usePathname();

  if (["/sign-in", "/sign-up"].includes(currentPathname)) return;

  return (
    <>
      <div className="flex justify-end gap-[20px] pt-[30px] pb-[16px] pr-[60px] border-b border-[#B0B0B0]">
        <Link href={"/sign-in"}>로그인</Link>
        <Link href={"/sign-up"}>회원가입</Link>
        <Link href={"/my-page/user"}>마이페이지</Link>
      </div>
      <header className="flex justify-between items-center px-[100px] py-[13px]  border-b border-[#777777]">
        <Link href="/">
          <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
        </Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
