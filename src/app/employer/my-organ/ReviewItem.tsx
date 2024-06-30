import Button from "@/components/Button";
import Link from "next/link";
import { 리뷰중단요청 } from "@/constants";

interface ReviewItemProps {
  title: string;
  star: number;
  content: string;
}

const ReviewItem = ({ title, star, content }: ReviewItemProps) => {
  return (
    <div className="p-[40px] flex flex-col gap-[40px] border rounded-[5px] min-h-[200px]">
      <div className="flex items-center justify-between">
        <div className="subTitle1">
          {title} | {star}
        </div>
        <Link href={리뷰중단요청}>
          <Button
            className="w-[200px]"
            variants="yellow"
            text="게시 중단 요청"
          />
        </Link>
      </div>
      <div className="subTitle2">{content}</div>
    </div>
  );
};

export default ReviewItem;
