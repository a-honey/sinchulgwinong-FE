import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export interface VerifyAuthenticationNumberBody {
  email: string;
  code: string;
}
export default async function postVerifyAuthenticationNumber(
  body: VerifyAuthenticationNumberBody
) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(
      `/email/verifyCode`,
      body
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
