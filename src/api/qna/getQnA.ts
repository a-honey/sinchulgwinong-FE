import {
  PaginationProps,
  ResponseDTO,
  ResponseOffsetPagination,
} from "@/types";

import apiInstance from "../apiInstance";

interface QnaListType extends ResponseOffsetPagination {
  faqs: QnaType[];
  totalFaqCount: number;
}

interface QnaProps extends PaginationProps {
  sort: string;
}
export default async function getQnA({ page, size, sort }: QnaProps) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    });
    const response = await apiInstance.get<ResponseDTO<QnaListType>>(
      `/faqs?${params}&sort=${sort}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
