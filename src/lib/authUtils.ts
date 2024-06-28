import { MyProfileType } from "@/api/user/getMyProfile";
import { ResponseDTO } from "@/types";
import apiInstance from "@/api/apiInstance";

export async function checkIsLogin() {
  try {
    await apiInstance.get<ResponseDTO<MyProfileType>>(`/users/profile`);

    return true;
  } catch (e) {
    return false;
  }
}

export async function checkIsEmployeeLogin() {
  try {
    const response = await apiInstance.get<ResponseDTO<MyProfileType>>(
      `/users/profile`
    );

    return !!response.data.userId;
  } catch (e) {
    return false;
  }
}
