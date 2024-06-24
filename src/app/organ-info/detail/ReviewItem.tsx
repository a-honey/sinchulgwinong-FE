import { ReviewType } from "@/types";

const ReviewItem = ({
  reviewContent,
  reviewTitle,
}: Pick<ReviewType, "reviewTitle" | "reviewContent">) => {
  return (
    <div className="flex flex-col gap-[20px] bg-[#f4f4f4] min-h-[200px]">
      <div>{reviewTitle}</div>
      <div>{reviewContent}</div>
    </div>
  );
};

export default ReviewItem;
