"use client";

import UserTypeSelectBox, {
  UserAuthType,
} from "../sign-in/ui/UserTypeSelectBox";

import EmployeeEmailRegisterForm from "./ui/EmployeeEmailRegisterForm";
import EmployeeRegisterTypeButtons from "./ui/EmployeeRegisterTypeButtons";
import EmployerRegisterForm from "./ui/EmployerRegisterForm";
import Image from "next/image";
import logo from "@/assets/logos/logo_main.png";
import { useState } from "react";
import useToggle from "@/hooks/useToggle";

const SignUp = () => {
  const [mode, setMode] = useState<UserAuthType>("employee");

  const changeMode = (mode: UserAuthType) => {
    setMode(mode);
  };

  const {
    isOpen: isEmailRegisterFormOpen,
    toggleIsOpen: toggleIsEmailRegisterFormOpen,
  } = useToggle();

  return (
    <div className="mt-[100px] flex flex-col items-center">
      <div className="flex flex-col gap-[58px] items-center">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="신출귀농 로고" width={142} height={88} />
          <div>회원가입 후 모든 서비스를 이용해 보세요!</div>
        </div>
        <UserTypeSelectBox mode={mode} changeMode={changeMode} />
        <div className="w-[688px]">
          {mode === "employee" &&
            (isEmailRegisterFormOpen ? (
              <EmployeeEmailRegisterForm />
            ) : (
              <EmployeeRegisterTypeButtons
                toggleIsEmailRegisterFormOpen={toggleIsEmailRegisterFormOpen}
              />
            ))}
          {mode === "employer" && <EmployerRegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
