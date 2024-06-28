"use client";

import postReview, { PostReviewType } from "@/api/organ/review/postReview";

import Editor from "@/components/Editor";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

const Writing = () => {
  const { register, handleSubmit, control } = useForm<PostReviewType>();
  const searchParams = useSearchParams();

  const organId = +searchParams.get("organId")!;

  const onSubmit = (data: PostReviewType) => {
    postReview({ ...data, cpUserId: organId });
  };

  return (
    <main className="flex flex-col gap-[40px] mt-[72px]">
      <h1 className="text-[36px]">기업 리뷰 작성하기</h1>
      <form
        className="flex flex-col gap-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-[10px]">
          <label className="subTitle1 w-[45px]">별점</label>
          <Input {...register("rating")} placeholder="숫자를 입력해주세요" />
        </div>
        <div className="flex items-center gap-[10px]">
          <label className="subTitle1 w-[45px]">제목</label>
          <Input
            {...register("reviewTitle")}
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className="flex gap-[10px] items-center h-[500px] mb-[50px]">
          <label className="subTitle1 w-[45px]">내용</label>
          <Editor control={control} name="reviewContent" />
        </div>
      </form>
    </main>
  );
};

export default Writing;
