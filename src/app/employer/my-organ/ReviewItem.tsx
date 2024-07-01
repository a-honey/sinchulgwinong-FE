"use client";

import Button from "@/components/Button";
import Link from "next/link";
import getMyEmployerInfo from "@/api/employer/getMyEmployerInfo";
import postReviewSuspends from "@/api/employer/postReviewSuspend";
import useUpdateFetch from "@/hooks/useUpdateFetch";
import { 리뷰중단요청 } from "@/constants";

interface ReviewItemProps {
  title: string;
  star: number;
  reviewId: number;
  content: string;
}

const ReviewItem = ({ title, reviewId, star, content }: ReviewItemProps) => {
  const { data } = useUpdateFetch(getMyEmployerInfo);

  const onClickSuspend = () => {
    if (!data) return;
    postReviewSuspends({
      reviewId,
      cpEmail: data.cpEmail,
      cpNum: data.cpNum,
      reason: "",
    });
  };

  return (
    <div className="p-[40px] flex flex-col gap-[40px] border rounded-[5px] min-h-[200px]">
      <div className="flex items-center justify-between">
        <div className="subTitle1">
          {title} | {star}
        </div>
        <Link href={리뷰중단요청} onClick={onClickSuspend}>
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
