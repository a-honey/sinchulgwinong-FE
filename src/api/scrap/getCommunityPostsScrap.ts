import {
  CommunityPostType,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../apiInstance";

interface ScrapType extends ResponseOffsetPagination {
  totalBoardCount: number;
  boards: CommunityPostType[];
}

export default async function getCommunityPostsScrap() {
  try {
    const response = await apiInstance.get<ResponseDTO<ScrapType>>(
      `/scraps/boards`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
