import Link from "next/link";

interface ReviewCardProps {
  organId: number;
  name: string;
  viewCount: number;
  reviewCount: number;
}

const ReviewCard = ({
  organId,
  name,
  viewCount,
  reviewCount,
}: ReviewCardProps) => {
  return (
    <Link
      href={`/organ-info/detail?organId=${organId}`}
      className="relative flex flex-col justify-between py-[40px] px-[20px] items-end border-t-[11px] border-primary4 border-l-[1px] border-r-[1px] border-b-[1px] bg-white h-full"
    >
      <div className="w-full flex flex-col gap-[20px]">
        <div className="title1">{name}</div>
      </div>
      <div className="absolute right-[15px] bottom-[20px]">
        <div className="detail1">
          리뷰 개수 <span className="title2 text-primary4">{reviewCount}</span>
        </div>
        <div className="detail1">
          조회수 <span className="title2 text-primary4">{viewCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
