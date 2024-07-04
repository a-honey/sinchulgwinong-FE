import { LoginType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

export interface SendAuthenticationNumberBody {
  email: string;
  userType: LoginType;
}
export default async function postSendAuthenticationNumber(
  body: SendAuthenticationNumberBody
) {
  try {
    const response = await apiInstance.post<ResponseDTO<string>>(
      `/email/sendCode`,
      body
    );

    return response.data;
  } catch (e) {}
}
