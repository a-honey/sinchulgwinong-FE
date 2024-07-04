import { LoginType, ResponseCursorPagination, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

interface PointHistoryType {
  type: "SIGNUP";
  savedPoint: number;
  createdAt: "2024-06-18";
}

export default async function getSavedPointHistory() {
  try {
    const response = await apiInstance.get<
      ResponseDTO<ResponseCursorPagination<PointHistoryType>>
    >(`/points/saved`);

    return response.data;
  } catch (e) {}
}
