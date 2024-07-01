import { 만족도조사, 문의, 이용약관 } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logos/logo_main.png";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[24px] px-[50px] py-[80px]">
      <div className="flex justify-between">
        <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
        <div className="flex gap-[20px]">
          <Link href={문의}>1:1 문의</Link>
          <Link href={만족도조사}>만족도 조사</Link>
          <Link href={이용약관}>이용약관</Link>
        </div>
      </div>
      <div>
        대표자: 9502 | 대표메일: 9502team@gmail.com
        <br />
        사업자등록번호 : 123-12-12345 | 서울특별시
        <br />ⓒ 2024. 9502 all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
