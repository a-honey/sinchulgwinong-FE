import { JobPostType, ResponseDTO } from "@/types";

import apiInstance from "../../apiInstance";

export default async function getJobInfoPost(jobPostId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<JobPostType>>(
      `/reviews/1/view`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
