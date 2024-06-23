"use client";

import postComment, {
  CommentPostBody,
} from "@/api/community/comment/postComment";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CommentForm = ({ boardId }: { boardId: number }) => {
  const { register, handleSubmit, reset } = useForm<CommentPostBody>();

  const onSubmit = async (body: CommentPostBody) => {
    try {
      await postComment(boardId, body);
      reset();
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <form className="flex gap-[10px]" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="w-full"
        placeholder="댓글을 입력해주세요."
        {...register("commentContent")}
      />
      <Button className="w-[150px]" varients="yellow" text="등록" />
    </form>
  );
};

export default CommentForm;
