import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function getJobSubCategory(category: string) {
  try {
    const response = await apiInstance.get<ResponseDTO<string[]>>(
      `/job-boards/minor-category-name?major-category-name=${category}`
    );

    return response.data;
  } catch (e) {}
}
