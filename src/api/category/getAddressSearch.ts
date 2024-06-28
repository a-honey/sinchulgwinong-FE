import {
  JobPostType,
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../apiInstance";

interface PostsType extends ResponseOffsetPagination {
  totalJobBoardCount: number;
  jobBoardResponseDTOS: JobPostType[];
}

export interface AddressType {
  city: string;
  district: string;
  dong: string;
}

interface Props extends PaginationProps {
  address: AddressType;
}
export default async function getAddressSearch({ address, page, size }: Props) {
  try {
    const response = await apiInstance.post<ResponseDTO<PostsType>>(
      `/job-boards/locality-category?pag=${page}&size=${size}`,
      {
        regionName: address.city,
        subRegionName: address.district,
        localityName: address.dong,
      }
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
