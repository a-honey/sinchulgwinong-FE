import { ReviewType } from "@/types";

interface ReviewItemProps
  extends Pick<ReviewType, "reviewTitle" | "reviewContent"> {
  ratingStars: string;
}

const ReviewItem = ({
  reviewContent,
  reviewTitle,
  ratingStars,
}: ReviewItemProps) => {
  return (
    <div className="p-[40px] flex flex-col gap-[40px] border rounded-[5px] bg-[#000000] min-h-[200px]">
      <div className="subTitle1">
        {reviewTitle} | {ratingStars}
      </div>
      <div className="subTitle2">{reviewContent}</div>
    </div>
  );
};

export default ReviewItem;
