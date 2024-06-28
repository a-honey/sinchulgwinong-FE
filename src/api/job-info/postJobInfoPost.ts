import { SalaryType } from "@/types";
import apiInstance from "../apiInstance";

export interface PostBody {
  images?: ["string"];
  request: {
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
  };
}

export default async function postJobInfoPost(body: FormData) {
  try {
    const response = await apiInstance.post(`/job-boards`, body, {
      "Content-Type": "multipart/form-data",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
