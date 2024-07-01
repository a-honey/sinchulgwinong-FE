"use client";

import Blank from "@/components/StatusComponents/Empty";
import Container from "../ui/Container";
import getCommunityPostsScrap from "@/api/scrap/getCommunityPostsScrap";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const PostBox = () => {
  const { data } = useUpdateFetch(getCommunityPostsScrap);
  return (
    <Container title="작성한 글 목록" subTitle="작성한 글 내역">
      <div className="flex flex-col gap-[5px]">
        {data?.boards.length === 0 && <Blank />}
        {data?.boards.map((community) => (
          <div key={community.boardId}>{community.title}</div>
        ))}
      </div>
    </Container>
  );
};

export default PostBox;
