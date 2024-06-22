import { LoginType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

export interface EmployeeSignUpBody {
  username: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
  agreeToTerms: true;
  loginType: LoginType;
}

interface SignUpProps {}

export default async function postEmployeeSignUp(body: EmployeeSignUpBody) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(
      `/auth/signup`,
      body
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
