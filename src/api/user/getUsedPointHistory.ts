import { LoginType, ResponseCursorPagination, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

interface PointHistoryType {
  type: "SIGNUP";
  usedPoint: number;
  createdAt: "2024-06-18";
}

export default async function getUsedPointHistory() {
  try {
    const response = await apiInstance.get<
      ResponseDTO<ResponseCursorPagination<PointHistoryType>>
    >(`/points/used`);

    return response.data;
  } catch (e) {}
}
