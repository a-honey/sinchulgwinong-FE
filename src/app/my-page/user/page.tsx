"use client";

import EditInfo from "./EditInfo";
import MyPoint from "./MyPoint";
import PointIcon from "@/assets/icons/PointIcon";
import getMyProfile from "@/api/user/getMyProfile";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const User = () => {
  const { data } = useUpdateFetch(getMyProfile);
  return (
    <>
      <div className="relative">
        <PointIcon className="absolute top-[-25px] left-[-25px]" />
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
