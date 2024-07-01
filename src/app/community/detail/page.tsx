"use client";

import { Suspense, useCallback } from "react";

import CommentBox from "./CommentBox";
import getCommunityPost from "@/api/community/getCommunityPost";
import { getFormattedDate } from "@/lib/utils";
import postCommunityScrap from "@/api/scrap/postCommunityScraps";
import { useSearchParams } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Page = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Detail />
    </Suspense>
  );
};

export default Page;

const Detail = () => {
  const searchParams = useSearchParams();

  const boardId = +searchParams.get("boardId")!;

  const { data } = useUpdateFetch(
    useCallback(() => getCommunityPost(boardId), [boardId])
  );

  if (!data) return;

  return (
    <main className="p-[20px]">
      <section className="p-[20px] border">
        <div className="border-b py-[20px] flex flex-col gap-[20px]">
          <h1 className="text-[36px]">{data.title}</h1>
          <div className="flex justify-between">
            <div>
              {data.nickName} |{" "}
              <span className="text-[#9F9F9F]">
                {getFormattedDate(data.createdAt)}
              </span>
            </div>
            <div>
              댓글{data.commentCount} |{" "}
              <span
                className="cursor-pointer"
                onClick={() => {
                  postCommunityScrap(boardId);
                }}
              >
                스크랩
              </span>
            </div>
          </div>
        </div>
        <div className="my-[60px]">{data?.content}</div>
        <CommentBox boardId={boardId} />
      </section>
    </main>
  );
};
