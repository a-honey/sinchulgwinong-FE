import {
  CommentType,
  PaginationProps,
  ResponseDTO,
  ResponsePagination,
} from "@/types";

import apiInstance from "../../apiInstance";

interface CommentsProps extends PaginationProps {
  boardId: number;
}
export interface CommentsType extends ResponsePagination {
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
  } catch (e) {
    console.log(e);
  }
}
