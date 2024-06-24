"use client";

import Blank from "@/components/Blank";
import Container from "../ui/Container";
import getOrganInfoPostsScrap from "@/api/scrap/getOrganInfoPostsScrap";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const OrganScrapBox = () => {
  const { data } = useUpdateFetch(getOrganInfoPostsScrap);
  return (
    <Container title="채용 정보 스크랩" subTitle="스크랩 내역">
      <div>
        {data?.cpUserProfileResponseDTOS.length === 0 && <Blank />}
        {data?.cpUserProfileResponseDTOS.map((organ) => (
          <div key={organ.cpUserId}>{organ.cpUsername}</div>
        ))}
      </div>
    </Container>
  );
};

export default OrganScrapBox;
