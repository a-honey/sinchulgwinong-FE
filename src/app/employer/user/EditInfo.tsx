"use client";

import EditItem from "./EditItem";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const EditInfo = ({ isDetail = false }: { isDetail?: boolean }) => {
  const { data } = useUpdateFetch(getMyEmployerInfo);
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="subTitle1">회원 정보 수정</div>
      <div className="border-[2px] border-[#E9E9E9] px-[60px] py-[52px] grid grid-cols-2 gap-[30px]">
        <EditItem label="기업명" value={data?.cpName} />
        <EditItem label="이름" value={data?.cpUsername} />
        <EditItem label="이메일" value={data?.cpEmail} />
        <EditItem label="전화번호" value={data?.cpNum} />
        {!isDetail && <EditItem label="비밀번호" />}
        {isDetail && (
          <>
            <EditItem label="기업 소개" value={data?.description} />
            <EditItem label="사업자 등록 번호" value={data?.cpNum} />
            <EditItem label="설립일" value={data?.foundationDate} />
            <EditItem label="직원 수" value={`${data?.employeeCount ?? 0}`} />
          </>
        )}
      </div>
    </div>
  );
};

export default EditInfo;
