import {
  JobPostType,
  PaginationProps,
  ResponseDTO,
  ResponsePagination,
} from "@/types";

import apiInstance from "../apiInstance";

interface CommunityPostsType extends ResponsePagination {
  totalJobBoardCount: number;
  jobBoardResponseDTOS: JobPostType[];
}

export default async function getJobInfoPosts({ page, size }: PaginationProps) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/job-boards?${params}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
