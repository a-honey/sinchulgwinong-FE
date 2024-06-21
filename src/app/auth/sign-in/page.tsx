"use client";

import UserTypeSelectBox, { UserAuthType } from "./UserTypeSelectBox";
import { useEffect, useState } from "react";

import EamilLoginForm from "./EmailLoginForm";
import EmployeeLoginTypeButtons from "./EmployeeLoginTypeButtons";
import useToggle from "@/hooks/useToggle";

const SignIn = () => {
  const [mode, setMode] = useState<UserAuthType>("employee");

  const changeMode = (mode: UserAuthType) => {
    setMode(mode);
  };

  const {
    isOpen: isEmailLoginFormOpen,
    toggleIsOpen: toggleIsEmailLoginFormOpen,
    changeIsOpenFalse: changeIsEmailLoginFormOpenFalse,
  } = useToggle();

  // TODO EmailLogin 에서 구직자이면서 마운트될 때 변경하기
  useEffect(() => {
    if (mode === "employer") {
      changeIsEmailLoginFormOpenFalse();
    }
  }, [changeIsEmailLoginFormOpenFalse, isEmailLoginFormOpen, mode]);

  return (
    <>
      <UserTypeSelectBox mode={mode} changeMode={changeMode} />
      <div className="w-[700px]">
        {!isEmailLoginFormOpen && mode === "employee" && (
          <EmployeeLoginTypeButtons
            toggleIsEmailLoginFormOpen={toggleIsEmailLoginFormOpen}
          />
        )}
        {(mode === "employer" || isEmailLoginFormOpen) && (
          <EamilLoginForm mode={mode} />
        )}
      </div>
    </>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return { page };
};
