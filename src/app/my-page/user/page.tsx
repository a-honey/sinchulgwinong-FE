"use client";

import EditInfo from "./EditInfo";
import Image from "next/image";
import MyPoint from "./MyPoint";
import getMyProfile from "@/api/user/getMyProfile";
import point from "@/assets/svgs/point.svg";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const User = () => {
  const { data } = useUpdateFetch(getMyProfile);
  return (
    <>
      <div className="relative">
        <Image
          className="absolute top-[-25px] left-[-25px]"
          src={point}
          alt="포인트 요소"
        />
        <h2 className="title1 mb-[43px]"> 안녕하세요, {data?.nickname}님</h2>
      </div>
      <div className="flex flex-col gap-[60px]">
        <MyPoint />
        <EditInfo />
      </div>
    </>
  );
};

export default User;
