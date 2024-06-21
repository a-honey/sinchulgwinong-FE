import apiInstance from "../apiInstance";

export interface VerifyAuthenticationNumberBody {
  email: string;
  code: string;
}
export default async function postVerifyAuthenticationNumber(
  body: VerifyAuthenticationNumberBody
) {
  try {
    const response = await apiInstance.post(`/email/verifyCode`, body);

    const res = await response.json();
    console.log(res.message);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
