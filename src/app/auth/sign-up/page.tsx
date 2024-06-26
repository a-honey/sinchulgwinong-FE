"use client";

import { Suspense, useEffect, useState } from "react";
import UserTypeSelectBox, { UserAuthType } from "../sign-in/UserTypeSelectBox";

import EmployeeEmailRegisterForm from "./EmployeeEmailRegisterForm";
import EmployeeRegisterTypeButtons from "./EmployeeRegisterTypeButtons";
import EmployeeSocialExtraRegisterForm from "./EmployeeSocialExtraRegisterForm";
import EmployerRegisterForm from "./EmployerRegisterForm";
import Loading from "@/components/StatusComponents/Loading";
import { useSearchParams } from "next/navigation";
import useToggle from "@/hooks/useToggle";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SignUp />
    </Suspense>
  );
};

export default Page;

const SignUp = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const code = searchParams.get("code");

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
    }
  }, [type, toggleIsEmailRegisterFormOpen]);

  return (
    <>
      <UserTypeSelectBox mode={mode} changeMode={changeMode} />
      <div className="w-[688px]">
        {mode === "employee" && code ? (
          <EmployeeSocialExtraRegisterForm />
        ) : mode === "employee" && isEmailRegisterFormOpen ? (
          <EmployeeEmailRegisterForm />
        ) : mode === "employee" ? (
          <EmployeeRegisterTypeButtons
            toggleIsEmailRegisterFormOpen={toggleIsEmailRegisterFormOpen}
          />
        ) : mode === "employer" ? (
          <EmployerRegisterForm />
        ) : null}
      </div>
    </>
  );
};
