"use client";

import { Suspense, useCallback } from "react";

import Button from "@/components/Button";
import ReviewList from "./ReviewList";
import getEmployerInfo from "@/api/employer/getEmployerInfo";
import postOrganScrap from "@/api/scrap/postOrganScraps";
import { useSearchParams } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Page = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <DetailOrgan />
    </Suspense>
  );
};

export default Page;

const DetailOrgan = () => {
  const searchParams = useSearchParams();

  const organId = +searchParams.get("organId")!;

  const { data } = useUpdateFetch(
    useCallback(() => getEmployerInfo(organId), [organId])
  );

  if (!data) return;

  return (
    <main className="mt-[72px] flex flex-col gap-[60px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between">
          <h1 className="text-[36px]">기업 정보 상세 보기</h1>
          <Button
            text="스크랩"
            variants="yellow"
            className="w-[150px]"
            onClick={() => {
              postOrganScrap(organId);
            }}
          />
        </div>
        <div className="flex flex-col gap-[15px] p-[40px] border">
          <div className="title1">{data.cpName}</div>
          <div className="subTitle1">기본 정보</div>
          <div className="flex flex-col gap-[15px] bg-[#F4F4F4] p-[20px]">
            <div className="flex">
              <label className="w-[100px] label">기업명</label>
              <div>{data.cpName}</div>
            </div>
            <div className="flex">
              <label className="w-[100px] label">대표자명</label>
              <div>{data.cpUsername}</div>
            </div>
            <div className="flex">
              <label className="w-[100px] label">설립일</label>
              <div>{data.foundationDate}</div>
            </div>
            <div className="flex">
              <label className="w-[100px] label">이메일주소</label>
              <div>{data.cpEmail}</div>
            </div>
            <div className="flex">
              <label className="w-[100px] label">전화번호</label>
              <div>{data.cpNum}</div>
            </div>
          </div>
        </div>
      </div>
      <ReviewList organId={organId} />
    </main>
  );
};
