import {
  OrganInfoType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";
import { OrganSortEnum, OrganSortType } from ".";

import apiInstance from "../apiInstance";

export interface GetOrgansProps extends PaginationProps {
  sort?: OrganSortType;
}
interface CommunityPostsType extends ResponseOffsetPagination {
  totalCpUserCount: number;
  cpUsers: OrganInfoType[];
}

export default async function getOrgans({
  page,
  size,
  sort = OrganSortEnum.CreatedAtDesc.value,
}: GetOrgansProps) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      ...(sort && { sort }),
    });
    const response = await apiInstance.get<ResponseDTO<CommunityPostsType>>(
      `/cpUsers?${params}`
    );

    return response.data;
  } catch (e) {}
}
