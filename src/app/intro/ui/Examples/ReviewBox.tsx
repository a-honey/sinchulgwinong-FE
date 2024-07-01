"use client";

import BannerCard from "./BannerCard";
import Container from "./Container";
import Paths from "@/constants/paths";
import ReviewCard from "./ReviewCard";
import StoreObject from "@/assets/icons/StoreObject";
import getOrgans from "@/api/organ/getOrgans";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewBox = () => {
  const { data } = useUpdateFetch(
    useCallback(() => getOrgans({ page: 0, size: 3, sort: "reviewDesc" }), [])
  );

  return (
    <Container
      beforeTitle="인기있는"
      pointTitle="기업 정보"
      afterTitle="를 확인하세요!"
      description="리뷰 확인하고 일 시작하세요"
    >
      <div className="grid grid-cols-4 h-[362px] w-full gap-[25px]">
        <BannerCard
          moveTo={Paths.ORGAN_INFO}
          color="primary4"
          title="기업 정보"
          description="기업 정보를 확인하세요"
          icon={<StoreObject width={85} height={94.11} />}
        />
        {data?.cpUsers.map((organ) => (
          <ReviewCard
            key={organ.cpUserId}
            organId={organ.cpUserId}
            name={organ.cpName}
            viewCount={organ.viewCount}
            reviewCount={organ.reviewCount ?? 0}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReviewBox;
