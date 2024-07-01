"use client";

import Button from "@/components/Button";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import ReviewItem from "./ReviewItem";
import getReviews from "@/api/organ/review/getReviews";
import postBuyReview from "@/api/organ/review/postBuyReview";
import { transformRatingToStar } from "@/lib/transformUtils";
import { useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewList = ({ organId }: { organId: number }) => {
  const router = useRouter();

  const { currentPage, onPageChange } = usePagination();

  const { data } = useUpdateFetch(
    useCallback(
      () => getReviews({ organId, page: currentPage, size: 2 }),
      [organId, currentPage]
    )
  );

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <div className="subTitle1">
          리뷰 모아보기 | 전체 리뷰 통계({data?.totalReviewCount ?? 0}명)
        </div>
        <Link href={`/organ-info/writing?organId=${organId}`}>
          <button className="px-[25px] py-[15px] bg-primary2 rounded rounded-[5px]">
            리뷰 작성하기
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[25px]">
        {data?.reviews.map((review) =>
          review.isPrivate ? (
            <div
              key={review.reviewId}
              className="flex flex-col items-center justify-center bg-[#f4f4f4] min-h-[200px]"
            >
              <Button
                onClick={() => {
                  postBuyReview(review.reviewId);
                  router.refresh();
                }}
                text="포인트로 리뷰 보기"
                className="bg-primary2 w-[270px] h-[55px]"
              />
            </div>
          ) : (
            <ReviewItem
              ratingStars={transformRatingToStar(review.rating)}
              key={review.reviewId}
              reviewTitle={review.reviewTitle}
              reviewContent={review.reviewContent}
            />
          )
        )}
      </div>
      <Pagination
        onPageChange={onPageChange}
        currentPage={!data ? 1 : data.currentPage + 1}
        totalPages={!data ? 1 : data.totalPages}
      />
    </div>
  );
};

export default ReviewList;
