import postEmployeeSignUp, {
  EmployeeSignUpBody,
} from "@/api/auth/postEmployeeSignUp";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import InputAgree from "../ui/InputAgree";
import InputAuthenticationNumber from "../ui/InputAuthenticationNumber";
import postSendAuthenticationNumber from "@/api/auth/postSendAuthenticationNumber";
import postVerifyAuthenticationNumber from "@/api/auth/postVerifyAuthenticationNumber";
import { useForm } from "react-hook-form";

function allElementsOn(arr: string[]) {
  return arr.every((element) => element === "on");
}

const EmployeeEmailRegisterForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<EmployeeSignUpBody, "loginType">>();

  const email = watch("email");

  const onSubmit = (data: Omit<EmployeeSignUpBody, "loginType">) => {
    postEmployeeSignUp({ ...data, loginType: "NORMAL", agreeToTerms: true });
  };

  return (
    <form
      className="flex flex-col gap-[25px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputAuthenticationNumber
        placeholder="이메일 입력"
        onCompletedAuthentication={register("email", { required: true })}
        onSubmitAuthentication={() => {
          postSendAuthenticationNumber({ email, userType: "USER" });
        }}
        onSubmitAuthenticationNumber={(code: string) => {
          postVerifyAuthenticationNumber({ email, code });
        }}
      />
      <Input
        placeholder="비밀번호 입력"
        {...register("password", { required: true })}
      />
      <Input
        placeholder="비밀번호 확인 입력"
        {...register("confirmPassword", { required: true })}
      />
      <Input
        placeholder="이름 입력"
        {...register("username", { required: true })}
      />
      <Input
        placeholder="닉네임 입력"
        {...register("nickname", { required: true })}
      />
      <Input
        placeholder="전화번호 입력"
        {...register("phoneNumber", { required: true })}
      />
      <div>
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="서비스 이용 약관 동의"
        />
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="개인정보 수집 및 이용 동의"
        />
        <InputAgree
          onChecked={register("agreeToTerms", { required: true })}
          name="agreeToTerms"
          label="위치기반 서비스 이용 동의"
        />
      </div>
      <Button
        variants="yellow"
        text="회원가입"
        className="px-[30px] py-[17px]"
        isRound
      />
    </form>
  );
};

export default EmployeeEmailRegisterForm;
