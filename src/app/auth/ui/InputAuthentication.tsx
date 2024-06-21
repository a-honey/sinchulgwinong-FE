"use client";

import ButtonAuthentication from "./ButtonAuthentication";
import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";

interface InputAuthenticationProps {
  placeholder: string;
  onCompletedAuthentication: UseFormRegisterReturn<string>;
  onSubmitAuthentication: () => void;
}

const InputAuthentication = ({
  placeholder,
  onCompletedAuthentication,
  onSubmitAuthentication,
}: InputAuthenticationProps) => {
  const [isCompletedAuthentication, setIsCompletedAuthentication] =
    useState(false);

  const handleClickSubmitAuthentication = () => {
    setIsCompletedAuthentication(true);
    onSubmitAuthentication();
  };

  return (
    <div className="relative flex border rounded-[15px]">
      <Input
        disabled={isCompletedAuthentication}
        className="border-0"
        placeholder={placeholder}
        {...onCompletedAuthentication}
      />
      <ButtonAuthentication
        isDisable={isCompletedAuthentication}
        onClick={handleClickSubmitAuthentication}
      />
      {isCompletedAuthentication && (
        <label className="absolute bottom-[-25px]">인증되었습니다.</label>
      )}
    </div>
  );
};
export default InputAuthentication;
