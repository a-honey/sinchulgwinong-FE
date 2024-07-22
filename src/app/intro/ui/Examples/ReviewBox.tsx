"use client";

import { Suspense, lazy, useCallback } from "react";

import BannerCard from "./BannerCard";
import Container from "./Container";
import { OrganSortEnum } from "@/api/organ";
import Paths from "@/constants/paths";
import ReviewCard from "./ReviewCard";
import getOrgans from "@/api/organ/getOrgans";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const StoreObject = lazy(() => import("@/assets/icons/StoreObject"));

const ReviewBox = () => {
  const { data } = useUpdateFetch(
    useCallback(
      () =>
        getOrgans({ page: 0, size: 3, sort: OrganSortEnum.ReviewsDesc.value }),
      []
    )
  );

  return (
    <Container
      titleElement={
        <div className="title1 text-[32px]">
          “ 인기있는{" "}
          <span className="text-[32px] font-semibold text-[#7C3B00]">
            기업 정보
          </span>
          를 확인하세요! “
        </div>
      }
      description="리뷰 확인하고 일 시작하세요"
    >
      <div className="grid grid-cols-4 h-[362px] w-full gap-[25px]">
        <BannerCard
          moveTo={Paths.ORGAN_INFO}
          color="primary4"
          title="기업 정보"
          description="기업 정보를 확인하세요"
          icon={
            <Suspense fallback={<div>Loading...</div>}>
              <StoreObject width={85} height={94.11} />
            </Suspense>
          }
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
