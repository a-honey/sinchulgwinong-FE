import apiInstance from "../apiInstance";

export default async function postJobBoardBannerAd(jobBoardId: number) {
  try {
    const response = await apiInstance.post(
      `/job-boards/${jobBoardId}/ad-job-boards`,
      ""
    );

    return response;
  } catch (e) {}
}
