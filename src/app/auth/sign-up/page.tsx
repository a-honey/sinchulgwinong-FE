"use client";

import UserTypeSelectBox, { UserAuthType } from "../sign-in/UserTypeSelectBox";

import EmployeeEmailRegisterForm from "./EmployeeEmailRegisterForm";
import EmployeeRegisterTypeButtons from "./EmployeeRegisterTypeButtons";
import EmployerRegisterForm from "./EmployerRegisterForm";
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
    <>
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
    </>
  );
};

export default SignUp;
