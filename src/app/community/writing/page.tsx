"use client";

import { PostBody } from "@/api/community/postCommunityPost";
import { useForm } from "react-hook-form";

const Writing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostBody>();

  const onSubmit = () => {
    console.log("제출");
  };

  return (
    <main className="mt-[72px] px-[130px]">
      <h1 className="text-[36px] mb-[40px]">게시글 작성</h1>
      <form
        className="flex flex-col items-end gap-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full p-[20px] border"
          placeholder="제목을 입력해주세요."
          {...register("boardTitle", { required: true })}
        />
        <textarea
          className="w-full p-[20px] border"
          rows={15}
          placeholder="글을 입력해주세요."
          {...register("boardContent", { required: true })}
        />
        <div className="flex gap-[10px]">
          <button type="button">취소</button>
          <button type="submit">등록</button>
        </div>
      </form>
    </main>
  );
};

export default Writing;
