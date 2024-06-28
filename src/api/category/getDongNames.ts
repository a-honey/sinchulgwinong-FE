import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function getDongNames(city: string, district: string) {
  try {
    const response = await apiInstance.get<ResponseDTO<string[]>>(
      `/job-boards/locality-name?region-name=${city}&sub-region-name=${district}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
