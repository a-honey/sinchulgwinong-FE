"use client";

import UserTypeSelectBox, { UserAuthType } from "./ui/UserTypeSelectBox";

import Button from "../../components/Button";
import EamilLoginForm from "./ui/EmailLoginForm";
import EmployeeLoginTypeButtons from "./ui/EmployeeLoginTypeButtons";
import Image from "next/image";
import logo from "@/assets/logos/logo_main.png";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";

const SignIn = () => {
  const [mode, setMode] = useState<UserAuthType>("employee");

  const changeMode = (mode: UserAuthType) => {
    setMode(mode);
  };

  const {
    isOpen: isEmailLoginFormOpen,
    toggleIsOpen: toggleIsEmailLoginFormOpen,
  } = useToggle();

  return (
    <div className="mt-[100px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
          <div className="title2">로그인 후 모든 서비스를 이용해 보세요!</div>
        </div>
        <UserTypeSelectBox mode={mode} changeMode={changeMode} />
        <div className="w-[700px]">
          {!isEmailLoginFormOpen &&
            (mode === "employee" ? (
              <EmployeeLoginTypeButtons
                toggleIsEmailLoginFormOpen={toggleIsEmailLoginFormOpen}
              />
            ) : (
              <div>구인자</div>
            ))}
          {isEmailLoginFormOpen && <EamilLoginForm />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return { page };
};
