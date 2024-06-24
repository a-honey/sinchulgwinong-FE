"use client";

import postEmployeeSignIn, {
  EmployeeSignInBody,
} from "@/api/auth/postEmployeeSignIn";
import postEmployerSignIn, {
  EmployerSignInBody,
} from "@/api/auth/postEmployerSignIn";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { UserAuthType } from "./UserTypeSelectBox";
import useIsLogin from "@/hooks/useIsLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";

// TODO: server action으로 바꾸기
const EmailLoginForm = ({ mode }: { mode: UserAuthType }) => {
  const router = useRouter();
  const [loginBody, setLoginBody] = useState<
    EmployeeSignInBody | EmployerSignInBody
  >(
    mode === "employee"
      ? { email: "", password: "" }
      : {
          cpEmail: "",
          cpPassword: "",
        }
  );

  const { handleIsLogin } = useIsLogin();

  const onLoginSuccess = () => {
    handleIsLogin(true);
    router.push(mode === "employee" ? "/" : "/employer/user");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mode === "employee") {
      const { email, password } = loginBody as EmployeeSignInBody;
      postEmployeeSignIn({
        body: { email, password },
        onSuccess: onLoginSuccess,
        onError: () => {
          console.log("로그인 실패");
        },
      });
    }
    if (mode === "employer") {
      const { cpEmail, cpPassword } = loginBody as EmployerSignInBody;
      postEmployerSignIn({
        body: { cpEmail, cpPassword },
        onSuccess: onLoginSuccess,
        onError: () => {
          console.log("로그인 실패");
        },
      });
    }
  };

  return (
    <form className="flex flex-col w-[688px] gap-[30px]" onSubmit={onSubmit}>
      <Input
        placeholder="이메일 입력"
        onChange={(e) => {
          if (mode === "employee") {
            setLoginBody((body) => ({ ...body, email: e.target.value }));
          } else {
            setLoginBody((body) => ({ ...body, cpEmail: e.target.value }));
          }
        }}
      />
      <Input
        placeholder="비밀번호 입력"
        type="password"
        onChange={(e) => {
          if (mode === "employee") {
            setLoginBody((body) => ({ ...body, password: e.target.value }));
          } else {
            setLoginBody((body) => ({ ...body, cpPassword: e.target.value }));
          }
        }}
      />
      <Button
        type="submit"
        variants="yellow"
        text="이메일로 로그인"
        className="py-[25px]"
        isRound
      />
    </form>
  );
};

export default EmailLoginForm;
