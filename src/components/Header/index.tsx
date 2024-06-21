import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import Paths from "@/constants/paths";
import logo from "@/assets/logos/logo_main.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-end gap-[20px] pt-[30px] pb-[16px] pr-[60px] border-b border-[#B0B0B0]">
        <Link href={Paths.LOGIN}>로그인</Link>
        <Link href={Paths.REGISTER}>회원가입</Link>
        <Link href={Paths.USER}>마이페이지</Link>
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
