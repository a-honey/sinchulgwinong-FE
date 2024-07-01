import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export type LoginType = "GOOGLE";

export interface EmployeeSignUpBody {
  username: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
  agreeToTerms: boolean;
  loginType: LoginType;
}

export default async function postEmployeeSocialSignUpExtraInfo(
  body: EmployeeSignUpBody
) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(
      `/social-login/additional-info`,
      body
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
