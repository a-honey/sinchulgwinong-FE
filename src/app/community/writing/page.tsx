"use client";

import postCommunityPost, { PostBody } from "@/api/community/postCommunityPost";

import Button from "@/components/Button";
import Editor from "@/components/Editor";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Writing = () => {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostBody>();

  const onSubmit = (data: PostBody) => {
    postCommunityPost(data);
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
        {errors.boardTitle && (
          <span className="text-red">제목을 입력해주세요.</span>
        )}
        <textarea
          className="w-full p-[20px] border"
          rows={15}
          placeholder="글을 입력해주세요."
          {...register("boardContent", { required: true })}
        />
        <Editor control={control} name="content" />
        {errors.boardContent && (
          <span className="text-red">내용을 입력해주세요</span>
        )}
        <div className="flex gap-[10px] w-[200px]">
          <Button
            type="button"
            text="취소"
            className="border border-[#787878]"
            onClick={() => {
              router.back();
            }}
          />
          <Button type="submit" text="등록" variants="yellow" />
        </div>
      </form>
    </main>
  );
};

export default Writing;
