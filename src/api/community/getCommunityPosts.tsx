import {
  CommunityPostType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../apiInstance";

export interface CommunityPostsType extends ResponseOffsetPagination {
  totalBoardCount: number;
  boards: CommunityPostType[];
}

export default async function getCommunityPosts({
  page,
  size,
}: PaginationProps) {
  try {
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/boards?page=${page}&size=${size}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
