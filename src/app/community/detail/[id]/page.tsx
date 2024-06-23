"use client";

import CommentBox from "./CommentBox";
import getCommunityPost from "@/api/community/getCommunityPost";
import { getFormattedDate } from "@/lib/utils";
import { useCallback } from "react";
import { useParams } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const Detail = () => {
  const params = useParams();

  const boardId = +params.id;

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
              뽀송이 |{" "}
              <span className="text-[#9F9F9F]">
                {getFormattedDate(data.createdAt)}
              </span>
            </div>
            <div>조회 30 | 스크랩20 | 댓글2</div>
          </div>
        </div>
        <div className="my-[60px]">{data?.content}</div>
        <CommentBox boardId={boardId} />
      </section>
    </main>
  );
};

export default Detail;
