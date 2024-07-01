"use client";

import Blank from "@/components/StatusComponents/Empty";
import Container from "../ui/Container";
import getJobInfoPostsScrap from "@/api/scrap/getJobInfoPostsScrap";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const JobScrapBox = () => {
  const { data } = useUpdateFetch(getJobInfoPostsScrap);
  return (
    <Container title="채용 정보 스크랩" subTitle="스크랩 내역">
      <div>
        {data?.jobBoardResponseDTOS.length === 0 && <Blank />}
        {data?.jobBoardResponseDTOS.map((job) => (
          <div key={job.jobBoardId}>{job.jobTitle}</div>
        ))}
      </div>
    </Container>
  );
};

export default JobScrapBox;
