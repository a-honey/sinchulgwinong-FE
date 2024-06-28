import { JobPostType, ResponseDTO } from "@/types";

import apiInstance from "../../apiInstance";

export interface PostReviewType {
  cpUserId: number;
  reviewTitle: string;
  reviewContent: string;
  rating: number;
}

export default async function postReview(body: PostReviewType) {
  try {
    const response = await apiInstance.post<ResponseDTO<JobPostType>>(
      `/reviews`,
      body
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
