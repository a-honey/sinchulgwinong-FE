"use client";

import PointItem from "./PointItem";
import getMyPoint from "@/api/user/getMyPoint";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const MyPoint = () => {
  const { data } = useUpdateFetch(getMyPoint);
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="subTitle1">내 포인트 현황</div>
      <div className="flex gap-[10px] w-full">
        <div className="grid grid-rows-2 border-[2px] border-[#E9E9E9] w-[250px]">
          <div className="flex flex-col gap-[20px] p-[16px]">
            <div className="subTitle1">적립된 포인트</div>
            <div className="title1 text-primary3">{data?.totalSaved} p</div>
          </div>
          <div className="flex flex-col border-t-[1px] border-[#E9E9E9] gap-[20px] p-[16px]">
            <div className="subTitle1">적립된 포인트</div>
            <div className="title1 text-[#5D5D5D]">{data?.totalUsed} p</div>
          </div>
        </div>
        <div className="flex flex-col items-end p-[40px] gap-[20px] border-[2px] border-[#E9E9E9] w-full">
          <PointItem content={"게시글 작성 (+100p)"} date={"2024.05.20"} />
          <PointItem content={"게시글 작성 (+100p)"} date={"2024.05.20"} />
          <PointItem content={"게시글 작성 (+100p)"} date={"2024.05.20"} />
          <PointItem content={"게시글 작성 (+100p)"} date={"2024.05.20"} />
          <PointItem content={"게시글 작성 (+100p)"} date={"2024.05.20"} />
        </div>
      </div>
    </div>
  );
};

export default MyPoint;
