import { LoginType, ResponseDTO } from "@/types";

import apiInstance from "../apiInstance";

interface MyProfileType {
  userId: number;
  username: string;
  nickname: string;
  email: string;
  phoneNumber: number;
  loginType: LoginType;
}

export default async function getMyProfile() {
  try {
    const response = await apiInstance.get<ResponseDTO<MyProfileType>>(
      `/users/profile`
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
}
