"use client";

import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const OrganInfoBox = () => {
  const { data } = useUpdateFetch(getMyEmployerInfo);
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="subTitle1">내 기업 정보</div>
      <div className="border grid grid-cols-2 gap-[40px] p-[40px]">
        <div className="flex flex-col gap-[10px]">
          <label className="subTitle2 text-[#2D2D2D]">기업명</label>
          <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
            {data?.cpName}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="subTitle2 text-[#2D2D2D]">기업 이메일</label>
          <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
            {data?.cpEmail}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="subTitle2 text-[#2D2D2D]">사업자등록번호</label>
          <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
            {data?.cpNum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganInfoBox;
