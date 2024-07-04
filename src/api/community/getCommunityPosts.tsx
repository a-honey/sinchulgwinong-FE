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

interface PostProps extends PaginationProps {
  keyword?: string;
}

export default async function getCommunityPosts({
  page,
  size,
  keyword,
}: PostProps) {
  try {
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      keyword
        ? `/boards/find-boards?board-title=${keyword}&page=${page}&size=${size}`
        : `/boards?page=${page}&size=${size}`
    );

    return response.data;
  } catch (e) {}
}
