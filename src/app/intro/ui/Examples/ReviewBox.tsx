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
    useCallback(() => getOrgans({ page: 0, size: 3 }), [])
  );

  return (
    <Container
      beforeTitle="주변"
      pointTitle="최신 리뷰"
      afterTitle="를 확인하세요!"
      description="리뷰 확인하고 일 시작하세요"
    >
      <div className="grid grid-cols-4 h-[362px] w-full gap-[25px]">
        <BannerCard
          moveTo={Paths.QNA}
          color="primary4"
          title="기업 정보"
          description="기업 정보를 확인하세요"
          icon={<StoreObject width={85} height={94.11} />}
        />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </Container>
  );
};

export default ReviewBox;
