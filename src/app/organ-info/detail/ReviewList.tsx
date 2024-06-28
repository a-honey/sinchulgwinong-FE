"use client";

import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import ReviewItem from "./ReviewItem";
import getReviews from "@/api/organ/review/getReviews";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewList = ({ organId }: { organId: number }) => {
  const { currentPage, onPageChange } = usePagination();
  const { data } = useUpdateFetch(
    useCallback(
      () => getReviews({ organId, page: currentPage, size: 2 }),
      [organId, currentPage]
    )
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
        {data.reviews.map((review) =>
          review.isPrivate ? (
            <div
              key={review.reviewId}
              className="flex flex-col justify-center bg-[#f4f4f4] min-h-[200px]"
            >
              <Button
                text="포인트로 리뷰 보기"
                className="w-[270px] h-[55px]"
              />
            </div>
          ) : (
            <ReviewItem
              ratingStars={"★".repeat(review.rating)}
              key={review.reviewId}
              reviewTitle={review.reviewTitle}
              reviewContent={review.reviewContent}
            />
          )
        )}
      </div>
      <Pagination onPageChange={onPageChange} currentPage={1} totalPages={1} />
    </div>
  );
};

export default ReviewList;
