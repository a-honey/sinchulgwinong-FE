import { SalaryType } from "@/types";
import apiInstance from "../apiInstance";

export interface Payload {
  jobTitle: string;
  jobContent: string;
  regionName: string;
  subRegionName: string;
  localityName: string;
  majorCategoryName: string;
  minorCategoryName: string;
  jobEndDate: "2024-06-22";
  salaryAmount: number;
  sex: string;
  address: string;
  salaryType: SalaryType;
}
export interface PostBody {
  images?: ["string"];
  request: Payload;
}

export default async function postJobInfoPost(body: FormData) {
  try {
    const response = await apiInstance.post(`/job-boards`, body, {
      "Content-Type": "multipart/form-data",
      Accept: "application/json, text/html",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
