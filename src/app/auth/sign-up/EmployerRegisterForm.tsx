"use client";

import postEmployerSignUp, {
  EmployerSignUpBody,
} from "@/api/auth/postEmployerSignUp";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import InputAgree from "../ui/InputAgree";
import InputAuthentication from "../ui/InputAuthentication";
import InputAuthenticationNumber from "../ui/InputAuthenticationNumber";
import postSendAuthenticationNumber from "@/api/auth/postSendAuthenticationNumber";
import postVerifyAuthenticationNumber from "@/api/auth/postVerifyAuthenticationNumber";
import { useForm } from "react-hook-form";

const EmployerRegisterForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<EmployerSignUpBody, "hiringStatus">>();

  const email = watch("cpEmail");

  const onSubmit = (data: Omit<EmployerSignUpBody, "hiringStatus">) => {
    postEmployerSignUp({ ...data, hiringStatus: false });
  };

  return (
    <form
      className="flex flex-col gap-[25px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputAuthenticationNumber
        placeholder="기업 이메일 입력"
        onCompletedAuthentication={register("cpEmail", { required: true })}
        onSubmitAuthentication={() => {
          postSendAuthenticationNumber({ email, userType: "USER" });
        }}
        onSubmitAuthenticationNumber={(code: string) => {
          postVerifyAuthenticationNumber({ email, code });
        }}
      />
      <Input
        placeholder="비밀번호 입력"
        {...register("cpPassword", { required: true })}
      />
      <Input
        placeholder="비밀번호 확인 입력"
        {...register("cpConfirmPassword", { required: true })}
      />
      <Input
        placeholder="기업명 입력"
        {...register("cpName", { required: true })}
      />
      <InputAuthentication
        placeholder="사업자 번호 입력"
        onCompletedAuthentication={register("cpNum", { required: true })}
        onSubmitAuthentication={() => {
          console.log("hi");
        }}
      />
      <Input
        placeholder="대표자 명"
        {...register("cpUsername", { required: true })}
      />
      <Input
        placeholder="설립일 입력 (ex 1991006)"
        {...register("foundationDate", { required: true })}
      />
      <Input
        placeholder="기업 소개 입력"
        {...register("description", { required: true })}
      />
      <Input
        placeholder="직원 수 입력 (ex 10)"
        {...register("employeeCount", { required: true })}
      />
      <Input
        placeholder="기업 연락처 입력"
        {...register("cpPhoneNumber", { required: true })}
      />
      <div>
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="현재 활동 중이신가요?"
        />
      </div>
      <Button
        varients="yellow"
        text="회원가입"
        className="px-[30px] py-[17px]"
        isRound
      />
    </form>
  );
};

export default EmployerRegisterForm;
