"use client";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import postEmployeeSignIn from "@/api/auth/postEmployeeSignIn";
import { useState } from "react";

// TODO: server action으로 바꾸기
const EamilLoginForm = () => {
  const [loginBody, setLoginBody] = useState({ email: "", password: "" });

  const onSubmit = () => {
    postEmployeeSignIn(loginBody);
  };

  return (
    <form className="flex flex-col w-[688px] gap-[30px]" onSubmit={onSubmit}>
      <Input
        placeholder="이메일 입력"
        onChange={(e) => {
          setLoginBody((body) => ({ ...body, email: e.target.value }));
        }}
      />
      <Input
        placeholder="비밀번호 입력"
        type="password"
        onChange={(e) => {
          setLoginBody((body) => ({ ...body, password: e.target.value }));
        }}
      />
      <Button
        type="submit"
        varients="yellow"
        text="이메일로 로그인"
        className="py-[25px]"
        isRound
      />
    </form>
  );
};

export default EamilLoginForm;
