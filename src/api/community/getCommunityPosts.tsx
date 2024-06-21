import apiInstance from "../apiInstance";

export default async function getCommunityPosts() {
  try {
    const response = await apiInstance.get(`/boards`);

    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}
