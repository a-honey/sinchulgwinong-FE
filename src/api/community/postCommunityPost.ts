import apiInstance from "../apiInstance";

export interface PostBody {
  boardTitle: string;
  boardContent: string;
}

export default async function postCommunityPost(body: PostBody) {
  try {
    const response = await apiInstance.post(`/boards`, body);

    return response;
  } catch (e) {}
}
