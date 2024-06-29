import { EmployerType } from "@/api/employer/getMyEmployerInfo";
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
    const response = await apiInstance.get<ResponseDTO<EmployerType>>(
      `/cpUsers/profile`
    );

    return !!response.data.cpUserId;
  } catch (e) {
    return false;
  }
}
