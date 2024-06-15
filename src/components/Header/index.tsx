import Image from "next/image";
import Link from "next/link";
import Paths from "@/constants/paths";
import { getUrlSearch } from "@/lib/getUrlSearch";
import logo from "@/assets/logos/logo_main.png";

const PATHS = [
  { ko: "채용 정보", to: Paths.JOB_INFO },
  { ko: "기업 정보", to: Paths.ORGAN_INFO },
  { ko: "커뮤니티", to: Paths.COMMUNITY },
  { ko: "고객센터", to: Paths.QNA },
];

const getisActiveUrl = (path: string) => {
  const url = getUrlSearch();
  return path.split("/")[1] === url;
};

const Header = () => {
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
        <nav className="flex">
          {PATHS.map((path) => (
            <Link
              key={path.ko}
              href={path.to}
              className="relative flex justify-center w-[144px] text-[24px] font-bold"
            >
              {path.ko}
              {getisActiveUrl(path.to) && (
                <span className="absolute bottom-[-40px] left-0 right-0 bg-primary3 h-[5px]" />
              )}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
