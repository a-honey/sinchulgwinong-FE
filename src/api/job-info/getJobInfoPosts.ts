import apiInstance from "../apiInstance";

export default async function getJobInfoPosts() {
  try {
    const response = await apiInstance.get(`/jobBoards`);

    const res = await response.json();
    console.log(res.message);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
