import apiInstance from "../apiInstance";

export default async function postOrganScrap(organId: number) {
  try {
    const response = await apiInstance.post(`/scraps/cp-user/${organId}`, "");

    return response;
  } catch (e) {}
}
