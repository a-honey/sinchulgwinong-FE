import apiInstance from "../apiInstance";

export default async function postLogout(onSuccess?: () => void) {
  try {
    const response = await apiInstance.post(`/auth/logout`, "");

    onSuccess?.();
    return response;
  } catch (e) {
    console.log(e);
  }
}
