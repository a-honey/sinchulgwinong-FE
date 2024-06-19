"use client";

import Paths from "@/constants/paths";
import { usePathname } from "next/navigation";

const PageInfoText = () => {
  const currentPathname = usePathname();
  return (
    <div className="title2">
      {currentPathname === Paths.LOGIN &&
        "로그인 후 모든 서비스를 이용해 보세요!"}
      {currentPathname === Paths.REGISTER &&
        "회원가입 후 모든 서비스를 이용해 보세요!"}
    </div>
  );
};

export default PageInfoText;
