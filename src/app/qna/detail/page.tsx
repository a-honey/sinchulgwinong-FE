"use client";

import { Suspense, useCallback } from "react";

import { getFormattedDate } from "@/lib/utils";
import getQnaContent from "@/api/qna/getQnaContent";
import { useSearchParams } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Page = () => {
  return (
    <Suspense>
      <Detail />
    </Suspense>
  );
};

export default Page;

const Detail = () => {
  const searchParams = useSearchParams();

  const qnaId = +searchParams.get("qnaId")!;

  const { data } = useUpdateFetch(
    useCallback(() => getQnaContent(qnaId), [qnaId])
  );

  if (!data) return;
  return (
    <main className="mt-[72px]">
      <div>
        <h1 className="text-[36px]">{data.faqTitle}</h1>
        <div>{getFormattedDate(data.createdAt)}</div>
      </div>
      <section className="flex flex-col">
        <div className="flex gap-[40px] py-[50px]">
          <div className="title2 text-[#7C3B00]">Q</div>
          <div className="detail1">{data.faqTitle}</div>
        </div>
        <div className="flex gap-[40px] bg-[#F4F4F4] py-[50px]">
          <div className="title2 text-[#7C3B00]">Q</div>
          <div className="detail1">{data.faqContent}</div>
        </div>
      </section>
    </main>
  );
};
