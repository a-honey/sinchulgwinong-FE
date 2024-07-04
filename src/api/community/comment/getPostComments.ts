import {
  CommentType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../../apiInstance";

interface CommentsProps extends PaginationProps {
  boardId: number;
}
export interface CommentsType extends ResponseOffsetPagination {
  totalCommentCount: number;
  comment: CommentType[];
}

export default async function getPostComments({
  boardId,
  page,
  size,
}: CommentsProps) {
  try {
    const response = await apiInstance.get<ResponseDTO<CommentsType>>(
      `/comments/boards/${boardId}?page=${page}&size=${size}`
    );

    return response.data;
  } catch (e) {}
}
