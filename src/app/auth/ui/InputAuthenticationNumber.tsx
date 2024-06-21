"use client";

import ButtonAuthentication from "./ButtonAuthentication";
import { Input } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";

interface InputAuthenticationNumberProps {
  placeholder: string;
  onCompletedAuthentication: UseFormRegisterReturn<string>;
  // 메일 인증 요청 함수
  onSubmitAuthentication: () => void;
  // 인증번호 확인 요청 함수
  onSubmitAuthenticationNumber: (code: string) => void;
}

const InputAuthenticationNumber = ({
  placeholder,
  onCompletedAuthentication,
  onSubmitAuthentication,
  onSubmitAuthenticationNumber,
}: InputAuthenticationNumberProps) => {
  const [authenticationNumber, setAuthenticationNumber] = useState("");
  const [isSubmittedAuthentication, setSubmittedAuthentication] =
    useState(false);
  const [isCompletedAuthenticationNumber, setIsCompletedAuthenticationNumber] =
    useState(false);

  const handleClickSubmitAuthentication = () => {
    setSubmittedAuthentication(true);
    onSubmitAuthentication();
  };

  const handleClickSubmitAuthenticationNumber = () => {
    onSubmitAuthenticationNumber(authenticationNumber);
    // 성공 완료시 인증번호 true
    setIsCompletedAuthenticationNumber(true);
  };
  return (
    <>
      <div className="relative flex border rounded-[15px]">
        <Input
          disabled={isSubmittedAuthentication}
          className="border-0"
          placeholder={placeholder}
          {...onCompletedAuthentication}
        />
        <ButtonAuthentication
          isDisable={isSubmittedAuthentication}
          onClick={handleClickSubmitAuthentication}
        />
        {isSubmittedAuthentication && (
          <label className="absolute bottom-[-25px]">
            이메일을 확인해주세요.
          </label>
        )}
      </div>
      {isSubmittedAuthentication && (
        <div className="relative flex border rounded-[15px]">
          <Input
            value={authenticationNumber}
            disabled={isCompletedAuthenticationNumber}
            className="border-0"
            placeholder="인증번호"
            onChange={(e) => {
              setAuthenticationNumber(e.target.value);
            }}
          />
          <ButtonAuthentication
            isDisable={isCompletedAuthenticationNumber}
            onClick={handleClickSubmitAuthenticationNumber}
          />
          {isCompletedAuthenticationNumber && (
            <label className="absolute bottom-[-25px]">
              인증 완료되었습니다.
            </label>
          )}
        </div>
      )}
    </>
  );
};
export default InputAuthenticationNumber;
