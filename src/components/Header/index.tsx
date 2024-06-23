import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Paths from "@/constants/paths";
import UserNav from "./UserNav";
import logo from "@/assets/logos/logo_main.png";

const Header = () => {
  return (
    <>
      <UserNav />
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
