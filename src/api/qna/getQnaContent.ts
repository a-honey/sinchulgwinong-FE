import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function getQnaContent(qnaId: number) {
  try {
    const response = await apiInstance.get<ResponseDTO<QnaType>>(
      `/faqs/${qnaId}`
    );

    return response.data;
  } catch (e) {}
}
