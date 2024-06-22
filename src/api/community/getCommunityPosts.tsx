import {
  CommunityPostType,
  PaginationProps,
  ResponseDTO,
  ResponsePagination,
} from "@/types";

import apiInstance from "../apiInstance";

interface CommunityPostsType extends ResponsePagination {
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
