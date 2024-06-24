"use client";

import Pagination from "@/components/Pagination";
import ReviewItem from "./ReviewItem";
import getReviews from "@/api/organ/review/getReviews";
import { useCallback } from "react";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewList = ({ organId }: { organId: number }) => {
  const { data } = useUpdateFetch(
    useCallback(() => getReviews({ organId, page: 0, size: 2 }), [organId])
  );

  if (!data) return;

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <div className="subTitle1">
          리뷰 모아보기 | 전체 리뷰 통계({data.totalReviewCount}명)
        </div>
        <button className="px-[25px] py-[15px] bg-primary2 rounded rounded-[5px]">
          리뷰 작성하기
        </button>
      </div>
      <div className="flex flex-col gap-[25px]">
        {data.reviews.map((review) => (
          <ReviewItem
            key={review.reviewId}
            reviewTitle={review.reviewTitle}
            reviewContent={review.reviewContent}
          />
        ))}
      </div>
      <Pagination
        onPageChange={() => {
          console.log("45");
        }}
        currentPage={1}
        totalPages={1}
      />
    </div>
  );
};

export default ReviewList;
