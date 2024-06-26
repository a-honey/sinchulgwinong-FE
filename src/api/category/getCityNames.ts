import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function getCityNames() {
  try {
    const response = await apiInstance.get<ResponseDTO<string[]>>(
      `/job-boards/region-name`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
