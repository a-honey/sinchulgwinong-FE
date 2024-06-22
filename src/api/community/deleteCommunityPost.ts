import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function deleteCommunityPost(postId: number) {
  try {
    const response = await apiInstance.delete<ResponseDTO<string>>(
      `/boards/${postId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
