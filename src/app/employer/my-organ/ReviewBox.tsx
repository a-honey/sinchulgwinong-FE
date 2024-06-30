"use client";

import ReviewItem from "./ReviewItem";
import getMyOrganReviews from "@/api/employer/getMyOrganReviews";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const ReviewBox = () => {
  const { data } = useUpdateFetch(getMyOrganReviews);

  return (
    <div className="mt-[40px]">
      <div className="subTitle1">
        전체 리뷰 통계({data?.totalReviewCount ?? 0}개)
      </div>
      <div className="mt-[40px]">
        {data?.reviews.map((review) => (
          <ReviewItem
            key={review.reviewId}
            title={review.reviewTitle}
            content={review.reviewContent}
            star={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewBox;
