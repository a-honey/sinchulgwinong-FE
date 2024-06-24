"use client";

import BannerCard from "./BannerCard";
import Container from "./Container";
import JobCard from "./JobCard";
import SearchObject from "@/assets/icons/SearchObject";
import getJobInfoPosts from "@/api/job-info/getJobInfoPosts";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const JobBox = () => {
  const { data } = useUpdateFetch(
    useCallback(() => getJobInfoPosts({ page: 0, size: 3 }), [])
  );
  return (
    <Container
      beforeTitle="주변"
      pointTitle="농촌 일자리"
      afterTitle="를 소개할게요!"
      description="농촌 알바하고 돈도 벌고 힐링도 해보아요."
    >
      <div className="grid grid-cols-4 h-[362px] w-full gap-[25px]">
        <BannerCard
          moveTo=""
          title="채용 정보"
          description="더 많은 주변 농촌 일자리 정보를 확인하세요"
          icon={<SearchObject width={111.93} height={82} />}
        />
        {data?.jobBoardResponseDTOS.map((job) => (
          <JobCard
            key={job.jobBoardId}
            id={job.jobBoardId}
            title={job.jobTitle}
            content={job.jobContent}
            address={job.address}
            salaryAmount={job.salaryAmount}
            salaryType={job.salaryType}
          />
        ))}
      </div>
    </Container>
  );
};

export default JobBox;
