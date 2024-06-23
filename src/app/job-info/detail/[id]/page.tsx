"use client";

import { useParams, useRouter } from "next/navigation";

import ChatIcon from "@/assets/icons/ChatIcon";
import ContentBox from "./ContentBox";
import EmployerBox from "./EmployerBox";
import InfoBox from "./InfoBox";
import ScrapIcon from "@/assets/icons/ScrapIcon";
import getEmployerInfo from "@/api/employer/getEmployerInfo";
import getJobInfoPost from "@/api/job-info/getJobInfoPost";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Page = () => {
  const params = useParams();
  const jobBoardId = params.id;

  const { data } = useUpdateFetch(
    useCallback(() => getJobInfoPost(+jobBoardId), [jobBoardId])
  );

  if (!data) return;

  return (
    <main className="mt-[72px] flex flex-col gap-[60px]">
      <InfoBox
        title={data.jobTitle}
        date={"2024-06-22-2024-06-22"}
        region={data.address}
        salaryType={data.salaryType}
        salaryAmount={data.salaryAmount}
        sex={data.sex}
      />
      <ContentBox content={data.jobContent} />
      <EmployerBox employeeId={data.cpUserId} />
      <div className="flex justify-center gap-[20px]">
        <button className="w-[168px] flex gap-[30px] items-center p-[20px] border rounded rounded-[10px]">
          <ScrapIcon />
          스크랩
        </button>
        <button className="w-[168px] flex gap-[30px] items-center p-[20px] bg-[#FFDB80] rounded rounded-[10px]">
          <ChatIcon />
          채팅
        </button>
      </div>
    </main>
  );
};

export default Page;
