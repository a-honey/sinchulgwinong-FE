"use client";

import Blank from "@/components/StatusComponents/Empty";
import Container from "../ui/Container";
import getCommunityPostsScrap from "@/api/scrap/getCommunityPostsScrap";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const CommunityScrapBox = () => {
  const { data } = useUpdateFetch(getCommunityPostsScrap);
  return (
    <Container title="게시글 스크랩" subTitle="스크랩 내역">
      <div>
        {data?.boards.length === 0 && <Blank />}
        {data?.boards.map((community) => (
          <div key={community.boardId}>{community.title}</div>
        ))}
      </div>
    </Container>
  );
};

export default CommunityScrapBox;
