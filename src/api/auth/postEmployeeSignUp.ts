import { LoginType } from "@/types";
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

export default async function postEmployeeSignUp(body: EmployeeSignUpBody) {
  try {
    const response = await apiInstance.post(`/auth/signup`, body);

    const res = await response.json();
    console.log(res.message);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
