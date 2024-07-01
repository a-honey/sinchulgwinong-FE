import apiInstance from "../apiInstance";

export default async function postLogout() {
  try {
    const response = await apiInstance.post(`/auth/logout`, "");

    return response;
  } catch (e) {
    console.log(e);
  }
}
