import {
  CursorPaginationProps,
  LoginType,
  ResponseCursorPagination,
  ResponseDTO,
} from "@/types";

import apiInstance from "../apiInstance";

interface PointHistoryType {
  type: "SIGNUP";
  usedPoint: number;
  createdAt: "2024-06-18";
}

export default async function getUsedPointHistory({
  cursorId,
  limit = 6,
}: CursorPaginationProps) {
  const params = new URLSearchParams({
    cursorId: cursorId.toString(),
    limit: limit.toString(),
  });
  try {
    const response = await apiInstance.get<
      ResponseDTO<ResponseCursorPagination<PointHistoryType>>
    >(`/points/used?${params}`);

    return response.data;
  } catch (e) {}
}
