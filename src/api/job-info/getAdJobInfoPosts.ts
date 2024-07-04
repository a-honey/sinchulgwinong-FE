import { JobPostType, ResponseDTO, ResponseOffsetPagination } from "@/types";

import apiInstance from "../apiInstance";

interface CommunityPostsType extends ResponseOffsetPagination {
  totalJobBoardCount: number;
  jobBoardResponseDTOS: JobPostType[];
}

export default async function getAdJobInfoPosts() {
  try {
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/job-boards/ad-job-boards`
    );

    return response.data;
  } catch (e) {}
}
