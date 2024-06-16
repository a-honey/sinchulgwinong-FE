"use client";

import Image from "next/image";
import logo from "@/assets/logos/logo_main.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPathname = usePathname();

  if (["/sign-in", "/sign-up"].includes(currentPathname)) return;

  return (
    <footer className="flex flex-col gap-[24px] px-[50px] py-[80px]">
      <div className="flex justify-between">
        <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
        <div className="flex">
          <div>로그인</div>
          <div>회원가입</div>
          <div>이용약관</div>
        </div>
      </div>
      <div>
        대표자: 김이름 | 대표메일: abcd123@abcd.com | 대표전화: 1234-1234
        <br />
        사업자등록번호 : 123-12-12345 | 서울특별시
        <br />ⓒ 2024. 9502 all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
