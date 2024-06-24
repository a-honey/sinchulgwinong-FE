import { JobPostType, ResponseDTO, ResponseOffsetPagination } from "@/types";

import apiInstance from "../apiInstance";
import { baseURL } from "@/constants/env";

interface PostsType extends ResponseOffsetPagination {
  totalJobBoardCount: number;
  jobBoardResponseDTOS: JobPostType[];
}

interface ApiResponse {
  data: PostsType;
}

export default async function getMyJobInfo(
  userId: number
): Promise<ApiResponse | undefined> {
  if (userId === 0) return;

  try {
    const response = await fetch(
      `${baseURL}/job-boards/cp-user/${userId}/my-job-boards`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}
