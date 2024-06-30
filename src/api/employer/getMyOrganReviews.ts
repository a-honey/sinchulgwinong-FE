import { ResponseDTO, ResponseOffsetPagination, ReviewType } from "@/types";

import apiInstance from "../apiInstance";

export interface MyOrganReviewsType extends ResponseOffsetPagination {
  totalReviewCount: number;
  reviews: ReviewType[];
}

export default async function getMyOrganReviews() {
  try {
    const response = await apiInstance.get<ResponseDTO<MyOrganReviewsType>>(
      `/cpUsers/self/reviews`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
