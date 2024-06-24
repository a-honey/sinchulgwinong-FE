import { OrganInfoType, ResponseDTO, ResponseOffsetPagination } from "@/types";

import apiInstance from "../apiInstance";

interface ScrapType extends ResponseOffsetPagination {
  CpScrapCount: number;
  cpUserProfileResponseDTOS: OrganInfoType[];
}

export default async function getOrganInfoPostsScrap() {
  try {
    const response = await apiInstance.get<ResponseDTO<ScrapType>>(
      `/scraps/cp-user`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
