import apiInstance from "../apiInstance";

export default async function postLogout() {
  try {
    const response = await apiInstance.post(`/로그아웃`, "");

    return response;
  } catch (e) {
    console.log(e);
  }
}
