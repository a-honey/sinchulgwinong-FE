import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

interface PostQnaType {
  faqTitle: "제목";
  faqContent: "내용";
}

export default async function patchQna(body: PostQnaType) {
  try {
    const response = await apiInstance.patch<ResponseDTO<string>>(
      `/faqs`,
      body
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
