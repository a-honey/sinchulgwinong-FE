import { JobPostType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

export default async function getGoogleToken(code: string) {
  try {
    const response = await apiInstance.get<ResponseDTO<JobPostType>>(
      `/social-login/callback?code=${code}`
    );

    return response.data;
  } catch (e) {
    throw new Error("계정없음");
  }
}
