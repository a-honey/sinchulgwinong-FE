import { JobPostType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

export default async function getJobInfoPost(jobPostId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<JobPostType>>(
      `/job-boards/${jobPostId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
