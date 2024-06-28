import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function getJobCategory() {
  try {
    const response = await apiInstance.get<ResponseDTO<string[]>>(
      `/job-boards/major-category-name`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
