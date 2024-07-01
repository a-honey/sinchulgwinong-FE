import { SalaryType } from "@/types";
import apiInstance from "../apiInstance";
import { baseURL } from "@/constants/env";

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

export default async function postJobInfoPost({
  body,
  onSuccess,
}: {
  body: FormData;
  onSuccess: () => void;
}) {
  try {
    const response = await fetch(`${baseURL}/job-boards`, {
      method: "POST",
      body,
      credentials: "include",
    });

    onSuccess();
    return response;
  } catch (e) {
    console.log(e);
  }
}
