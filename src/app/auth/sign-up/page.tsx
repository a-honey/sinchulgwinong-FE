"use client";

import UserTypeSelectBox, { UserAuthType } from "../sign-in/UserTypeSelectBox";
import { useEffect, useState } from "react";

import EmployeeEmailRegisterForm from "./EmployeeEmailRegisterForm";
import EmployeeRegisterTypeButtons from "./EmployeeRegisterTypeButtons";
import EmployerRegisterForm from "./EmployerRegisterForm";
import { useParams } from "next/navigation";
import useToggle from "@/hooks/useToggle";

const SignUp = () => {
  const params = useParams();
  const type = params.type;

  const [mode, setMode] = useState<UserAuthType>("employee");

  const changeMode = (mode: UserAuthType) => {
    setMode(mode);
  };

  const {
    isOpen: isEmailRegisterFormOpen,
    toggleIsOpen: toggleIsEmailRegisterFormOpen,
  } = useToggle();

  useEffect(() => {
    if (type) {
      setMode("employee");
      toggleIsEmailRegisterFormOpen();
    }
  }, [type, toggleIsEmailRegisterFormOpen]);

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
