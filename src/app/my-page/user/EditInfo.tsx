"use client";

import EditItem from "./EditItem";
import getMyProfile from "@/api/user/getMyProfile";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const EditInfo = () => {
  const { data } = useUpdateFetch(getMyProfile);
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="subTitle1">회원 정보 수정</div>
      <div className="border-[2px] border-[#E9E9E9] px-[60px] py-[52px] grid grid-cols-2 gap-[30px]">
        <EditItem label="닉네임" value={data?.nickname} />
        <EditItem label="이름" value={data?.username} />
        <EditItem label="이메일" value={data?.email} />
        <EditItem
          label="전화번호"
          value={`${data?.phoneNumber ?? "전화번호 없음"}`}
        />
        <EditItem label="비밀번호" />
      </div>
    </div>
  );
};

export default EditInfo;
