"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import deleteAccount from "@/api/auth/deleteAccount";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import getMyProfile from "@/api/user/getMyProfile";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Posts = () => {
  const { data: employerData } = useUpdateFetch(getMyEmployerInfo);
  const { data: employeeData } = useUpdateFetch(getMyProfile);
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (employeeData) {
      deleteAccount({ password, userId: employeeData.userId });
    }
    if (employerData) {
      deleteAccount({ password, userId: employerData.cpUserId });
    }
  };

  return (
    <>
      <h2 className="title1 mb-[50px]">회원 탈퇴하기</h2>
      <form className="flex flex-col gap-[20px]" onSubmit={onSubmit}>
        <div className="detail">
          계정을 삭제하기 위해 현재 비밀번호를 입력해주세요.
        </div>
        <Input
          className="border"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="detail">
          계정 삭제 시, 회원 정보와 모든 이용 내역 (스크랩 및 작성 목록) 이
          삭제되며 복구가 불가능합니다.
          <br />
          정말 탈퇴하시겠어요?
        </div>
        <div>
          <input type="checkbox" />
          <label>확인했습니다.</label>
        </div>
        <Button
          text="회원 탈퇴하기"
          className="bg-[#FFE6A6] py-[20px] subTitle1"
          onClick={() => {
            console.log("ㄱ");
          }}
        />
      </form>
    </>
  );
};

export default Posts;
