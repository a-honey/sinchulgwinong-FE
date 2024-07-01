import { cn, getFormattedDate } from "@/lib/utils";

import Blank from "@/components/StatusComponents/Empty";
import Button from "@/components/Button";
import CommentForm from "./CommentForm";
import { Input } from "@/components/ui/input";
import getPostComments from "@/api/community/comment/getPostComments";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const CommentBox = ({ boardId }: { boardId: number }) => {
  const { data } = useUpdateFetch(
    useCallback(() => getPostComments({ boardId, page: 0, size: 7 }), [boardId])
  );

  return (
    <section>
      <CommentForm boardId={boardId} />
      <div className="mt-[15px] flex flex-col gap-[10px]">
        <div>댓글 {data?.totalCommentCount ?? 0}개</div>
        {data?.comment.length === 0 && <Blank />}
        {data?.comment.map((comment, index) => (
          <div
            key={comment.commentId}
            className={cn(
              "flex gap-[40px] py-[15px] border-b",
              index === 0 && "border-t"
            )}
          >
            <div>
              {comment.nickName} | {getFormattedDate(comment.createdAt)}
            </div>
            <div>{comment.commentContent}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentBox;
