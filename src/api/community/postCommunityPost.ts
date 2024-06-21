import apiInstance from "../apiInstance";

export interface PostBody {
  boardTitle: string;
  boardContent: string;
}

export default async function postCommunityPost(body: PostBody) {
  try {
    const response = await apiInstance.post(`/boards`, body);

    const res = await response.json();
    console.log(res.message);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
