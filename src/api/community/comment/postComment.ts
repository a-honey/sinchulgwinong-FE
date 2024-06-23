import apiInstance from "../../apiInstance";

export interface CommentPostBody {
  commentContent: string;
}

export default async function postComment(
  boardId: number,
  body: CommentPostBody
) {
  try {
    const response = await apiInstance.post(
      `/comments/boards/${boardId}`,
      body
    );

    return response;
  } catch (e) {
    console.log(e);
  }
}
