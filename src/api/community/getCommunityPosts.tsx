import { CommunityPostType, ResponseDTO, ResponsePagination } from "@/types";

import apiInstance from "../apiInstance";

interface CommunityPostsType extends ResponsePagination {
  totalBoardCount: number;
  boards: CommunityPostType[];
}

export default async function getCommunityPosts() {
  try {
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/boards`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
