"use client";

import UserTypeSelectBox, { UserAuthType } from "./UserTypeSelectBox";

import EamilLoginForm from "./EmailLoginForm";
import EmployeeLoginTypeButtons from "./EmployeeLoginTypeButtons";
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
    <>
      <UserTypeSelectBox mode={mode} changeMode={changeMode} />
      <div className="w-[700px]">
        {!isEmailLoginFormOpen && mode === "employee" && (
          <EmployeeLoginTypeButtons
            toggleIsEmailLoginFormOpen={toggleIsEmailLoginFormOpen}
          />
        )}
        {(mode === "employer" || isEmailLoginFormOpen) && <EamilLoginForm />}
      </div>
    </>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return { page };
};
