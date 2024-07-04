import { CommunityPostType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

export default async function getCommunityPost(postId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<CommunityPostType>>(
      `/boards/${postId}`
    );

    return response.data;
  } catch (e) {}
}
