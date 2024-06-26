import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function getDistrictNames(city: string) {
  try {
    const response = await apiInstance.get<ResponseDTO<string[]>>(
      `/job-boards/sub-region-name?region-name=${city}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
