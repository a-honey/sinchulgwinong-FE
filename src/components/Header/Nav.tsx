"use client";

import Link from "next/link";
import Paths from "@/constants/paths";
import { checkIsActive } from "@/lib/utils";
import { usePathname } from "next/navigation";

const PATHS = [
  { ko: "채용 정보", to: Paths.JOB_INFO },
  { ko: "기업 정보", to: Paths.ORGAN_INFO },
  { ko: "커뮤니티", to: Paths.COMMUNITY },
  { ko: "고객센터", to: Paths.QNA },
];

const Nav = () => {
  const currentPathname = usePathname();

  return (
    <nav className="flex">
      {PATHS.map((path) => {
        return (
          <Link
            key={path.ko}
            href={path.to}
            className="relative flex justify-center w-[144px] text-[24px] font-bold"
          >
            {path.ko}
            {checkIsActive(path.to, currentPathname) && (
              <span className="absolute bottom-[-40px] left-0 right-0 bg-primary3 h-[5px]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
