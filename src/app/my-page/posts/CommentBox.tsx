"use client";

import Blank from "@/components/StatusComponents/Empty";
import Container from "../ui/Container";
import getMyComments from "@/api/community/comment/getMyComments";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const CommentBox = () => {
  const { data } = useUpdateFetch(getMyComments);
  return (
    <Container title="작성한 댓글 목록" subTitle="작성한 댓글 내역">
      <div>
        {data?.comment.length === 0 && <Blank />}
        {data?.comment.map((comment) => (
          <div key={comment.commentId}>{comment.commentContent}</div>
        ))}
      </div>
    </Container>
  );
};

export default CommentBox;
