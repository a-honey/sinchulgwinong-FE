import { JobPostType, ResponseDTO, ResponseOffsetPagination } from "@/types";

import apiInstance from "../apiInstance";

interface ScrapType extends ResponseOffsetPagination {
  totalJobBoardCount: number;
  jobBoardResponseDTOS: JobPostType[];
}

export default async function getJobInfoPostsScrap() {
  try {
    const response = await apiInstance.get<ResponseDTO<ScrapType>>(
      `/scraps/job-boards`
    );

    return response.data;
  } catch (e) {}
}
