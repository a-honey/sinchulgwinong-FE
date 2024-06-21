import { LoginType } from "@/types";
import apiInstance from "../apiInstance";

export interface SendAuthenticationNumberBody {
  email: string;
  userType: LoginType;
}
export default async function postSendAuthenticationNumber(
  body: SendAuthenticationNumberBody
) {
  try {
    const response = await apiInstance.post(`/email/sendCode`, body);

    const res = await response.json();
    console.log(res.message);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
