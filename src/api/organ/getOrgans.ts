import {
  JobPostType,
  OrganInfoType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../apiInstance";

interface CommunityPostsType extends ResponseOffsetPagination {
  totalCpUserCount: number;
  cpUsers: OrganInfoType[];
}

export default async function getOrgans({ page, size }: PaginationProps) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/cpUsers?${params}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
