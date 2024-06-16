"use client";

import Button from "../../components/Button";
import postEmployeeSignIn from "@/api/auth/postEmployeeSignIn";
import { useState } from "react";

const SignIn = () => {
  const [mode, setMode] = useState("employee");
  return (
    <div className="mt-[200px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center">
          <h1 className="title1">신출귀농</h1>
          <div className="title2">로그인 후 모든 서비스를 이용해 보세요!</div>
        </div>
        <div>
          <Button
            className={
              mode === "employee"
                ? "bg-[#D9D9D9] px-[30px] py-[17px]"
                : "px-[30px] py-[17px]"
            }
            text="구직자"
            onClick={() => {
              setMode("employee");
            }}
          />
          <Button
            className={
              mode === "employer"
                ? "bg-[#D9D9D9] px-[30px] py-[17px]"
                : "px-[30px] py-[17px]"
            }
            text="구직자"
            onClick={() => {
              setMode("employer");
            }}
          />
        </div>
        {mode === "employee" ? (
          <div className="flex flex-col gap-[30px]">
            <Button
              className="bg-[#EEEEEE] py-[25px] w-[700px]"
              text="구글 계정으로 로그인"
            />
            <Button
              className="bg-[#FFD600] py-[25px] w-[700px]"
              text="카카오 계정으로 로그인"
            />
            <Button
              onClick={() => {
                postEmployeeSignIn();
              }}
              className="bg-[#FFC56F] py-[25px] w-[700px]"
              text="이메일로 로그인"
            />
          </div>
        ) : (
          <div>구인자</div>
        )}
      </div>
    </div>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return { page };
};
