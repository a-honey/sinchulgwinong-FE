import { ResponseDTO, ReviewType } from "@/types";

import apiInstance from "../../apiInstance";

export default async function postBuyReview(reviewId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<ReviewType>>(
      `/reviews/${reviewId}/view`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
