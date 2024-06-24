import {
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
  ReviewType,
} from "@/types";

import apiInstance from "@/api/apiInstance";

interface CommunityPostsType extends ResponseOffsetPagination {
  totalReviewCount: number;
  reviews: ReviewType[];
}

interface GetOrganProps extends PaginationProps {
  organId: number;
}
export default async function getReviews({
  organId,
  page,
  size,
}: GetOrganProps) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/cpUsers/${organId}/reviews?${params}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
