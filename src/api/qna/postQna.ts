import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

interface PostQnaType {
  faqTitle: "제목";
  faqContent: "내용";
}

export default async function postQna(body: PostQnaType) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(`/faqs`, body);

    return response.data;
  } catch (e) {}
}
