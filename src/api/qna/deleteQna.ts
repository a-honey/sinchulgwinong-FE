import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export default async function deleteQna(qnaId: number) {
  try {
    const response = await apiInstance.delete<ResponseDTO<string>>(
      `/faqs/${qnaId}`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
