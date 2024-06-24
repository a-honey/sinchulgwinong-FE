import {
  CommentType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../../apiInstance";

export interface CommentsType extends ResponseOffsetPagination {
  totalCommentCount: number;
  comment: CommentType[];
}

export default async function getMyComments() {
  try {
    const response = await apiInstance.get<ResponseDTO<CommentsType>>(
      `/comments/my-comments`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
