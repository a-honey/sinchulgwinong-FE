import { ResponseDTO } from "@/types";
import apiInstance from "../apiInstance";

export interface EmployerSignUpBody {
  hiringStatus: boolean; // ?
  employeeCount: string;
  foundationDate: Date;
  description: string;
  cpNum: string;
  cpName: string;
  cpUsername: string;
  cpEmail: string;
  cpPhoneNumber: string;
  cpPassword: string;
  cpConfirmPassword: string;
  agreeToTerms: boolean; // ?
}

export default async function postEmployerSignUp(body: EmployerSignUpBody) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(
      `/auth/cp-signup`,
      body
    );

    return response.data;
  } catch (e) {}
}
