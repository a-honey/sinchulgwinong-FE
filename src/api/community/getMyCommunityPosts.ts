import {
  CommunityPostType,
  PaginationProps,
  ResponseDTO,
  ResponsePagination,
} from "@/types";

import apiInstance from "../apiInstance";

export interface CommunityPostsType extends ResponsePagination {
  totalBoardCount: number;
  boards: CommunityPostType[];
}

export default async function getMyCommunityPosts({
  page,
  size,
}: PaginationProps) {
  try {
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/boards/my-boards?page=${page}&size=${size}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
