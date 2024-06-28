import apiInstance from "../apiInstance";

export default async function postCommunityScrap(boardId: number) {
  try {
    const response = await apiInstance.post(`/scraps/boards/${boardId}`, "");

    return response;
  } catch (e) {
    console.log(e);
  }
}
