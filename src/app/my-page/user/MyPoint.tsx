"use client";

import MyPointHistory from "./MyPointHistory";
import getMyPoint from "@/api/user/getMyPoint";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const MyPoint = () => {
  const { data } = useUpdateFetch(getMyPoint);

  return (
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
      <MyPointHistory />
    </div>
  );
};

export default MyPoint;
