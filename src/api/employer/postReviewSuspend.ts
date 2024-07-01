import apiInstance from "../apiInstance";

export interface ReviewSuspendsBody {
  reviewId: number;
  cpEmail: string;
  cpNum: string;
  reason: string;
}

export default async function postReviewSuspends(body: ReviewSuspendsBody) {
  try {
    const response = await apiInstance.post(
      `/reviews/visibility-requests`,
      body
    );

    return response;
  } catch (e) {
    console.log(e);
  }
}
