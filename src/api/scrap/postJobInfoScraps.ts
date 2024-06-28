import apiInstance from "../apiInstance";

export default async function postJobInfoScrap(boardId: number) {
  try {
    const response = await apiInstance.post(
      `/scraps/job-boards/${boardId}`,
      ""
    );

    return response;
  } catch (e) {
    console.log(e);
  }
}
