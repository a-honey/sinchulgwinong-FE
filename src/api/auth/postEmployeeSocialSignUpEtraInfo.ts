import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export type LoginType = "GOOGLE";

export interface EmployeeSocialSignUpExtraBody {
  username: string;
  nickname: string;
  code: string;
  phoneNumber: string;
  agreeToTerms: boolean;
  loginType: LoginType;
}

export default async function postEmployeeSocialSignUpExtraInfo(
  body: EmployeeSocialSignUpExtraBody
) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(
      `/social-login/additional-info`,
      body
    );

    return response.data;
  } catch (e) {}
}
