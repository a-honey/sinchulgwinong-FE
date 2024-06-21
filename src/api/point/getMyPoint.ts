import apiInstance from "../apiInstance";

export default async function getMyPoint() {
  try {
    const response = await apiInstance.get(`/points`);

    const res = await response.json();
    console.log(res.message);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
