import { CommunityPostsType } from "./getCommunityPosts";
import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function patchCommunityPost(
  postId: number,
  body: CommunityPostsType
) {
  try {
    const response = await apiInstance.patch<ResponseDTO<string>>(
      `/boards/${postId}`,
      body
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
