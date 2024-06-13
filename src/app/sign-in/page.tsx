"use client";

import Button from "../../components/Button";
import { useState } from "react";

const SignIn = () => {
  const [mode, setMode] = useState("employee");
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>신출귀농</h1>
        <div>로그인 후 모든 서비스를 이용해 보세요!</div>
        <div>
          <Button
            text="구직자"
            onClick={() => {
              setMode("employee");
            }}
          />
          <Button
            text="구직자"
            onClick={() => {
              setMode("employer");
            }}
          />
        </div>
        {mode === "employee" ? (
          <div className="flex flex-col">
            <Button
              className="bg-[#EEEEEE]"
              text="구글 계정으로 로그인"
              onClick={() => {
                console.log("hi");
              }}
            />
            <Button
              className="bg-[#FFD600]"
              text="카카오 계정으로 로그인"
              onClick={() => {
                console.log("hi");
              }}
            />
            <Button
              className="bg-[#FFC56F]"
              text="이메일로 로그인"
              onClick={() => {
                console.log("hi");
              }}
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
